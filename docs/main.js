// styles
import './assets/styles/index.scss';

// vue
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// icon
import 'virtual:svg-icons-register';

// vui
import 'vui/styles/index.scss';
import vui from 'vui/components';

// custom components
import { setupComponents } from 'vui/composables';

// i18n
import en from './locales/en';
import zh from './locales/zh';
import { setupI18n } from 'vui/plugins';

// vue
const app = createApp(App);
app.use(router);

// vui
app.use(vui);

// components
const vueComponents = import.meta.glob(['./components/*.vue']);
setupComponents(app, { vueComponents });

// i18n
setupI18n(app, { messages: { en, zh } });

app.mount('#app');
