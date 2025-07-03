// 组件相关的方法
import { defineAsyncComponent } from 'vue';

/**
 * 自动注册全局组件
 * @param {Object} vueApp                 - Vue 应用实例
 * @param {Object} options.vueComponents  - 需要注册的组件集合：import.meta.glob(['./*.vue'])
 * @param {Array} [options.include=[]]    - 组件名称白名单：空数组时注册全部组件
 * @param {Array} [options.exclude=[]]    - 组件名称黑名单
 */
export const setupComponents = (vueApp, options = {}) => {
  // 导入的组件集合：{ './components/my-btn.vue': importFn, ...}
  const { vueComponents, include = [], exclude = [] } = options;

  // 遍历组件集合
  for (const path in vueComponents) {
    // 格式化路径：返回 components/my-btn.vue
    const processedPath = path.replace(/^\.\//, '');

    // 获取文件名：返回 my-btn
    const fileName = processedPath
      .split('/')
      .pop()
      .replace(/\.vue$/, '');

    // 获取组件名：中划线/下划线转驼峰式，返回 MyBtn
    const componentName = fileName
      .split(/[_-]/)
      .map(part => part[0]?.toUpperCase() + part.slice(1))
      .join('');

    // 白名单为空 或 组件名在白名单中
    const isIncluded = include.length === 0 || include.includes(componentName);

    // 组件名在黑名单中
    const isExcluded = exclude.includes(componentName);

    // 注册组件
    if (isIncluded && !isExcluded) {
      const importFn = vueComponents[path];
      vueApp.component(componentName, defineAsyncComponent(importFn));
    }
  }
};
