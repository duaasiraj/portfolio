# Portfolio content guide

This site is built with Astro. Run `npm install` once, then use `npm run dev` for a local preview and `npm run build` before deploying.

## Update your details

Edit `src/data/site.ts` for your name, bio, contact links, and `resumeUrl`. Keep the resume as a Google Drive **share** link, not the Drive homepage URL.

Edit `src/data/currently.ts` to change the rotating status text in the homepage hero.

Edit `src/data/socials.ts` to add, remove, or update footer social links.

## Add or replace pictures

Put image files in `public/assets/`. They are served at `/assets/<filename>` (the site automatically applies its GitHub Pages base path).

- Hero space art: replace `public/assets/backgroundHero.jpg`.
- Profile photo: replace `public/assets/profile.jpg`.
- For a new picture, use a descriptive filename such as `project-nanograd.jpg`, then reference it with `${import.meta.env.BASE_URL}assets/project-nanograd.jpg` inside an `.astro` file.

Use JPG or WebP for photos. Keep images reasonably compressed so pages stay fast.

## Add a project

1. Create `src/content/projects/my-project.md`.
2. Copy this frontmatter and fill in the values:

```md
---
title: "My Project"
index: "04"
summary: "One-sentence description."
stack: ["Python", "Astro"]
status: "active"
date: 2026-07-30
featured: true
coordinates: "PROJECT/REF"
githubUrl: "https://github.com/your-user/your-repo"
liveUrl: "https://example.com"
---

## Overview

Explain the problem, approach, and result.

## Highlights

- A concrete outcome
- An important technical decision
```

`githubUrl` and `liveUrl` are optional. When `githubUrl` is present, the card reveals a GitHub icon on hover and the detailed project page shows a source button at the bottom.

The homepage shows the first three projects by `index`; use two-digit values (`"01"`, `"02"`, and so on) to control that order.

## Add experience

Create a Markdown file in `src/content/experience/`, for example `my-role.md`:

```md
---
role: "Role title"
org: "Organisation"
location: "Remote"
dateRange: "2026"
sortOrder: 1
kind: "research"
stack: ["Python", "Research"]
---

Write a short description, then use bullets for outcomes or responsibilities.
```

Use `kind: "research"` or `kind: "leadership"`. Lower `sortOrder` values appear first.

## Add a section or page

Create a new `.astro` file in `src/pages/` for a page, or a component in `src/components/` for a reusable section. Add its navigation label and path to `src/data/nav.ts`. Reuse `BaseLayout`, `SectionLabel`, and the CSS variables in `src/styles/tokens.css` to keep the visual style consistent.
