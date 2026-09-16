# Viktor's Portfolio Website

My personal portfolio and technical journal — you can check it out at
[viktorlab.io.vn](https://viktorlab.io.vn/).

## Tech Stack

- [Astro](https://astro.build) — static site framework
- [Tailwind CSS](https://tailwindcss.com) — styling
- Deployed on [Cloudflare Workers](https://workers.cloudflare.com) (static assets)

## Setup

```sh
pnpm install   # install dependencies
pnpm dev       # start dev server at localhost:4321
pnpm build     # build production site to ./dist/
pnpm deploy    # build and deploy via wrangler (run `pnpm dlx wrangler login` first time)
```

