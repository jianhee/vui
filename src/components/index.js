// 自动注册 Vue 全局组件
import { defineAsyncComponent } from 'vue';

/**
 * 在 main.js 中调用
 * @param {Object} vueApp   - Vue 应用实例
 * @param {Object} options  - 组件注册配置项
 */
export function setupComponents(vueApp, options = {}) {
  // 导入所有组件：匹配当前目录下的.vue文件和子目录下的index.vue文件
  const vueComponents = import.meta.glob(['./*.vue', './*/index.vue']);
  // 注册组件
  installComponents(vueApp, { ...options, vueComponents });
}

/**
 * 在 setupComponents 中调用，导出方便其它项目使用
 * @param {Object} vueApp                 - Vue 应用实例
 * @param {Object} options.vueComponents  - 需要注册的组件集合：由 import.meta.glob 生成
 * @param {Array} [options.include=[]]    - 组件名称白名单：空数组时注册全部组件
 * @param {Array} [options.exclude=[]]    - 组件名称黑名单
 */
export function installComponents(vueApp, options = {}) {
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
