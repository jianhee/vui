// styles
import './styles/_main.scss';

// vue
import { createApp } from 'vue';

import App from './App.vue';

// custom
import 'virtual:svg-icons-register';
import { setupMxComponents } from './components';
import { setupMxI18n } from './plugins/i18n';

const app = createApp(App);

setupMxComponents(app);
setupMxI18n(app, {
  messages: {
    en: { hello: 'Hello' },
    zh: { hello: '你好' }
  }
});

app.mount('#app');
