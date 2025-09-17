/**
 * 获取组件对象
 * @param {Object} modulesMap     - 组件模块对象：{ 组件路径: 组件模块 }
 * @return {Object} componentsMap - 组件对象：{ 组件名: 组件 }
 */
export const getComponents = modulesMap => {
  // 组件对象
  const componentsMap = {};

  // 遍历组件模块
  // modulesMap = { './components/my-component.vue': Module }
  Object.entries(modulesMap).forEach(([path, module]) => {
    // 遍历组件
    // Module = { default: Component, VButton: Component }
    Object.entries(module).forEach(([rawName, component]) => {
      const newName = getComponentsName(path, rawName);
      componentsMap[newName] = component;
    });
  });

  // 获取组件名
  function getComponentsName(path, rawName) {
    // 使用文件名称
    if (rawName === 'default') {
      const newName = path
        // 路径名=>文件名：./components/my-component.vue => my-component
        .split('/')
        .pop()
        .replace(/\.vue$/, '')
        // 文件名=>驼峰式组件名：my-component => MyComponent
        .replace(/-(\w)/g, (_, c) => c.toUpperCase());
      return newName;
    }

    // 使用指定名称
    return rawName;
  }

  // componentsMap = { 'MyComponent': Component }
  return componentsMap;
};

/**
 * 注册全局组件
 * @param {Object} vueApp               - Vue 应用实例
 * @param {Object} modulesMap           - 导入的组件模块：例如 import.meta.glob(['./*.vue'], { eager: true }) 的值
 * @param {Array} [options.includes=[]] - 组件名称白名单：空数组时注册全部组件
 * @param {Array} [options.excludes=[]] - 组件名称黑名单
 */
export const setupComponents = (vueApp, modulesMap, options = {}) => {
  const componentsMap = getComponents(modulesMap);
  const { includes = [], excludes = [] } = options;

  // 遍历组件
  Object.entries(componentsMap).forEach(([componentName, component]) => {
    // 白名单为空 或 组件名在白名单中
    const isIncluded = includes.length === 0 || includes.includes(componentName);

    // 组件名在黑名单中
    const isExcluded = excludes.includes(componentName);

    // 注册组件
    if (isIncluded && !isExcluded) {
      vueApp.component(componentName, component);
    }
  });
};
