// 全局注册所有图标组件
import { setupComponents } from '../composables/use-components';

export default {
  install: vueApp => {
    const modulesMap = import.meta.glob('./*.vue', { eager: true });
    setupComponents(vueApp, modulesMap);
  }
};
