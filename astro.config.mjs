import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://adithyan.github.io',
  base: '/my-portfolio',
  integrations: [tailwind()],
  output: 'static',
});