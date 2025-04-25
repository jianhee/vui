import { createRouter, createWebHashHistory } from 'vue-router';
import navItems from '@/assets/data/navs.js';

// 导航栏路由
const navRoutes = navItems.map(({ name, title, file }) => ({
  path: `/${name}`,
  name,
  meta: { title },
  component: () => import(`@/views/components/${file}.vue`)
}));

// 初始化路由
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/icon'
    },
    ...navRoutes
  ]
});

export default router;
