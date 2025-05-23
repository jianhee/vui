// markdown 配置
// https://www.npmjs.com/package/@vitepress-demo-preview/plugin
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin';
import { alias } from './vite.js';

// https://vitepress-demo.fe-dev.cn/guide/start.html
import { vitepressDemoPlugin } from 'vitepress-demo-plugin';

export const markdown = {
  config: md => {
    md.use(containerPreview, { alias });
    md.use(componentPreview, { alias });
    md.use(vitepressDemoPlugin);
  }
};
