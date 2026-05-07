# Agentic Coding Guide

Use this starter as a real first project. The aim is to learn by changing a working website in small, verified steps.

## The Safe Loop

1. Ask for one clear change.
2. Let the agent inspect the repo before editing.
3. Keep the existing structure unless you explicitly want a redesign.
4. Run `npm run build`.
5. Review the changed files.
6. Commit the working state.

## Good Beginner Prompts

```text
Change the site name, logo text, footer note, and contact email. Keep the layout the same. Run npm run doctor after the change.
```

```text
Rewrite the homepage for a local music teacher. Keep the existing blocks and only change content files unless code changes are needed.
```

```text
Add a Services page. Add it to navigation, make it editable in TinaCMS, and run npm run build.
```

```text
Replace the sample case studies with three examples for my business. Keep the same markdown structure.
```

```text
In Site Settings, change the site to the Coastal Blue colour scheme, use an initials logo, set spacing to compact, and run npm run build.
```

```text
Make the homepage hero easier to read. Use the Starter Readable font pairing, set the Deploy slide heading size to Compact, and run npm run build.
```

## Where Things Live

- `src/content/home/index.md`: homepage hero and blocks
- `src/content/pages`: editable pages
- `src/content/posts`: writing and guides
- `src/content/case_studies`: work or project cards
- `src/content/site_settings/main.json`: logo text, colour tokens, font choices, footer and contact intro
- `src/content/navigation/main.json`: navigation
- `src/config/site.ts`: site URL, title template, email and SEO defaults
- `src/config/brand.ts`: colour scheme, logo, font and layout option definitions
- `src/utils/siteSettings.ts`: reads Site Settings and applies CSS variables
- `wrangler.jsonc`: Cloudflare Worker config and email environment variables
- `src/worker.ts` and `src/worker/`: backend code for the contact form
- `packages/ui`: bundled shared UI and Tina block templates

## Going Beyond Static — The Contact Form

The contact page is the first dynamic piece of the site: it submits to a
small Cloudflare Worker that emails you the message. See
[`docs/CONTACT-FORM.md`](./CONTACT-FORM.md) for what to configure in
Resend, how to set the API key as a secret, and where to take the code
next (storing submissions in a database, building an admin page, etc.).

## Avoid Big First Prompts

Avoid prompts like:

```text
Make this into my whole business website and deploy it.
```

Ask for the business details first, then homepage copy, then pages, then images, then build, then deploy.
