// vite
// https://vitejs.dev/config/
import { defineConfig } from 'vite';

// node
import { fileURLToPath, URL } from 'node:url';

// icon
import svgLoader from 'vite-svg-loader';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// path
export const alias = {
  'vui': fileURLToPath(new URL('../../../packages', import.meta.url)),
  '@vp': fileURLToPath(new URL('../../vp', import.meta.url)),
  '@doc': fileURLToPath(new URL('../../zh', import.meta.url))
};

// vite
export const vite = defineConfig({
  resolve: { alias: alias },
  plugins: [
    svgLoader(),
    createSvgIconsPlugin({
      iconDirs: [fileURLToPath(new URL('../../vp/icons', import.meta.url))],
      symbolId: 'icon-[dir]-[name]'
    })
  ]
});
