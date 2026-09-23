# Dan Bennett CV

A modern, static resume site built with Next.js 15, React, TypeScript, and Tailwind CSS. It includes a full portfolio view and a compact recruiter view, with GitHub Pages as the authoritative deployment.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
.
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles with CSS variables
│   ├── layout.tsx          # Root layout with dark mode toggle
│   ├── page.tsx            # Full CV page
│   ├── resume/page.tsx     # Optional compact recruiter view
│   ├── robots.ts           # Crawler rules
│   └── sitemap.ts          # Public routes for search engines
├── components/             # React components
│   ├── Header.tsx          # Name, title, social links
│   ├── About.tsx           # Profile image and bio
│   ├── Experience.tsx      # Work history
│   ├── Footer.tsx          # Contact footer
│   ├── ImpactHighlights.tsx # Outcome-led impact cards
│   ├── AIAndSystems.tsx    # AI practice and public projects
│   └── ThemeToggle.tsx     # Dark mode toggle button
├── lib/                    # Utilities and data
│   ├── data.ts             # Shared CV, impact, capability and project content
│   └── types.ts            # TypeScript types
├── public/                 # Static assets
│   ├── assets/             # Images (dan.jpg)
│   └── Dan-Bennett-CV.pdf  # Generated full CV PDF
```

## 🎨 Customization

### Edit Your Content

All resume content is in `lib/data.ts`. Edit this file to update:

- Personal info (name, title, email, social links)
- Profile and current-role content
- Selected impact statements and capability map
- Public project descriptions
- Full CV PDF generated directly from the main page

### Styling

- **Colors**: Edit CSS variables in `app/globals.css`
- **Typography**: Space Grotesk (display) and Plus Jakarta Sans (body), loaded from Google Fonts in `app/layout.tsx`
- **Dark mode**: Automatic via CSS variables + localStorage

## 🌙 Dark Mode

Dark mode is automatically enabled based on:
1. Saved user preference (localStorage)
2. System preference (prefers-color-scheme)

Toggle with the sun/moon button in the top-right corner.

## 📦 Deployment

### Full CV PDF

The download includes the entire main CV page, including all employment, community, AI and project details. The optional `/resume/` page remains an abbreviated view. Generate the downloadable A4 PDF after a content change with:

```bash
npm run pdf
```

This runs a production build, serves the static output locally and prints `/` with Chromium using the site's print styles. Set `CHROMIUM_BIN` if Chromium is not installed at a standard path and `PYTHON_BIN` if Python is not available as `python3`. The generated file is `public/Dan-Bennett-CV.pdf`, also copied into `dist/`.

Verify content completeness after generation:

```bash
python3 -m pip install pypdf==6.0.0
python3 scripts/check-pdf.py
```

This checks every printable heading, paragraph and bullet from the built CV against the PDF's extracted text, and checks that the deployed copy matches. GitHub Pages runs generation and verification before uploading the deployment.

### GitHub Pages

The custom domain is deployed from the `master` branch through `.github/workflows/deploy.yml`. GitHub Pages is the authoritative production deployment; local builds and any unrelated preview-provider status do not represent the live site.

1. Push to `master` or run the workflow manually.
2. The workflow installs dependencies, builds the static export, regenerates and verifies the full CV PDF, and deploys `dist/`.
3. Verify the live URL and a distinctive content marker after deployment.

### Build Output

The `dist/` folder contains the static export ready for deployment:

```bash
npm run build
# Output goes to dist/
```


## 🔧 Tech Stack

| Feature | Technology |
|---------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Markdown | react-markdown |
| PDF generation | Chromium via `scripts/generate-pdf.mjs` |

## 📝 Migration from Jekyll

This is a complete rewrite of the original Jekyll-based `modern-resume-theme`:

### What's Different

- **No Ruby/Jekyll**: Pure JavaScript/TypeScript
- **Modern tooling**: Next.js 15, React 18, Tailwind CSS
- **Better dev experience**: Fast HMR, TypeScript support
- **Cleaner build**: Single `npm run build` command
- **Smaller output**: Optimized static export

### What's Preserved

- Same visual design and layout
- Dark mode support
- Print-friendly styles
- Responsive design
- All original content migrated

### File Mapping

| Jekyll (Old) | Next.js (New) |
|--------------|---------------|
| `_config.yml` | `lib/data.ts` |
| `_data/experience.yml` | `lib/data.ts` - `getExperience()` |
| `_layouts/default.html` | `app/layout.tsx` |
| `_includes/*.html` | `components/*.tsx` |
| `_sass/*.scss` | `app/globals.css` (Tailwind) |
| `assets/main.scss` | `app/globals.css` |

## 📄 License

MIT
