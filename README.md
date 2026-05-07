# Agentic Site Starter

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A transportable Astro, TinaCMS, GitHub and Cloudflare website template for people beginning their agentic coding journey.

This is a real editable website, not a blank tutorial. It includes the reusable block system from the existing Bands sites, local TinaCMS editing, starter content, local setup checks, Cloudflare Worker assets deployment, and a GitHub Actions deploy workflow.

## What You Need

- A GitHub account
- A Cloudflare account
- Node.js 22.12.0 or newer
- An AI coding agent such as Codex, Claude Code, Cursor, or GitHub Copilot

No private package registry is required. The shared UI package is bundled inside `./packages/ui`.

## How A Beginner Uses This

The clean open-source path is:

1. Open the template repository on GitHub.
2. Click **Use this template** or fork it.
3. Clone the new repository to their computer or open it in GitHub Codespaces.
4. Run `npm run setup`.
5. Run `npm run dev`.
6. Open the local site and TinaCMS editor.
7. Ask Codex or Claude Code to make small changes and run `npm run build`.
8. Connect Cloudflare when they are ready to publish.

If they use Codespaces, Node is already handled by `.devcontainer/devcontainer.json`. If they work locally, `.nvmrc` and `.node-version` tell their machine which Node version this project expects.

## Quick Start

```bash
npm run setup
npm run dev
```

Open:

- Website: `http://localhost:4330`
- TinaCMS editor: `http://localhost:4330/admin/index.html`

## Personalise The Site

```bash
npm run configure
npm run doctor
npm run build
```

`npm run configure` updates the main placeholders:

- site name
- logo text
- domain
- contact email
- location
- Cloudflare Worker name

Basic visual settings are editable in TinaCMS under **Site Settings**:

- colour scheme preset
- logo style: text, initials, or uploaded logo
- logo initials and shape
- site font pairing, plus optional heading/body/hero/logo font overrides
- page width
- section spacing
- corner style
- header style

Hero slider slides also have their own **Heading Font** and **Heading Size** controls. Use **Compact** for long headings so the words do not bunch together.

You can then ask your coding agent to update content in `src/content`, components in `src/components`, and docs in `docs`.

## How The NPM Packages Work

The root `package.json` is the main install manifest. When someone runs `npm run setup`, it calls `npm install`, which downloads everything listed in `dependencies` and `devDependencies` into `node_modules`.

Main runtime packages:

- `astro`: builds the website.
- `tinacms`: powers the local content editor.
- `@astrojs/sitemap`: generates the sitemap.
- `@bands/ui`: the bundled local component/block package at `./packages/ui`.

Main development packages:

- `@tinacms/cli`: runs the TinaCMS dev server and admin build.
- `@tailwindcss/vite` and `@tailwindcss/typography`: styling pipeline.
- `wrangler`: Cloudflare CLI used for local deploys.

The local package matters: `@bands/ui` is not downloaded from npm. It points to:

```json
"@bands/ui": "file:./packages/ui"
```

That makes the template transportable as one repository. A beginner does not need to publish, link, or install a private package.

## Deploy To Cloudflare

Local deploy:

```bash
npm run cf:login
npm run deploy
```

GitHub Actions deploy:

1. Push this repo to GitHub.
2. In Cloudflare, create an API token that can deploy Workers.
3. In GitHub, add repository secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
4. Optional: add repository variables:
   - `PUBLIC_SITE_URL`
   - `PUBLIC_GA_ID`
5. Push to `main` or run the workflow manually.

## Useful Commands

```bash
npm run setup       # install dependencies and run checks
npm run configure   # replace starter placeholders
npm run doctor      # check the common setup problems
npm run dev         # run Astro and TinaCMS together
npm run build       # build TinaCMS admin and Astro static output
npm run deploy      # build and deploy to Cloudflare
```

## Good First Agent Prompt

```text
Inspect this repo, keep the current structure, and update the homepage copy for my business. Then run npm run build and summarise the files you changed.
```

More guidance lives in `docs/AGENTIC-CODING-GUIDE.md`, `docs/DEPLOYMENT.md`, and `docs/TROUBLESHOOTING.md`.

## License

MIT — see [LICENSE](LICENSE). Fork it, ship it, sell it, rebuild it. Just keep the copyright notice in copies of the original code.

Bundled and downloaded dependencies retain their own licenses (Astro, TinaCMS, Tailwind, Wrangler, etc.) — all permissive (MIT / Apache 2.0).
