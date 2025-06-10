// markdown 配置

// 预览插件1
// https://www.npmjs.com/package/@vitepress-demo-preview/plugin
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin';
import { alias } from './vite.js';

// 预览插件2
// https://vitepress-demo.fe-dev.cn/guide/start.html
// import { vitepressDemoPlugin } from 'vitepress-demo-plugin';

// 分组图标
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons';

export const markdown = {
  config: md => {
    md.use(containerPreview, { alias });
    md.use(componentPreview, { alias });
    // md.use(vitepressDemoPlugin);
    md.use(groupIconMdPlugin);
  }
};
