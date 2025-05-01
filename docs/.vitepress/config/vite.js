// vite
// https://vitejs.dev/config/
import { defineConfig } from 'vite';

// node
import { fileURLToPath, URL } from 'node:url';
import path from 'path';

// icon
import svgLoader from 'vite-svg-loader';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// path
export const alias = {
  '@utils': fileURLToPath(new URL('../theme/utils', import.meta.url)),
  '@icons': fileURLToPath(new URL('../theme/icons', import.meta.url)),
  '@demos': fileURLToPath(new URL('../../demos', import.meta.url)),
  'vui': fileURLToPath(new URL('../../../packages', import.meta.url))
};

// vite
export const vite = defineConfig({
  resolve: { alias: alias },
  plugins: [
    svgLoader(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), './docs/.vitepress/theme/icons')],
      symbolId: 'icon-[dir]-[name]'
    })
  ]
});
