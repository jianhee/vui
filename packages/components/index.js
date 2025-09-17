// 全局注册所有组件
import { setupComponents } from '../composables/setup-components';

export default {
  install: vueApp => {
    const modulesMap = import.meta.glob('./*/index.js', { eager: true });
    setupComponents(vueApp, modulesMap);
  }
};
