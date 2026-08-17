# cv.danbennett.me

Dan Bennett's professional CV website — a modern, minimal single-page resume built with **Astro 5** and plain CSS.

## Tech Stack

- **Astro 5** — Static site generator, zero JS by default
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

Set the GitHub Pages source to the `dist/` directory, or use a GitHub Action to build and deploy.

## Content

All experience data is preserved from the original Jekyll `_data/experience.yml`. Content is embedded directly in Astro components for maximum simplicity.

## License

MIT
