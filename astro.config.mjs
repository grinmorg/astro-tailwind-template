import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  build: {
    format: 'file'
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'js/main.[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]'
        }
      },
      format: 'file'
    }
  },
  integrations: [tailwind()]
});