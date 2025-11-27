import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  output: 'static',
  integrations: [react()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
