# Dan Bennett CV

A modern, static resume site built with Next.js 14, React, TypeScript, and Tailwind CSS. Deploys to GitHub Pages.

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
│   └── page.tsx            # Main resume page
├── components/             # React components
│   ├── Header.tsx          # Name, title, social links
│   ├── About.tsx           # Profile image and bio
│   ├── Experience.tsx      # Work history
│   └── Footer.tsx          # Contact footer
├── lib/                    # Utilities and data
│   ├── data.ts             # Resume content (edit this!)
│   └── types.ts            # TypeScript types
├── public/                 # Static assets
│   └── assets/             # Images (dan.jpg, etc.)
└── dist/                   # Build output (GitHub Pages)
```

## 🎨 Customization

### Edit Your Content

All resume content is in `lib/data.ts`. Edit this file to update:

- Personal info (name, title, email, social links)
- About section content
- Work experience
- Education (add to the file)
- Projects (add to the file)

### Styling

- **Colors**: Edit CSS variables in `app/globals.css`
- **Typography**: Uses Roboto font from Google Fonts
- **Dark mode**: Automatic via CSS variables + localStorage

## 🌙 Dark Mode

Dark mode is automatically enabled based on:
1. Saved user preference (localStorage)
2. System preference (prefers-color-scheme)

Toggle with the sun/moon button in the top-right corner.

## 📦 Deployment

### GitHub Pages

1. Push to GitHub
2. Go to Settings > Pages
3. Set source to "Deploy from a branch"
4. Select the `modern-rewrite` branch and `/ (root)` folder
5. Save and wait for deployment

### Build Output

The `dist/` folder contains the static export ready for deployment:

```bash
npm run build
# Output goes to dist/
```

## 🔧 Tech Stack

| Feature | Technology |
|---------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Markdown | react-markdown |

## 📝 Migration from Jekyll

This is a complete rewrite of the original Jekyll-based `modern-resume-theme`:

### What's Different

- **No Ruby/Jekyll**: Pure JavaScript/TypeScript
- **Modern tooling**: Next.js 14, React 18, Tailwind CSS
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
