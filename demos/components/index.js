// 自动注册 Vue 全局组件
import { installComponents } from '@mxui/components';

export function setupComponents(vueApp) {
  // 导入所有组件
  const vueComponents = import.meta.glob(['./*.vue']);
  // 注册组件
  installComponents(vueApp, { vueComponents });
}
