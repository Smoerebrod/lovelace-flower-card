import { describe, it, expect } from 'vitest';
import {
  autoWarnThreshold,
  resolveWarnZone,
  zoneIndex,
  zoneColors,
  ZONE_COLORS,
  WARN_STEP,
} from '../src/utils/warnZones';
import { FlowerCardConfig } from '../src/types/flower-card-types';

const baseConfig = (extra: Partial<FlowerCardConfig>): FlowerCardConfig =>
  ({ type: 'custom:flower-card', entity: 'plant.test', ...extra }) as FlowerCardConfig;

describe('autoWarnThreshold', () => {
  it('computes min + 25% of range, rounded to step', () => {
    // Testpflanze reference values from the patch documentation:
    expect(autoWarnThreshold(20, 60, WARN_STEP.moisture)).toBe(30);        // moisture
    expect(autoWarnThreshold(30, 70, WARN_STEP.humidity)).toBe(40);        // humidity
    expect(autoWarnThreshold(15, 30, WARN_STEP.temperature)).toBe(19);     // temperature: 18.75 -> 19
    expect(autoWarnThreshold(100, 2000, WARN_STEP.conductivity)).toBe(600); // conductivity: 575/50 = 11.5, Math.round -> 12 -> 600
  });
});

describe('resolveWarnZone', () => {
  it('is disabled without config or without any warn source', () => {
    expect(resolveWarnZone(undefined, 'moisture', 20, 60).enabled).toBe(false);
    expect(resolveWarnZone(baseConfig({}), 'moisture', 20, 60).enabled).toBe(false);
  });

  it('enables auto mode via <name>_warn_auto: true', () => {
    const res = resolveWarnZone(baseConfig({ moisture_warn_auto: true }), 'moisture', 20, 60);
    expect(res).toEqual({ enabled: true, warn: 30, source: 'auto' });
  });

  it('manual <name>_zones.warn always wins — even when the toggle is false', () => {
    const config = baseConfig({ moisture_zones: { warn: 35 }, moisture_warn_auto: false });
    const res = resolveWarnZone(config, 'moisture', 20, 60);
    expect(res).toEqual({ enabled: true, warn: 35, source: 'manual' });
  });

  it('manual value beats auto when both are set', () => {
    const config = baseConfig({ moisture_zones: { warn: 45 }, moisture_warn_auto: true });
    expect(resolveWarnZone(config, 'moisture', 20, 60).warn).toBe(45);
  });

  it('toggle false without manual value disables the zone', () => {
    const config = baseConfig({ moisture_warn_auto: false });
    expect(resolveWarnZone(config, 'moisture', 20, 60).enabled).toBe(false);
  });

  it('clamps out-of-range manual values into [min, max]', () => {
    expect(resolveWarnZone(baseConfig({ moisture_zones: { warn: 90 } }), 'moisture', 20, 60).warn).toBe(60);
    expect(resolveWarnZone(baseConfig({ moisture_zones: { warn: 5 } }), 'moisture', 20, 60).warn).toBe(20);
  });

  it('never enables for non-warn-capable sensors (illuminance, dli use a log scale)', () => {
    const config = baseConfig({
      illuminance_warn_auto: true,
      illuminance_zones: { warn: 5000 },
      dli_warn_auto: true,
    } as Partial<FlowerCardConfig>);
    expect(resolveWarnZone(config, 'illuminance', 0, 100000).enabled).toBe(false);
    expect(resolveWarnZone(config, 'dli', 0, 30).enabled).toBe(false);
  });

  it('is disabled for a degenerate range (max <= min)', () => {
    expect(resolveWarnZone(baseConfig({ moisture_warn_auto: true }), 'moisture', 60, 60).enabled).toBe(false);
  });
});

describe('zoneIndex', () => {
  it('classifies values into the four zones', () => {
    expect(zoneIndex(true, 10, 20, 30, 60)).toBe(0); // below min
    expect(zoneIndex(true, 25, 20, 30, 60)).toBe(1); // warn band
    expect(zoneIndex(true, 45, 20, 30, 60)).toBe(2); // ok band
    expect(zoneIndex(true, 70, 20, 30, 60)).toBe(3); // above max
  });

  it('returns -1 when unavailable', () => {
    expect(zoneIndex(false, 25, 20, 30, 60)).toBe(-1);
  });

  it('boundary values: min is in-range, max is over', () => {
    expect(zoneIndex(true, 20, 20, 30, 60)).toBe(1);
    expect(zoneIndex(true, 60, 20, 30, 60)).toBe(3);
  });
});

describe('zoneColors', () => {
  it('uses inverted palette for temperature and purple top for conductivity', () => {
    expect(zoneColors('temperature')[0]).toBe('#378ADD');
    expect(zoneColors('temperature')[3]).toBe('#E24B4A');
    expect(zoneColors('conductivity')[3]).toBe('#8E44AD');
    expect(zoneColors('moisture')).toEqual(ZONE_COLORS.default);
  });
});
