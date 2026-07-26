# Alex Chen — Portfolio

Astro + TypeScript + vanilla CSS. No Tailwind, no React SPA. Styled per `design.md`
("Scientific Narrative System").

## Stack

- **Astro** — static site generation, content collections
- **TypeScript** — component + route typing
- **Vanilla CSS** — design tokens in `src/styles/tokens.css`, shared utilities in
  `src/styles/global.css`
- **SVG** — hero/technical graphics, inlined in `.astro` files
- **Markdown** (Astro Content Collections) — `src/content/projects/*.md` and
  `src/content/logs/*.md`
- **GitHub Actions → GitHub Pages** — see `.github/workflows/deploy.yml`

## Getting started

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321/portfolio/` (matches the `base` set in
`astro.config.mjs` — see below).

## ⚠️ Before you deploy — set your repo name

This site is configured for `github.io/<repo-name>` hosting. Open
`astro.config.mjs` and update:

```js
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/your-repo-name/',
  ...
});
```

If you switch to a custom domain later, set `base: '/'` and add a `public/CNAME`
file with your domain.

## Deploying

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and
   select **GitHub Actions**.
3. Push to `main` — the included workflow (`.github/workflows/deploy.yml`) builds
   and deploys automatically.

## Content

- **Projects** — add a new `.md` file to `src/content/projects/`. Schema is
  defined in `src/content/config.ts`. Set `githubUrl` to your real repo so the
  GitHub icon shows on hover over the project card.
- **Mission Log** — add a new `.md` file to `src/content/logs/`.
- **Research** and **About** pages are static (`src/pages/research.astro`,
  `src/pages/about.astro`) — edit directly.

All current project/log content is placeholder copy — replace it with the real
write-ups.

## Structure

```
src/
├── content/          # Markdown collections (projects, logs) + schema
├── components/        # Header, Footer, ProjectCard, LogEntry, SectionLabel
├── layouts/           # BaseLayout.astro (fonts, meta, header/footer shell)
├── pages/              # index, projects/, mission-log/, research, about
└── styles/             # tokens.css (design tokens), global.css (utilities)
```
