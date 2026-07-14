# Mado Finds

A hand-curated storefront of small-space living finds on Amazon. Built as an
Amazon Associates affiliate site with a paired YouTube Shorts + TikTok
content pipeline.

## Stack

- Next.js 16 (App Router, static export)
- Tailwind CSS v4
- Motion (framer-motion successor) for animations
- Lucide React for iconography
- Deployed on GitHub Pages via GitHub Actions

## Development

```bash
npm install
npm run dev
```

Site runs at http://localhost:3000

## Build

```bash
npm run build
```

Produces static site in `./out/` ready for any static host.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which builds with `DEPLOY_TARGET=github-pages`
and deploys to GitHub Pages.

## Structure

```
src/
  app/           # Next.js App Router pages
  components/    # UI components
  data/          # Product catalog + idea lists
  lib/           # Shared motion variants and helpers
public/          # Static assets (favicon, .nojekyll)
```
