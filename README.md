# Junior MotorSport — Krepelka Juniors Motorsport

Site-ul clubului CS Krepelka Motorsport (Timișoara) — **prototip demo**, conținutul se validează cu clubul înainte de lansare.

> ⚠️ **Reguli de conținut:** faptele despre club vin din surse publice și se confirmă cu Krepelka · imaginile cu juniori (minori) se publică **doar cu acordul scris al părinților** · placeholder-ele `[DE COMPLETAT]` / `[DE VALIDAT]` se umplu doar cu date de la club.

## Stack

- **Next.js 15** (App Router, pagini statice) + TypeScript strict
- **Fonturi:** Anton (titluri condensate) + Jost (body, geometric) prin `next/font` — arată identic pe orice device
- CSS global (design portat 1:1 din prototipul aprobat — stil „Championship Touring")
- Zero dependențe de runtime în afară de React/Next

## Rulare locală

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # verificare producție
```

## Deploy pe Vercel

**Varianta 1 — din GitHub (recomandat):**
1. Push repo-ul pe GitHub (vezi mai jos)
2. [vercel.com/new](https://vercel.com/new) → Import repository → `Junior-MotorSport`
3. Zero configurare — Vercel detectează Next.js automat → **Deploy**

**Varianta 2 — direct din terminal:**
```bash
npx vercel          # login + deploy preview
npx vercel --prod   # deploy producție
```

### Legarea de GitHub (dacă repo-ul remote există deja)

```bash
git remote add origin git@github.com:<user>/Junior-MotorSport.git
git push -u origin main
```

## Structura

```
app/
├── layout.tsx        # fonturi, nav + fanion, footer
├── globals.css       # tot designul (tokens + componente)
├── page.tsx          # Acasă — hero slideshow, carousele, discipline, ethos
├── clubul/           # poveste + campioni + presa
├── juniorii/         # povestea Darian + regula minorilor + pași academie
├── calendar/         # etape [DE COMPLETAT] + arhiva de rezultate
├── parteneri/        # grila partenerilor + CTA
└── contact/          # date contact + formular (mock în demo)
components/
├── nav.tsx           # navigare cu fanion central, activ pe rută
├── hero-slideshow.tsx# crossfade + Ken Burns (respectă reduced-motion)
├── carousel.tsx      # săgeți + buline + swipe touch
├── reveal-init.tsx   # reveal-uri la scroll cu stagger, per rută
├── contact-form.tsx  # formular demo (funcțional la lansare + GDPR)
├── photo.tsx         # scene-standin până vin pozele reale
└── footer.tsx
public/hero/          # cadrele hero (se înlocuiesc cu pozele clubului)
```

## De făcut înainte de lansarea publică

- [ ] Pozele reale ale clubului (înlocuiesc scenele-standin + cadrele din `public/hero/`)
- [ ] Logo-ul clubului în fanion (acum: monogramă „K")
- [ ] Toate `[DE COMPLETAT]` / `[DE VALIDAT]` — cu date de la club
- [ ] Formular de contact funcțional + text GDPR (vin date despre minori!)
- [ ] Acordul scris al părinților pentru orice imagine cu juniori
- [ ] Validarea finală a conținutului cu Alexandru Krepelka
