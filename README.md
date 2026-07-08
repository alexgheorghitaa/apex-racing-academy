# Apex Racing Academy

Site-**concept** pentru un club de motorsport fictiv — **piesă de portofoliu**, realizată ca demonstrație de design + Next.js. Clubul, piloții, rezultatele și partenerii sunt inventați.

## Stack

- **Next.js 15** (App Router, pagini statice) + TypeScript strict
- **Fonturi:** Anton (titluri condensate) + Jost (body) prin `next/font` — identice pe orice device
- CSS global (design în stil „Championship Touring")
- Fotografii hero: Flickr, licență CC BY 2.0 (creditate în footer)

## Rulare locală

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # verificare producție
```

## Deploy pe Vercel

Conectat la GitHub → deploy automat la fiecare `git push`.

```bash
npx vercel --prod   # deploy manual în producție
```

## Structura

```
app/
├── layout.tsx        # fonturi, nav + fanion, footer
├── globals.css       # tot designul (tokens + componente)
├── page.tsx          # Acasă — hero slideshow, carousele, discipline, ethos
├── clubul/           # poveste + piloți + cifrele clubului
├── juniorii/         # academia + pași de înscriere
├── calendar/         # etape + arhiva de rezultate
├── parteneri/        # grila partenerilor + CTA
└── contact/          # date contact + formular
components/            # nav, hero-slideshow, carousel, reveal-init, contact-form, photo, footer
public/hero/          # fotografii hero (Flickr CC BY 2.0)
```

> Conținut fictiv — proiect de demonstrație.
