// vitepress
// https://vitepress.dev/zh/reference/site-config
import { defineConfig } from 'vitepress';
import { locales } from './config/locales.js';
import { headerNavs, socialLinks, sidebarNavs } from './config/navs.js';
import { markdown } from './config/markdown.js';
import { vite } from './config/vite.js';

export default defineConfig({
  // 元数据
  title: 'Vue UI',
  description: 'Vue 3 组件库 + 工具库',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  // 国际化
  locales: locales,
  // 路由
  cleanUrls: true,
  // rewrites: {
  //   'zh/:rest*': ':rest*'
  // },
  // 构建
  srcDir: 'zh',
  // 主题
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    search: { provider: 'local' },
    nav: headerNavs,
    socialLinks: socialLinks,
    sidebar: sidebarNavs,
    outline: 'deep'
  },
  // 自定义
  markdown: markdown,
  vite: vite
});
