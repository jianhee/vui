// vitepress-theme
import defaultTheme from 'vitepress/theme';

// demo-preview
// AntDesignContainer, ElementPlusContainer, NaiveUIContainer
// https://www.npmjs.com/package/@vitepress-demo-preview/plugin
import { ElementPlusContainer } from '@vitepress-demo-preview/component';
import '@vitepress-demo-preview/component/dist/style.css';

// icon
import 'virtual:svg-icons-register';

// vui-components
import vui from 'vui/components/index.js';
import 'vui/styles/index.scss';

// custom
import DemoRow from './components/DemoRow.vue';
import './styles/index.scss';

export default {
  extends: defaultTheme,
  enhanceApp({ app }) {
    app.use(vui);
    app.component('demo-preview', ElementPlusContainer);
    app.component('DemoRow', DemoRow);
  }
};
