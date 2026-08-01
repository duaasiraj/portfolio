import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://duaasiraj.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});