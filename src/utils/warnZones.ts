import { FlowerCardConfig } from "../types/flower-card-types";

/**
 * Warn-zone logic — single source of truth.
 *
 * A warn zone splits the range between min and max into a lower "warning"
 * band and an upper "ok" band, yielding 4 zones overall:
 *   zone 0: below min      (critical)
 *   zone 1: min..warn      (warning)
 *   zone 2: warn..max      (ok)
 *   zone 3: above max      (critical/over)
 *
 * Design decisions (see PATCHES.md):
 * - Low-side warn only: the warn threshold always sits in the lower quarter
 *   of the range. High-side warning is intentionally not modelled — there is
 *   no actionable response for "too warm" / "too moist" in this household.
 * - Only linear-scale sensor types are warn-capable. Illuminance and DLI are
 *   excluded: the bar uses a log scale for lx, so a linearly computed tick
 *   position would not match the fill. If light warn zones are ever wanted,
 *   the tick position must be computed in log space first.
 * - A manual `<name>_zones.warn` value in the card YAML ALWAYS wins, even if
 *   the UI toggle `<name>_warn_auto` is false. The toggle only controls the
 *   automatic fallback. Manual values are clamped to [min, max].
 * - The auto formula (min + 25% of range, rounded to a sensor-specific step)
 *   is duplicated in the HA notification templates. If you change WARN_STEP
 *   or AUTO_WARN_FACTOR here, update those templates too.
 */

/** Rounding step per sensor type; also defines which types are warn-capable. */
export const WARN_STEP: Record<string, number> = {
    moisture: 5,        // %
    humidity: 5,        // %
    temperature: 1,     // °C
    conductivity: 50,   // µS/cm
};

export const AUTO_WARN_FACTOR = 0.25;

/** Zone colors per sensor type: [below-min, warn, ok, above-max]. */
export const ZONE_COLORS: Record<string, [string, string, string, string]> = {
    temperature: ["#378ADD", "#64B5F6", "rgba(43,194,83,1)", "#E24B4A"],
    conductivity: ["#E24B4A", "#EF9F27", "rgba(43,194,83,1)", "#8E44AD"],
    default: ["#E24B4A", "#EF9F27", "rgba(43,194,83,1)", "#378ADD"],
};

export const UNAVAILABLE_COLOR = "rgba(158,158,158,1)";

export const zoneColors = (name: string): [string, string, string, string] =>
    ZONE_COLORS[name] ?? ZONE_COLORS.default;

/** min + 25% of range, rounded to the sensor's step. */
export const autoWarnThreshold = (min: number, max: number, step: number): number =>
    Math.round((min + (max - min) * AUTO_WARN_FACTOR) / step) * step;

export interface WarnZoneResolution {
    enabled: boolean;
    /** Resolved warn threshold, clamped to [min, max]. Set iff enabled. */
    warn?: number;
    source?: "manual" | "auto";
}

/**
 * Resolve the effective warn threshold for one attribute from the card config.
 * Precedence: manual `<name>_zones.warn` > `<name>_warn_auto: true` > disabled.
 */
export const resolveWarnZone = (
    config: FlowerCardConfig | undefined,
    name: string,
    min: number,
    max: number,
): WarnZoneResolution => {
    const step = WARN_STEP[name];
    if (config === undefined || step === undefined) return { enabled: false };
    if (!(max > min)) return { enabled: false };

    const zones = config[`${name}_zones`] as { warn?: number | string } | undefined;
    const manualRaw = zones?.warn;
    if (manualRaw !== undefined && manualRaw !== null && !isNaN(Number(manualRaw))) {
        const clamped = Math.min(max, Math.max(min, Number(manualRaw)));
        return { enabled: true, warn: clamped, source: "manual" };
    }
    if (config[`${name}_warn_auto`] === true) {
        return { enabled: true, warn: autoWarnThreshold(min, max, step), source: "auto" };
    }
    return { enabled: false };
};

/** Classify a value into zone 0-3; -1 if the value is unavailable. */
export const zoneIndex = (
    available: boolean,
    val: number,
    min: number,
    warn: number,
    max: number,
): number => {
    if (!available) return -1;
    if (val < min) return 0;
    if (val < warn) return 1;
    if (val < max) return 2;
    return 3;
};
