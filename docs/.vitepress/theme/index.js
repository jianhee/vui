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
import DemoSpace from '@vp/components/DemoSpace.vue';
import DemoValue from '@vp/components/DemoValue.vue';
import DemoView from '@vp/components/DemoView.vue';
import DemoViewBase from '@vp/components/DemoViewBase.vue';
import DemoViewBoolean from '@vp/components/DemoViewBoolean.vue';
import DemoViewLeft from '@vp/components/DemoViewLeft.vue';
import DemoViewTop from '@vp/components/DemoViewTop.vue';
import DemoViewTopCenter from '@vp/components/DemoViewTopCenter.vue';
import '@vp/styles/index.scss';

export default {
  extends: defaultTheme,
  enhanceApp({ app }) {
    app.use(vui);
    app.component('DemoPreview', AntDesignContainer);
    app.component('DemoSpace', DemoSpace);
    app.component('DemoValue', DemoValue);
    app.component('DemoView', DemoView);
    app.component('DemoViewBase', DemoViewBase);
    app.component('DemoViewBoolean', DemoViewBoolean);
    app.component('DemoViewLeft', DemoViewLeft);
    app.component('DemoViewTop', DemoViewTop);
    app.component('DemoViewTopCenter', DemoViewTopCenter);
  }
};
