# Agentic Site Template

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Use this template](https://img.shields.io/badge/Use%20this%20template-2ea44f?logo=github)](https://github.com/miichaelsmedley/agentic-site-template/generate)

A transportable Astro, TinaCMS, GitHub and Cloudflare website template for people beginning their agentic coding journey.

This is a real editable website, not a blank tutorial. It ships with a 30-block component library, local TinaCMS editing, starter content, environment checks, a working contact form (your first dynamic page), Cloudflare Worker assets deployment, and a GitHub Actions deploy workflow.

## What You Need

- A GitHub account
- A Cloudflare account (free tier is fine)
- Node.js 22.12.0 or newer
- An AI coding agent such as Codex, Claude Code, Cursor, or GitHub Copilot
- A Resend account if you want the contact form to actually email you (optional, free tier is fine)

No private package registry is required. The shared UI package is bundled inside `./packages/ui`.

## Get Your Own Copy In Five Minutes

This repo is a **GitHub Template**. That means you don't fork it — you copy it. The button above creates a brand-new repository under your own account with no shared history. You can then delete it, rewrite it, or push it to your own Cloudflare without affecting this one.

1. Click **[Use this template](https://github.com/miichaelsmedley/agentic-site-template/generate)** at the top of the GitHub page (or the badge above).
2. Choose your account, give the new repo a name (e.g. `my-business-site`), and click **Create repository**.
3. On your computer, clone the new repo:
   ```bash
   git clone https://github.com/<your-username>/<your-new-repo>.git
   cd <your-new-repo>
   ```
   Or open it directly in GitHub Codespaces — Node is pre-configured by `.devcontainer/devcontainer.json`.
4. Install and start it:
   ```bash
   npm run setup
   npm run dev
   ```
5. Open the site at `http://localhost:4330` and the TinaCMS editor at `http://localhost:4330/admin/index.html`.
6. Hand the project to your coding agent. Ask for one small change. Run `npm run build`. Iterate.
7. When you're ready to publish, follow [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) to deploy to Cloudflare.

If `.nvmrc` or `.node-version` complains, install the matching Node version (`nvm install` or `fnm install` will read those files automatically).

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
