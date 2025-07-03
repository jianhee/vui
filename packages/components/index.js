// 导出所有组件
// 在 main.js 中使用
export default {
  install: vueApp => {
    // 导入所有组件目录下的 index.js, 返回值为一个对象
    // {
    //   './checkbox/index.js': module,
    //   './radio/index.js': { VComponent1: {}, VComponent2: {}, ... },
    //   ...
    // }
    const componentModules = import.meta.glob('./**/index.js', { eager: true });

    // 获取每个 index.js 中导出的 module
    // 返回值：[module, module, ...]
    Object.values(componentModules).forEach(module => {
      // 解构 module 对象，提取组件名和组件对象
      Object.entries(module).forEach(([name, component]) => {
        // 注册组件
        vueApp.component(name, component);
      });
    });
  }
};
