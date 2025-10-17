// 顶栏导航
export const headerNavs = [
  { text: '起步', link: '/start/install', activeMatch: '/start/' },
  { text: '组件库', link: '/component/usage', activeMatch: '/component/' },
  { text: '图标库', link: '/icon/usage', activeMatch: '/icon/' },
  { text: '工具集', link: '/util/usage', activeMatch: '/util/' }
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
    { text: '使用组件库', link: '/start/component' },
    { text: '使用图标库', link: '/start/icon' },
    { text: '使用工具集', link: '/start/util' }
  ],
  // 组件库
  '/component/': [
    {
      text: '开始',
      items: [
        { text: '如何使用', link: '/component/usage' },
        { text: '主题颜色', link: '/component/color/' }
      ]
    },
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
        { text: 'Empty 空状态', link: '/component/empty/' },
        { text: 'Loading 加载状态', link: '/component/loading/' },
        { text: 'Skeleton 骨架屏', link: '/component/skeleton/' },
        { text: 'Progress 进度条', link: '/component/progress/' },
        { text: 'Image 图片', link: '/component/image/' },
        { text: 'Table 虚拟化表格', link: '/component/table/' },
        { text: 'Tree 虚拟化树', link: '/component/tree/' }
      ]
    },
    {
      text: '导航',
      items: [{ text: 'Dropdown 下拉菜单', link: '/component/dropdown/' }]
    },
    {
      text: '反馈',
      items: [
        { text: 'Toast 消息提示', link: '/component/toast/' },
        { text: 'Popover 弹出框', link: '/component/popover/' },
        { text: 'Tooltip 文字提示', link: '/component/tooltip/' },
        { text: 'Dialog 对话框', link: '/component/dialog/' },
        { text: 'Drawer 抽屉', link: '/component/drawer/' }
      ]
    },
    {
      text: '其它',
      items: [{ text: 'Dragbox 拖拽框', link: '/component/dragbox/' }]
    }
  ],
  // 图标库
  '/icon/': [
    { text: '如何使用', link: '/icon/usage' },
    { text: '图标库', link: '/icon/library' }
  ],
  // 工具集
  '/util/': [
    { text: '如何使用', link: '/util/usage' },
    { text: '工具函数', link: '/util/util' },
    { text: '组合式函数', link: '/util/composable' },
    { text: '插件', link: '/util/plugin' }
  ]
};
