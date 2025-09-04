// vite 配置
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

// 图标
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import svgLoader from 'vite-svg-loader';

// 别名
export const alias = {
  'vui': fileURLToPath(new URL('../../../packages', import.meta.url)),
  '@vp': fileURLToPath(new URL('../../vp', import.meta.url)),
  '@docs': fileURLToPath(new URL('../../zh', import.meta.url))
};

// vite
export const vite = defineConfig({
  resolve: { alias: alias },
  plugins: [
    groupIconVitePlugin(),
    createSvgIconsPlugin({
      iconDirs: [fileURLToPath(new URL('../../vp/icons', import.meta.url))],
      symbolId: 'icon-[dir]-[name]'
    }),
    svgLoader()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api']
        // api: 'modern-compiler'
      }
    }
  }
});
