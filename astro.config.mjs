import { defineConfig } from 'astro/config';

// ⚠️ Update `site` and `base` to match your GitHub repo before deploying.
// If your repo is github.com/<user>/<repo>, the site will live at
// https://<user>.github.io/<repo>/ — set base to '/<repo>/'.
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/portfolio/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
