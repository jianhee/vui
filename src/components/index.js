// 自动注册全局组件
import { defineAsyncComponent } from 'vue';

// 导入所有组件
const components = import.meta.glob(['./*.vue', './*/index.vue']);

export function setupMxComponents(vueApp, componentsToRegister = []) {
  // 遍历导入的组件
  for (const path in components) {
    // 提取组件名称
    const componentName = path
      .replace(/^\.\//, '') // 移除开头的./
      .replace(/\/index\.vue$/, '') // 移除结尾的./index.vue
      .replace(/\.vue$/, '') // 移除扩展名
      .split('-')
      .map(part => part[0]?.toUpperCase() + part.slice(1))
      .join('');

    // 注册组件
    if (componentsToRegister.length === 0 || componentsToRegister.includes(componentName)) {
      vueApp.component(componentName, defineAsyncComponent(components[path]));
    }
  }
}
