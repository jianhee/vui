// 顶栏导航
export const headerNavs = [
  { text: '起步', link: '/start/install/', activeMatch: '/start/' },
  { text: '组件', link: '/component/icon/', activeMatch: '/component/' },
  { text: '插件', link: '/plugin/i18n/', activeMatch: '/plugin/' },
  { text: '工具', link: '/util/string/', activeMatch: '/util/' }
];

// 顶栏社交链接
export const socialLinks = [
  { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
  { icon: 'twitter', link: 'https://github.com/vuejs/vitepress' }
];

// 侧边栏导航
export const sidebarNavs = {
  '/start/': [
    { text: '安装', link: '/start/install/' },
    { text: '使用', link: '/start/usage/' }
  ],
  '/component/': [
    {
      text: '基础组件',
      items: [
        { text: 'Icon 图标', link: '/component/icon/' },
        { text: 'Btn 按钮', link: '/component/btn/' },
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
        { text: 'Slideer 滑块', link: '/component/slider/' }
      ]
    },
    {
      text: '数据展示',
      items: [
        { text: 'Image 图片', link: '/component/image/' },
        { text: 'Table 表格', link: '/component/table/' },
        { text: 'Tree 树结构', link: '/component/tree/' },
        { text: 'Skeleton 骨架屏', link: '/component/skeleton/' }
      ]
    },
    {
      text: '导航',
      items: [{ text: 'Dropdown 下拉框', link: '/component/dropdown/' }]
    },
    {
      text: '反馈',
      items: [
        { text: 'Dialog 对话框', link: '/component/dialog/' },
        { text: 'Drawer 抽屉', link: '/component/drawer/' },
        { text: 'Loading 加载状态', link: '/component/loading/' }
      ]
    },
    {
      text: '其它',
      items: [{ text: 'Dragbox 拖拽框', link: '/component/dragbox/' }]
    }
  ],
  '/plugin/': [
    { text: '国际化', link: '/plugin/i18n/' },
    { text: '消息提示', link: '/plugin/toast/' }
  ],
  '/util/': [
    { text: '字符串', link: '/utils/string/' },
    { text: '数组', link: '/utils/array/' }
  ]
};
