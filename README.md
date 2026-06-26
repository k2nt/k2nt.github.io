# k2nt.github.io

Personal site and blog. Built with [Astro](https://astro.build), TypeScript, and
[Bun](https://bun.sh); deployed to GitHub Pages.

## Stack

- **Astro 5** — static site generator, near-zero JS
- **TypeScript** (strict)
- **Bun** — package manager / runtime
- System fonts: **Aptos Serif** (serif headings) + **Aptos** (sans body)
- Soft pastel theme driven by CSS custom properties
- RSS feed + sitemap

## Develop

```bash
bun install      # install dependencies
bun run dev      # start dev server at http://localhost:4321
bun run build    # build to ./dist
bun run preview  # preview the production build
bun run check    # type-check (astro check)
```

## Writing content

Posts are plain Markdown files with frontmatter:

- Blog posts → `src/content/blog/*.md`
- TIL notes → `src/content/til/*.md`

```md
---
title: "My post title"
description: "Optional one-line summary."
pubDate: 2026-06-27
updatedDate: 2026-06-28   # optional
tags: ["css", "astro"]    # optional
draft: false              # optional; drafts are hidden in production
---

Body in Markdown…
```

The file name becomes the URL slug (e.g. `blog/my-post.md` → `/blog/my-post`).

## Project layout

```
src/
  config.ts            # site metadata, nav, social links
  content.config.ts    # blog + til collection schemas
  content/{blog,til}/  # markdown posts
  layouts/             # BaseLayout, PostLayout
  components/          # Nav, Footer, PostCard, BaseHead, FormattedDate
  pages/               # routes (home, /blog, /til, rss.xml, 404)
  styles/global.css    # design tokens + base styles
public/                # static assets (favicon, etc.)
```

## Customizing the look

Edit the CSS custom properties at the top of `src/styles/global.css` — colors,
fonts, and spacing all live there. Dark-mode tokens are already defined (via
`prefers-color-scheme`); a manual toggle can be added later.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with Bun
and publishes to GitHub Pages. In the repo settings, set **Pages → Source** to
**GitHub Actions** (one-time setup).
