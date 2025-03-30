import { defineAsyncComponent } from 'vue';

/**
 * 自动注册 Vue 全局组件
 * @param {Object} vueApp                 - Vue 应用实例
 * @param {Object} options.vueComponents  - 需要注册的组件集合：import.meta.glob(['./*.vue''])
 * @param {Array} [options.include=[]]    - 组件名称白名单：空数组时注册全部组件
 * @param {Array} [options.exclude=[]]    - 组件名称黑名单
 */
export function setupComponents(vueApp, options = {}) {
  const { vueComponents, include = [], exclude = [] } = options;

  // 遍历导入的组件并注册
  for (const path in vueComponents) {
    // 转换组件路径为驼峰命名格式：'./my-component.vue' -> 'MyComponent', './my-component/index.vue' -> 'MyComponent'
    const componentName = path
      // 移除开头的./
      .replace(/^\.\//, '')
      // 处理index文件
      .replace(/\/index\.vue$/, '')
      // 移除扩展名
      .replace(/\.vue$/, '')
      .split('-')
      // 首字母大写
      .map(part => part[0]?.toUpperCase() + part.slice(1))
      // 拼接成大驼峰形式
      .join('');

    // 白名单为空 或 组件名在白名单中
    const isIncluded = include.length === 0 || include.includes(componentName);
    // 组件名在黑名单中
    const isExcluded = exclude.includes(componentName);

    // 注册组件
    if (isIncluded && !isExcluded) {
      vueApp.component(componentName, defineAsyncComponent(vueComponents[path]));
    }
  }
}

// 注册 MxUi 组件
export function setupMxComponents(vueApp, options = {}) {
  const vueComponents = import.meta.glob(['./*.vue', './*/index.vue']);
  setupComponents(vueApp, { vueComponents, ...options });
}
