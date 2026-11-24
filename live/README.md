# Live-Paket: vertriebs-zirkel.de im Anzeigetafel-Design (Richtung A)

Startseite und alle elf Unterseiten im selben Design. Keine Seite lädt mehr CSS oder JS der alten Astro-Seite.

## Hochladen ins Web-Root von vertriebs-zirkel.de (All-Inkl)

Vorher die alte `index.html` als `index-alt-2026-11-20.html` sichern.

- `index.html` (Startseite)
- `tafel.css` (gemeinsames CSS aller Unterseiten)
- `tafel.js` (Menü und Klappen auf den Unterseiten)
- `fonts/archivo-latin.woff2`
- `images/fares-ki-held-600.webp`, `images/fares-ki-held-900.webp`, `images/fares-ki-held-1200.webp`
- `images/fares-ki-morgen-800.webp`, `images/fares-ki-morgen-1200.webp`, `images/fares-ki-morgen-1600.webp`, `images/fares-ki-morgen-2000.webp`
- Unterseiten, jeweils der ganze Ordner mit `index.html` (ersetzt die alten Ordner gleichen Namens):
  - `angebote/`
  - `vertriebscheck/`
  - `vertriebsrad/` (das Rad steckt als Inline-Skript in der Seite, Anker `#rad`)
  - `praxisperformance-90/`
  - `wissen/`, `wissen/gespraechseinstieg/`, `wissen/einwaende/`
  - `kontakt/`
  - `ueber-fares/`
  - `impressum/`
  - `datenschutz/`

## Dateien, die schon auf dem Server liegen und bleiben müssen

Nicht in diesem Paket, werden aber verwendet:

- `/favicon.png`, `/apple-touch-icon.png` (alle Seiten)
- `/images/fares-im-gespraech.webp` (Über Fares)

`/images/fc-monogramm.png` und `/images/fares-portrait-hub.webp` brauchen die neuen Seiten nicht mehr.

## Alter Astro-Ordner

Nach dem Upload verweist keine Seite mehr auf den alten Astro-Asset-Ordner im Web-Root (CSS- und JS-Bündel der alten Seite). Ob er gelöscht wird, entscheidet Felix.

Schrift selbst gehostet, keine Anfragen an Google oder andere Dritte. Calendly ist nur verlinkt, nicht eingebettet. Die Bilder der Startseite sind KI-Bilder und so gekennzeichnet.
