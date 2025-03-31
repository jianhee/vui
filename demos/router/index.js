import { createRouter, createWebHashHistory } from 'vue-router';

// 导航栏
export const navItems = [
  { name: 'i18n', title: '多语言', file: 'DemoI18n' },
  { name: 'icon', title: '图标', file: 'DemoIcon' },
  { name: 'btn', title: '按钮', file: 'DemoBtn' },
  { name: 'form', title: '表单', file: 'DemoForm' },
  { name: 'dropdownMenu', title: '下拉框+菜单', file: 'DemoDropdownMenu' },
  { name: 'menu', title: '菜单', file: 'DemoMenu' },
  { name: 'dialog', title: '弹窗', file: 'DemoDialog' },
  { name: 'drawer', title: '抽屉', file: 'DemoDrawer' },
  { name: 'image', title: '图片', file: 'DemoImage' },
  { name: 'loading', title: '加载状态', file: 'DemoLoading' },
  { name: 'skeleton', title: '骨架屏', file: 'DemoSkeleton' },
  { name: 'dragbox', title: '拖拽', file: 'DemoDragbox' }
];

// 导航栏路由
const navRoutes = navItems.map(({ name, title, file }) => ({
  path: `/${name}`,
  name,
  meta: { title },
  component: () => import(`@/views/content/${file}.vue`)
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
