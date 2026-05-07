# Troubleshooting

## Node Version Problems

This project expects Node.js 22.12.0 or newer.

Check:

```bash
node -v
```

If you use `nvm`:

```bash
nvm install
nvm use
```

## Dependencies Did Not Install

Run:

```bash
npm run setup
```

If that still fails, delete `node_modules` and reinstall:

```bash
rm -rf node_modules
npm install --include=optional --no-audit --no-fund
```

## TinaCMS Editor Does Not Open

Start the combined dev server:

```bash
npm run dev
```

Then open:

```text
http://localhost:4330/admin/index.html
```

The template uses:

- Astro site port: `4330`
- TinaCMS app port: `4010`
- TinaCMS datalayer port: `9010`

If those ports are busy, stop the old process or change the ports in `package.json` and `astro.config.mjs`.

## Build Fails Before Astro Starts

The build command runs TinaCMS first:

```bash
npm run build:cms
```

Then Astro:

```bash
npm run build
```

This is intentional. A successful Astro-only build is not enough if the local editor cannot build.

## Cloudflare Login Problems

Check Wrangler:

```bash
npm run cf:whoami
```

If not logged in:

```bash
npm run cf:login
```

For GitHub Actions deploys, do not use browser login. Add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as repository secrets.
