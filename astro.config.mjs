// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// TODO: replace with the real Cloudflare Workers / custom domain URL once deployed
const SITE_URL = 'https://portfolio.workers.dev';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap(), icon()]
});
