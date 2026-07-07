# Fork-Patches gegenüber Olen/lovelace-flower-card

Dieser Fork erweitert die Flower Card um Warn-Zonen, ein Care-Info-Toggle und
deutsche Labels. Diese Datei ist die kanonische Dokumentation der Abweichungen
vom Upstream — sie wird im selben Commit gepflegt wie der Code.

Basis: Upstream `v2026.6.1` (+ Dependency-Bumps von `main`).

---

## 1. Warn-Zonen (4-Zonen-Balken)

Zentrale Logik in `src/utils/warnZones.ts` — **einzige Quelle** für Formel,
Schrittweiten, Farben und Zonen-Klassifizierung (Balken und Tooltip nutzen
dieselben Funktionen).

**Zonen:** `0` unter min · `1` min–warn (Warnband) · `2` warn–max (ok) · `3` über max

**Aktivierung, Präzedenz (wichtig!):**

1. Manueller Wert `<sensor>_zones.warn` in der Card-YAML → **gewinnt immer**,
   auch wenn der UI-Toggle aus ist. Werte außerhalb [min, max] werden geclamped.
2. UI-Toggle `<sensor>_warn_auto: true` (Editor: „Warn-Zonen") → Auto-Formel.
3. Sonst: Original-Balken (rot/grün) wie Upstream.

**Auto-Formel:** `warn = round((min + range × 0.25) / step) × step`

| Sensor | Config-Schlüssel | Schrittweite |
|---|---|---|
| moisture | `moisture_zones.warn` / `moisture_warn_auto` | 5 % |
| humidity | `humidity_zones.warn` / `humidity_warn_auto` | 5 % |
| temperature | `temperature_zones.warn` / `temperature_warn_auto` | 1 °C |
| conductivity | `conductivity_zones.warn` / `conductivity_warn_auto` | 50 µS/cm |

⚠️ Dieselbe Formel existiert unabhängig in den HA-Notification-Templates
(Zwei-Tier-Pflanzenpflege). Änderungen an Faktor oder Schrittweiten müssen
dort nachgezogen werden.

**Bewusste Einschränkungen:**
- **Nur Low-Side-Warnzone.** Der Warn-Schwellwert liegt immer im unteren
  Viertel. High-Side („zu warm", „zu feucht") ist nicht modelliert — es gibt
  im Haushalt keine Gegenmaßnahme (keine Klimaanlage; Substrat lässt sich
  nicht entwässern).
- **Illuminance/DLI sind ausgeschlossen** (Guard in `resolveWarnZone`). Der
  Balken nutzt für `lx` eine Log-Skala; eine linear berechnete Tick-Position
  würde nicht zum Fill passen. Falls Licht-Warnzonen je gewünscht sind, muss
  die Tick-Position zuerst in den Log-Raum transformiert werden.

**Zonenfarben** (`ZONE_COLORS`):

| Sensor | Zone 0 | Zone 1 | Zone 2 | Zone 3 |
|---|---|---|---|---|
| moisture/humidity (default) | `#E24B4A` rot | `#EF9F27` orange | `rgba(43,194,83,1)` grün | `#378ADD` blau |
| temperature | `#378ADD` blau | `#64B5F6` hellblau | grün | `#E24B4A` rot |
| conductivity | `#E24B4A` rot | `#EF9F27` orange | grün | `#8E44AD` lila |

## 2. Balken-Design

`renderWarnZoneMeter` in `src/utils/attributes.ts`: 3-Div-Struktur des
Originals bleibt erhalten (linkes Pill, Hauptbalken, rechtes Pill; flex-grow
1+10+1 → Zahlenwert positionsstabil). Alle drei Elemente einheitlich in der
aktuellen Zonenfarbe; nicht verfügbar → grau.

**Warn-Tick als konkave Lücke:** Der Fill ist in zwei Segmente geteilt
(±2.5 px um die Tick-Position, konvex abgerundete Enden). Nur sichtbar, wenn
der Fill den Schwellwert erreicht. Tick-Position auf 3–97 % geclamped, damit
die Lücke nie mit den Balkenecken kollidiert. Keine Rand-Ticks bei 0/100 %.

## 3. Tooltip

Zeigt zusätzlich `warn: X unit`, wenn eine Warn-Zone aktiv ist (gleicher
Resolver wie der Balken).

## 4. Care Info Toggle (ℹ)

- Unicode `ℹ` (U+2139) statt `ha-icon` — MDI lädt in der Companion App nicht
  zuverlässig. Styling über `#care-toggle` in `src/styles.ts`.
- Icon erscheint **nur**, wenn `show_care` in der Card-Config nicht leer ist.
- Sichtbarkeit über Host-Klasse `care-visible` (übersteht Lit-Re-Renders).
- **Maus:** Hover zeigt/verbirgt (`pointerenter`/`pointerleave`,
  nur `pointerType === 'mouse'`).
- **Touch/Stift:** Tap toggelt, Auto-Hide nach 5 s. Der Timer wird bei jedem
  Tap zurückgesetzt (`clearTimeout`), Maus-Klicks sind vom Tap-Pfad
  ausgenommen — kein Konflikt zwischen Hover und Klick.

```yaml
show_care:
  - care_watering
  - care_sunlight
  - care_soil
  - care_pruning
  - care_fertilization
```

## 5. Deutsche Labels

`careFields` in `src/utils/constants.ts`: Gießen, Lichtbedarf, Substrat,
Rückschnitt, Düngung. „Soil Temperature" (Sensor-Feldname) bleibt unberührt.
Editor-Sektion „Warn-Zonen" mit deutschen Toggle-Labels.

## Tests

`tests/warn-zones.test.ts` sichert die Semantik ab (Formel-Referenzwerte der
Testpflanze, Präzedenz manuell > Toggle, Illuminance-Guard, Clamping,
Zonen-Grenzen). `tests/care.test.ts` an deutsche Labels angepasst.

## Deployment

Fork-CI (unverändert von Upstream): Version in `package.json` erhöhen
(Schema: Upstream-Version + 4. Stelle, z. B. `2026.6.1.2`) → Push auf `main`
→ „Test & Lint" → „Auto Release" baut `flower-card.js` + `.gz`, committet,
taggt, released → Update via HACS (Custom Repository). Kein manuelles
Kopieren, kein hacstag-Handling mehr.

## Test-Setup in HA (Referenz)

Hilfssensoren: `input_number.testpflanze_*` + Template-Sensoren
`sensor.testpflanze_{moisture,temperature,conductivity,humidity}` mit
korrekter device_class.

| Sensor | min | warn (auto) | max |
|---|---|---|---|
| moisture | 20 % | 30 % | 60 % |
| temperature | 15 °C | 19 °C | 30 °C |
| conductivity | 100 µS/cm | 600 µS/cm | 2000 µS/cm |
| humidity | 30 % | 40 % | 70 % |

## Offene Punkte

1. Sortierung nach Gieß-Dringlichkeit via `auto-entities` (HACS), Jinja-Filter
   `(moisture − min) / (max − min)` aufsteigend — wenn alle Pflanzen final
   konfiguriert sind.
2. `show_care` für Geigenfeige und Goldfruchtpalme in deren Card-YAMLs.
3. Warn-Werte pro Pflanze explizit als `<sensor>_zones.warn` in die
   Card-YAMLs übernehmen (Single Source of Truth mit den
   Notification-Templates); Auto-Toggle dann nur noch als Fallback.
