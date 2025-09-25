// 顶栏导航
export const headerNavs = [
  { text: '起步', link: '/start/install', activeMatch: '/start/' },
  { text: '组件', link: '/component/icon/', activeMatch: '/component/' },
  { text: '图标', link: '/icon/', activeMatch: '/icon/' },
  {
    text: 'TUDO',
    items: [
      { text: '指南', link: '/guild/' },
      { text: '插件', link: '/plugin/' },
      { text: '工具函数', link: '/util/' },
      { text: '组合式函数', link: '/composable/' }
    ]
  }
];

// 顶栏社交链接
export const socialLinks = [
  { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
  { icon: 'twitter', link: 'https://github.com/vuejs/vitepress' }
];

// 侧边栏导航
export const sidebarNavs = {
  // 起步
  '/start/': [
    { text: '安装', link: '/start/install' },
    { text: '使用', link: '/start/usage' }
  ],
  // 组件
  '/component/': [
    {
      text: '基础组件',
      items: [
        { text: 'Icon 图标', link: '/component/icon/' },
        { text: 'Button 按钮', link: '/component/button/' },
        { text: 'Row 行', link: '/component/row/' }
      ]
    },
    {
      text: '表单组件',
      items: [
        { text: 'Form 表单', link: '/component/form/' },
        { text: 'Input 输入框', link: '/component/input/' },
        { text: 'Select 选择器', link: '/component/select/' },
        { text: 'Checkbox 多选框', link: '/component/checkbox/' },
        { text: 'Radio 单选框', link: '/component/radio/' },
        { text: 'Switch 开关', link: '/component/switch/' },
        { text: 'Slider 滑块', link: '/component/slider/' }
      ]
    },
    {
      text: '数据展示',
      items: [
        { text: 'Image 图片', link: '/component/image/' },
        { text: 'Table 虚拟化表格', link: '/component/table/' },
        { text: 'Tree 虚拟化树', link: '/component/tree/' },
        { text: 'Skeleton 骨架屏', link: '/component/skeleton/' },
        { text: 'Loading 加载状态', link: '/component/loading/' },
        { text: 'Empty 空状态', link: '/component/empty/' },
        { text: 'Progress 进度条', link: '/component/progress/' }
      ]
    },
    {
      text: '导航',
      items: [
        { text: 'Menu 菜单', link: '/component/menu/' },
        { text: 'Dropdown 下拉框', link: '/component/dropdown/' },
        { text: 'DropdownMenu 下拉菜单', link: '/component/dropdown-menu/' }
      ]
    },
    {
      text: '反馈',
      items: [
        { text: 'Dialog 对话框', link: '/component/dialog/' },
        { text: 'Drawer 抽屉', link: '/component/drawer/' }
      ]
    },
    {
      text: '其它',
      items: [{ text: 'Dragbox 拖拽框', link: '/component/dragbox/' }]
    }
  ],
  // 图标
  '/icon/': [{ text: '图标', link: '/icon/' }]
};
