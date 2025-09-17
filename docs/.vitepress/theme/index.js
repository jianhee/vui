// vp 主题配置
import defaultTheme from 'vitepress/theme';

// 图标
import 'virtual:group-icons.css';
import 'virtual:svg-icons-register';

// 预览插件 AntDesignContainer, ElementPlusContainer, NaiveUIContainer
import { AntDesignContainer } from '@vitepress-demo-preview/component';
import '@vitepress-demo-preview/component/dist/style.css';

// vui 组件
import vui from 'vui/components/index.js';
import 'vui/styles/index.scss';

// 自定义组件
import '@vp/styles/index.scss';
import { setupComponents } from 'vui/composables';
const modulesMap = import.meta.glob('../../vp/components/*.vue', { eager: true });

export default {
  extends: defaultTheme,
  enhanceApp({ app }) {
    app.use(vui);
    app.component('DemoPreview', AntDesignContainer);
    setupComponents(app, modulesMap);
  }
};
