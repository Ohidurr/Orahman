# Ohidur Rahman — Personal Site (v2)

A redesign of the original CRA-based personal site. Same stack, cleaner
architecture, much stronger visual identity, and a real portfolio section
instead of an empty one.

## Quick start

```bash
cd Frontend
npm install
npm start
```

Open <http://localhost:3000>.

## Stack

- React 18 (Create React App)
- Plain CSS, scoped per component, with design tokens in `src/App.css`
- Font Awesome for social icons
- Google Fonts (Fraunces, Inter, JetBrains Mono)
- Zero runtime dependencies beyond what was already there + `@fortawesome/free-solid-svg-icons`

## How to edit content

**All copy lives in one file:** `src/data/content.js`

Open it and edit:

- `profile` — your name, role, location, availability status, hero blurbs
- `links` — email, GitHub, LinkedIn, X, resume path
- `projects` — array of work items (year, title, description, tags, link)
- `experience` — timeline entries
- `skills` — array of strings
- `writing` — blog/note entries (set to `[]` to hide the section entirely)
- `nav` — which sections appear in the nav

Nothing else needs to change for a content update. The layout, animations,
and responsive behavior all read from this file.

## How to edit design

All colors, fonts, and spacing tokens live at the top of `src/App.css`:

```css
:root {
  --bg: #f4f1ea;           /* page background */
  --ink: #17170f;          /* primary text */
  --accent: #c8431a;       /* accent color (italic words, hover) */
  --serif: 'Fraunces', ... /* display font */
  /* ... etc */
}
```

Dark mode is automatic via `prefers-color-scheme` and uses the same
variable names inside a `@media (prefers-color-scheme: dark)` block.

## Project structure

```
Frontend/
├── public/
│   ├── index.html        ← SEO, OG tags, theme color
│   ├── manifest.json
│   └── resume.pdf        ← drop your resume here
├── src/
│   ├── Components/
│   │   ├── Navbar.js     ← sticky nav + mobile hamburger
│   │   ├── Landing.js    ← hero with animated headline + wave easter egg
│   │   ├── Portfolio.js  ← work list (reads from data/content.js)
│   │   ├── About.js      ← bio, experience timeline, skills, resume embed
│   │   ├── Writing.js    ← optional writing/notes grid
│   │   ├── Contact.js    ← big email link, social chips
│   │   └── Footer.js
│   ├── css/              ← one stylesheet per component
│   ├── data/
│   │   └── content.js    ← ALL content lives here
│   ├── App.js
│   ├── App.css           ← design tokens + shared primitives
│   ├── index.js
│   └── index.css         ← font imports
└── package.json
```

## What changed from v1

| Area | Before | After |
|---|---|---|
| Portfolio | Empty `<h2>` | 4 real project cards with tags, years, hover states |
| Landing | "Welcome." + wave emoji | Animated headline, status dot, location, two blurbs |
| Mobile nav | None (items stacked) | Full-screen serif drawer with hamburger |
| Typography | Consolas only | Fraunces / Inter / JetBrains Mono system |
| About | One generic paragraph | Bio + experience timeline + skills grid + resume embed |
| Contact | 3 icons | Big serif email + labeled social chips |
| Dark mode | None | Automatic via `prefers-color-scheme` |
| SEO | Default CRA | Full meta tags, OG, Twitter card |
| Content editing | Scattered across components | Single `data/content.js` file |
| Motion | Wave emoji only | Staggered reveals, scroll-triggered, `prefers-reduced-motion` respected |

## Before deploying

1. Replace `links.email` in `src/data/content.js` with your real email
2. Drop your real resume as `public/resume.pdf`
3. (Optional) Drop an `og-image.png` in `public/` — 1200×630 PNG for rich link previews
4. Fill in real project data in `src/data/content.js` (the 4 items there are plausible placeholders based on your background)

## Deploy

```bash
npm run build
```

Outputs a static bundle to `build/`. Deploy anywhere — Vercel, Netlify,
GitHub Pages, Cloudflare Pages. No server needed.
