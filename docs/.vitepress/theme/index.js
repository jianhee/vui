// vitepress-theme
import defaultTheme from 'vitepress/theme';

// demo
import { AntDesignContainer, ElementPlusContainer, NaiveUIContainer } from '@vitepress-demo-preview/component';
import '@vitepress-demo-preview/component/dist/style.css';

// icon
import 'virtual:svg-icons-register';

// vui-components
import vui from 'vui/components/index.js';
import 'vui/styles/index.scss';

// custom
import DemoSpace from '@vp/components/DemoSpace.vue';
import DemoValue from '@vp/components/DemoValue.vue';
import '@vp/styles/index.scss';

export default {
  extends: defaultTheme,
  enhanceApp({ app }) {
    app.use(vui);
    app.component('DemoPreview', AntDesignContainer);
    app.component('DemoSpace', DemoSpace);
    app.component('DemoValue', DemoValue);
  }
};
