// styles
import './assets/styles/index.scss';

// vue
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// icon
import 'virtual:svg-icons-register';

// components
import { setupMxComponents, setupComponents } from '@mxui/composables';

// i18n
import en from './locales/en';
import zh from './locales/zh';
import { setupI18n } from '@mxui/plugins/i18n';

// vue
const app = createApp(App);
app.use(router);

// components
const vueComponents = import.meta.glob(['./components/*.vue']);
setupMxComponents(app);
setupComponents(app, { vueComponents });

// i18n
setupI18n(app, { messages: { en, zh } });

app.mount('#app');
