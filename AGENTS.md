# Agent Instructions

This repository is a beginner-friendly Astro, TinaCMS, GitHub and Cloudflare website template.

## Work Style

- Keep changes small and explain which files changed.
- Prefer editing content in `src/content` before changing components.
- Preserve the starter structure unless the user explicitly asks for a redesign.
- Run `npm run build` after code or schema changes.
- Do not edit generated files in `tina/__generated__`, `public/admin`, `.astro`, or `dist`.

## Important Commands

```bash
npm run setup
npm run dev
npm run doctor
npm run build
npm run deploy
```

## Key Files

- `src/content/site_settings/main.json`: visual presets, logo settings, font settings, layout settings, footer copy
- `src/content/home/index.md`: homepage hero and blocks
- `src/content/pages`: editable pages
- `tina/collections`: TinaCMS editing schema
- `src/config/brand.ts`: colour, font, logo and layout option definitions
- `src/utils/siteSettings.ts`: normalises settings and turns them into CSS variables
- `wrangler.jsonc`: Cloudflare Worker assets deploy config
- `packages/ui`: bundled local shared component package

## First-Time User Guidance

If the user is new, guide them through:

1. Run `npm run setup`.
2. Run `npm run dev`.
3. Open `http://localhost:4330`.
4. Open `http://localhost:4330/admin/index.html`.
5. Edit Site Settings before deeper code changes.
6. Run `npm run build`.
