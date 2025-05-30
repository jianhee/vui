// markdown 配置

// 代码块插件1
// https://www.npmjs.com/package/@vitepress-demo-preview/plugin
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin';
import { alias } from './vite.js';

// 代码块插件2
// https://vitepress-demo.fe-dev.cn/guide/start.html
import { vitepressDemoPlugin } from 'vitepress-demo-plugin';

export const markdown = {
  config: md => {
    md.use(containerPreview, { alias });
    md.use(componentPreview, { alias });
    md.use(vitepressDemoPlugin);
  }
};
