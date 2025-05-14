// vitepress
// https://vitepress.dev/reference/site-config
import { defineConfig } from 'vitepress';

// config
import { locales } from './config/locales.js';
import { headerNavs, socialLinks, sidebarNavs } from './config/theme.js';
import { markdown } from './config/markdown.js';
import { vite } from './config/vite.js';

export default defineConfig({
  // 元数据
  title: 'Vue UI',
  description: 'Vue 3 组件库 + 工具集',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  // 国际化
  locales: locales,
  // 路由
  cleanUrls: true,
  // 构建
  srcDir: 'zh',
  // 主题
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    search: { provider: 'local' },
    nav: headerNavs,
    socialLinks: socialLinks,
    sidebar: sidebarNavs
  },
  // 自定义
  markdown: markdown,
  vite: vite
});
