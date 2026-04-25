# Ohidur Rahman — Personal Site

Liquid Glass design system, ported into React. Same CRA stack as before; drop-in
replacement for the existing `Frontend/` folder.

## Quick start

```bash
cd Frontend
npm install
npm start
```

Opens at <http://localhost:3000>. Edits hot-reload.

## What's in here

```
Frontend/
├── public/
│   ├── index.html        ← inline no-flash theme + palette init
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── Components/
│   │   ├── BgScene.js          ← animated orb backdrop
│   │   ├── Navbar.js           ← two floating icons + dropdown
│   │   ├── PaletteIndicator.js ← floating palette name chip
│   │   ├── Landing.js          ← hero + Recruiter/Engineer/Executive toggle
│   │   ├── About.js            ← Professional Experience timeline
│   │   ├── Skills.js           ← Grouped skill chips (incl. AI Agents)
│   │   ├── Portfolio.js        ← Projects panel
│   │   ├── Education.js
│   │   ├── DailyCard.js        ← Word + Fact of the Day with refresh
│   │   ├── Now.js              ← currently working on
│   │   ├── Contact.js          ← contact slots (placeholders)
│   │   └── Footer.js
│   ├── css/                    ← one stylesheet per component
│   ├── data/
│   │   └── content.js          ← ALL CONTENT lives here
│   ├── hooks/
│   │   ├── useTheme.js         ← dark/light + localStorage + system pref
│   │   ├── usePalette.js       ← random palette per page load
│   │   ├── useResumeMode.js    ← Recruiter/Engineer/Executive
│   │   └── useReveal.js        ← IntersectionObserver wrapper
│   ├── App.js
│   ├── App.css                 ← all design tokens + 7 palettes
│   ├── index.css               ← font imports
│   └── index.js
└── package.json
```

## How to edit

**Content:** `src/data/content.js` — name, role, summary (3 versions),
experience bullets, skill groups, projects, education, daily words/facts,
links. Nothing else needs to change for content updates.

**Design tokens:** `src/App.css` — every color is a CSS custom property
under `[data-theme="..."]` and `[data-theme][data-palette="..."]`.

## Features

- **7 random palettes** per page load (Aurora, Sunset, Ocean, Forest, Nebula,
  Ember, Parchment) — site feels alive on every visit
- **Light & dark mode** with system preference + manual toggle
- **Dynamic resume views** — Recruiter, Engineer, Executive (toggle in hero)
- **Daily Word + Fact** with smooth refresh animation
- **Liquid glass UI** — backdrop-blur, specular highlights, layered depth
- **Two floating nav icons** that stack vertically on mobile
- **No flash on load** — theme/palette set inline before paint
- **Respects `prefers-reduced-motion`**

## Before deploying

1. Edit `src/data/content.js`:
   - Replace `links.email`, `linkedin`, `github`, `twitter` with real URLs
   - Edit the `SLOTS` array in `src/Components/Contact.js` to show your real
     contact values (the slots are placeholder UI)
2. Drop a real `resume.pdf` into `public/`
3. (Optional) Add `og-image.png` (1200×630) to `public/` for link previews

## Deploy

```bash
npm run build
```

Outputs a static bundle to `build/`. Drop into Vercel, Netlify, Cloudflare
Pages, or anywhere static. No server required.

## Stack

- React 18 (Create React App)
- Plain CSS (no Tailwind, no UI library)
- Google Fonts (Inter, JetBrains Mono)
- Zero runtime dependencies beyond React itself
