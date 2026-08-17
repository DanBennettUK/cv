# cv.danbennett.me

Dan Bennett's professional CV website — a modern, minimal single-page resume built with **Astro** and plain CSS.

## Tech Stack

- **Astro 7** — Static site generator, zero JS by default
- **Plain CSS** — No frameworks, no utility classes
- **Liquid Glass Design** — Backdrop blur, gradient accents, micro-animations
- **System Font Stack** — GDPR-safe, no external font requests
- **Dark Mode** — Manual toggle + system preference default

## Features

- ⚡ Near-zero JavaScript (only the dark mode toggle)
- 🎨 Liquid Glass / frosted glass card effects
- 🌗 Dark mode with localStorage persistence
- 📱 Fully responsive (sidebar collapses on mobile)
- 🖨️ Print stylesheet for CV printing
- 🔍 SEO: Open Graph, Twitter Cards, JSON-LD structured data
- ♿ Accessible (semantic HTML, ARIA labels, keyboard navigation)

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deployment

### Vercel (Primary)

The `vercel.json` configures the Astro framework automatically:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro"
}
```

### GitHub Pages (Fallback)

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the site and
deploys the `dist/` output to Pages on every push to `master`.

To enable it:

1. In the repo settings (Settings → Pages), set **Source** to **GitHub Actions**.
2. The `CNAME` file points Pages at `cv.danbennett.me`. For that to serve,
   the domain's DNS must point at GitHub Pages (the domain currently resolves
   to Vercel, so Vercel remains the live host — only switch DNS if Pages is
   meant to take over).
3. If you ever deploy Pages without the custom domain, the site would live at
   `https://danbennettuk.github.io/cv/`, where absolute asset paths
   (`/dan.jpg`, `/_astro/…`) would break. In that case set `base: '/cv/'` in
   `astro.config.mjs` and remove the `CNAME` file.

## Content

All experience data is preserved from the original Jekyll `_data/experience.yml`. Content is embedded directly in Astro components for maximum simplicity.

## License

MIT
