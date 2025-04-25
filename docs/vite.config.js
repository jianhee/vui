// node
import { fileURLToPath, URL } from 'node:url';
import path from 'path';

// vue
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// icon
import svgLoader from 'vite-svg-loader';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist'
  },
  plugins: [
    vue(),
    vueJsx(),
    svgLoader({
      svgoConfig: { plugins: [{ name: 'preset-default', params: { overrides: { removeViewBox: false, removeAttrs: { attrs: '(fill|stroke|class)' } } } }] }
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), './assets/icons')],
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
      'vui': fileURLToPath(new URL('../packages', import.meta.url))
    }
  }
});
