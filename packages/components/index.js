// 全局注册 Vui
import { setupComponents } from '../composables/use-components';
import { setupToast } from '../plugins/toast';

export default {
  install: vueApp => {
    // 注册所有组件
    const modulesMap = import.meta.glob('./*/index.js', { eager: true });
    setupComponents(vueApp, modulesMap);

    // 注册 toast 插件
    setupToast(vueApp);
  }
};
