import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tomasmoreno.dev',
  compressHTML: true,
  image: {
    service: { entrypoint: 'astro/assets' }
  },
  vite: {
    css: {
      transformer: 'lightningcss'
    }
  }
});
