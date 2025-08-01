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
import DemoView from '@vp/components/DemoView.vue';
import DemoViewProp from '@vp/components/DemoViewProp.vue';
import DemoViewRes from '@vp/components/DemoViewRes.vue';
import DemoValue from '@vp/components/DemoValue.vue';
import DemoSpace from '@vp/components/DemoSpace.vue';
import '@vp/styles/index.scss';

export default {
  extends: defaultTheme,
  enhanceApp({ app }) {
    app.use(vui);
    app.component('DemoPreview', AntDesignContainer);
    app.component('DemoView', DemoView);
    app.component('DemoViewProp', DemoViewProp);
    app.component('DemoViewRes', DemoViewRes);
    app.component('DemoValue', DemoValue);
    app.component('DemoSpace', DemoSpace);
  }
};
