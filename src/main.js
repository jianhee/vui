// styles
import './styles/_main.scss';

// vue
import { createApp } from 'vue';
import App from './App.vue';

// i18n
import en from './locales/en';
import zh from './locales/zh';

// custom
import 'virtual:svg-icons-register';
import { setupI18n } from './plugins/i18n';
import { setupComponents } from './components';

const app = createApp(App);

setupI18n(app, { messages: { en, zh } });
setupComponents(app);

app.mount('#app');
