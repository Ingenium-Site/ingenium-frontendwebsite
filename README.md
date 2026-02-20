# Ingenium (React + Vite + Tailwind)

This project recreates the **Ingenium** homepage layout from your provided mockup, with:

- Single-page vertical scroll layout with anchored sections
- Sticky navigation with active-section highlighting
- **Hero “In + morphing word”** effect (In stays fixed; the second word cycles through Insight, Influence, Integrity, Impact, Ingenium)
- Restrained rotating banner (quiet fade shift)
- Gated “Initiate” modal form (front-end demo)
- Modern, elegant styling (paper + drafting-grid background)
- Local **sample placeholder images** (safe to replace later)

## Run locally

1) Install dependencies
```bash
npm install
```

2) Start dev server
```bash
npm run dev
```

3) Build for production
```bash
npm run build
```

4) Preview the build
```bash
npm run preview
```

## Replace images

All images live in:

- `src/assets/`

Replace any placeholder JPGs with your real photography, keeping the same filenames, or update the file references in:

- `src/data/site.ts`

## Where to edit content

- Navigation + hero copy + cards + case previews:
  - `src/data/site.ts`

- Layout sections:
  - `src/sections/*`

- “Initiate” modal form:
  - `src/App.tsx`

## Notes

- Motion is intentionally restrained to match the brief.
- The consultation form currently just shows a “Request received” state — wire it to your backend/CRM later.

