// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://beyond-the-chart.com',
  base: '/',
  output: 'static',
  integrations: [sitemap()],
});
