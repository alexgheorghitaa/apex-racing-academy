# Apex Racing Academy

A **concept site** for a fictional European motorsport club — a **portfolio piece**, built as a design + Next.js demonstration. The club, drivers, results and partners are invented.

## Stack

- **Next.js 15** (App Router, static pages) + TypeScript strict
- **Fonts:** Anton (condensed display), Jost (body), Allura (script) via `next/font` — identical on every device
- Global CSS (Championship-Touring–style design)
- Hero & content photos sourced from Flickr under CC BY 2.0 — verify each licence before commercial use

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production check
```

## Deploy on Vercel

Connected to GitHub → auto-deploys on every `git push`.

```bash
npx vercel --prod   # manual production deploy
```

## Structure

```
app/
├── layout.tsx        # fonts, metadata/OG, nav + footer
├── globals.css       # the whole design system
├── page.tsx          # Home — hero slideshow, carousels, disciplines, ethos
├── club/             # story + drivers + club in numbers
├── juniors/          # academy + enrolment steps
├── calendar/         # rounds + results archive
├── partners/         # partner grid + CTA
└── contact/          # contact details + form
components/            # nav, hero-slideshow, carousel, reveal-init, contact-form, photo, footer
public/hero, public/photos   # imagery (Flickr CC BY 2.0)
```

> Fictional content — demonstration project.
