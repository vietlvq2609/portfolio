# portfolio

Source code for my personal developer portfolio and technical journal — Viet Le (Victor),
Full-Stack Software Engineer.

**Minimalist Engineering Journal** aesthetic: dark-only, zinc/cyan palette, JetBrains Mono +
Inter, editorial layout focused on writing and project write-ups over visual flourish.

## Stack

- [Astro](https://astro.build) (static output)
- [Tailwind CSS v4](https://tailwindcss.com)
- Astro Content Collections + MDX for blog posts and project write-ups
- Deployed on Cloudflare (Workers static assets, via Workers Builds Git integration)

## Structure

```
src/
├── content/          # blog posts + project write-ups (MDX)
├── content.config.ts # content collection schemas (incl. fixed tag enum)
├── data/             # bio, experience timeline, skills (plain TS data)
├── components/       # Header, Footer, Bio, Tag, FeedCard, ExperienceTimeline, TechStack
├── layouts/           # BaseLayout, PostLayout, ProjectLayout
└── pages/             # index, /blog, /projects, rss.xml
```

## Commands

| Command        | Action                                      |
| :------------- | :------------------------------------------- |
| `pnpm install` | Install dependencies                        |
| `pnpm dev`     | Start local dev server at `localhost:4321`   |
| `pnpm build`   | Build production site to `./dist/`           |
| `pnpm preview` | Preview the production build locally         |
| `pnpm deploy`  | Build and deploy manually via wrangler       |

## Content

Add a new post under `src/content/blog/*.mdx` or project under `src/content/projects/*.mdx`.
See `src/content/blog/example-post.mdx` for the expected frontmatter shape (it's `draft: true`
so it never appears in public listings/RSS — copy it as a starting point).

## Deployment (Cloudflare)

The site is a fully static Astro build, deployed to Cloudflare as a Worker with static assets
(config in `wrangler.jsonc`, `assets.directory` pointing at `dist`).

Cloudflare's dashboard is connected directly to this GitHub repo (Workers Builds): every push
to `main` triggers a Cloudflare-hosted build (`pnpm build`) and deploy (`wrangler deploy`)
automatically — no GitHub Actions workflow needed.

**Manual/local deploy** (e.g. to test before pushing):

```sh
pnpm dlx wrangler login   # first time only
pnpm deploy               # builds and deploys the current working tree
```

## TODO before going live

- Replace placeholder `repoUrl`/`demoUrl` values in `src/content/projects/*.mdx` with real links
- Update `SITE_URL` in `astro.config.mjs` once a Cloudflare Pages URL/custom domain is set

