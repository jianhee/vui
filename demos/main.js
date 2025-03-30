// styles
import './styles/index.scss';

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

const app = createApp(App);
app.use(router);

const vueComponents = import.meta.glob(['./components/*.vue']);
setupMxComponents(app);
setupComponents(app, { vueComponents });

setupI18n(app, { messages: { en, zh } });

app.mount('#app');
