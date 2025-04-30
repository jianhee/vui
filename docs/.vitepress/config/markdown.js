// markdown 配置
// https://www.npmjs.com/package/@vitepress-demo-preview/plugin
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin';
import { alias } from './vite.js';

export const markdown = {
  config: md => {
    md.use(containerPreview, { alias });
    md.use(componentPreview, { alias });
  }
};
