// styles
import './styles/index.scss';

// vue
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// i18n
import en from './locales/en';
import zh from './locales/zh';

// custom
import 'virtual:svg-icons-register';
import { setupI18n } from '@mxui/plugins/i18n';
import { setupComponents } from './components';
import { setupComponents as setupMxComponents } from '@mxui/components';

const app = createApp(App);
app.use(router);

setupI18n(app, { messages: { en, zh } });
setupComponents(app);
setupMxComponents(app);

app.mount('#app');
