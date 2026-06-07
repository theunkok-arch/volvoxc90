# Volvo XC90 V8 Executive, verkoopsite

Mobiele, snelle one-pager om een Volvo XC90 V8 (particulier) te verkopen.
Gebouwd met Next.js (App Router) + TypeScript + Tailwind CSS. Volledig
statisch, geen backend, geen cookies, geen trackers.

Ontwerp: concept **Skog** (Nordic light). Warm papierwit, gedempt bosgroen
accent, humanist grotesk (Mona Sans, zelf gehost).

## Jouw gegevens aanpassen

Alle contactgegevens staan op een plek: [`src/lib/site.ts`](src/lib/site.ts).
Vul daar je telefoonnummer, WhatsApp en e-mail in. De rest van de site
(knoppen, onderbalk, SEO) gebruikt die waarden automatisch.

De teksten staan letterlijk in [`src/lib/content.ts`](src/lib/content.ts).

## Foto's vervangen

Zet je echte foto's in `public/images/` met dezelfde namen:

- `side.jpg`  (zijaanzicht, hero)
- `rear.jpg`  (achterkant)
- `og.jpg`    (deelafbeelding voor WhatsApp / Marktplaats, 1200x630)

De huidige bestanden zijn nette placeholders. Opnieuw genereren kan met:

```bash
npm run placeholders
```

## Lokaal draaien

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # statische export naar ./out
```

## Deploy

Statische export (`output: 'export'`) naar `./out`. Werkt op elke statische
host. Voor Netlify staat de configuratie al klaar in `netlify.toml`
(build: `npm run build`, publish: `out`).
