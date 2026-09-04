<<<<<<< HEAD
# TR HR & ACA Website

This project has been upgraded from plain HTML/CSS/JS into a modern frontend app using:

- `React`
- `Vite`
- `Tailwind CSS`
- `React Router` with `HashRouter`
- `lucide-react`

## Why this stack

This setup makes the site easier to maintain, more visually polished, and safer to deploy on static hosts.

`HashRouter` was chosen specifically to avoid broken page links on static hosting. That means routes like `#/about` and `#/donate` work without extra server rewrite rules on GitHub Pages, Netlify, Vercel, Cloudflare Pages, and most shared hosting setups.

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

The production build is configured with relative asset paths and `HashRouter`, so it can be deployed from a repository subpath or a custom domain without route rewrites.

### GitHub Pages

Push the repository to GitHub and enable **Settings → Pages → GitHub Actions**. The included workflow builds and deploys the site automatically on pushes to `main`.

### Netlify or Vercel

Import the repository and use the defaults in `netlify.toml` or `vercel.json`:

- Build command: `npm run build`
- Publish/output directory: `dist`

Recommended hosts:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

## Notes

- Images are served from `public/images/`.
- Main app code is in `src/`.
- Shared site content currently lives in `src/data/site.js`.
- The donation flow is still front-end only until a real payment gateway and backend are connected.
- Legal policy pages still contain template content and should be reviewed before going live.
=======
# Reacthraca
React version of hraca
>>>>>>> 064c260d3b4ae6bd93207d707e74da50ecf12156
