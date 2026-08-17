import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cv.danbennett.me',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
