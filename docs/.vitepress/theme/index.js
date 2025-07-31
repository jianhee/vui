// vp 主题配置
import defaultTheme from 'vitepress/theme';

// 图标
import 'virtual:group-icons.css';
import 'virtual:svg-icons-register';

// 预览插件
import { AntDesignContainer, ElementPlusContainer, NaiveUIContainer } from '@vitepress-demo-preview/component';
import '@vitepress-demo-preview/component/dist/style.css';

// vui 组件
import vui from 'vui/components/index.js';
import 'vui/styles/index.scss';

// 自定义组件
import DemoSpace from '@vp/components/DemoSpace.vue';
import DemoProps from '@vp/components/DemoProps.vue';
import DemoCard from '@vp/components/DemoCard.vue';
import DemoValue from '@vp/components/DemoValue.vue';
import '@vp/styles/index.scss';

export default {
  extends: defaultTheme,
  enhanceApp({ app }) {
    app.use(vui);
    app.component('DemoPreview', AntDesignContainer);
    app.component('DemoSpace', DemoSpace);
    app.component('DemoProps', DemoProps);
    app.component('DemoCard', DemoCard);
    app.component('DemoValue', DemoValue);
  }
};
