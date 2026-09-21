// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: "https://aliceinboyabagi.com",
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: { enabled: false },
});
