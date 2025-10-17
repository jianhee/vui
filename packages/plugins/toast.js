// Toast 消息提示
import { createVNode, render } from 'vue';
import { guid } from '../utils/data-string';
import VToast from '../components/toast/toast.vue';

// 所有实例
const allToastInstances = [];
let allToastContainer;

// 创建实例
const createToast = async options => {
  // 所有实例的容器
  if (!allToastContainer) {
    allToastContainer = document.createElement('div');
    allToastContainer.className = 'vui-toast-wrapper';
    document.body.appendChild(allToastContainer);
  }

  // 创建实例
  const id = guid();
  const defaultProps = { type: 'info', duration: 3000 };
  const customProps = typeof options === 'string' ? { message: options } : options;
  const vnode = createVNode(VToast, {
    ...defaultProps,
    ...customProps,
    visible: false,
    onClosed: () => onClosed(id)
  });

  // 渲染组件
  const currentToastContainer = document.createElement('div');
  render(vnode, currentToastContainer);
  allToastContainer.appendChild(vnode.el);

  // 存储实例
  allToastInstances.push({ id, vnode, currentToastContainer });

  // 打开
  vnode.component?.exposed?.open();
};

// 关闭后
function onClosed(id) {
  const index = allToastInstances.findIndex(item => item.id === id);
  if (index === -1) return;

  // 销毁组件
  const { currentToastContainer } = allToastInstances[index];
  render(null, currentToastContainer);

  // 移除实例
  allToastInstances.splice(index, 1);

  // 如果没有实例了，移除外层容器
  if (allToastInstances.length === 0) {
    allToastContainer.parentNode.removeChild(allToastContainer);
    allToastContainer = null;
  }
}

// 实例方法
const toastFunction = options => createToast(options);

// 给每种类型设置一个别名
const createTypeMethod = type => {
  return options => {
    if (typeof options === 'string') {
      return createToast({ message: options, type });
    } else {
      return createToast({ ...options, type });
    }
  };
};
toastFunction.primary = createTypeMethod('primary');
toastFunction.success = createTypeMethod('success');
toastFunction.warning = createTypeMethod('warning');
toastFunction.error = createTypeMethod('error');
toastFunction.info = createTypeMethod('info');

// 函数式调用
// toast(options)
// toast.success(options)
export const toast = toastFunction;

// 插件式调用：在 main.js 中注册
// 方式1：setupToast(vue)
export const setupToast = vueApp => {
  vueApp.config.globalProperties.$toast = toast;
};

// 方式2：vue.use(toast)
export const toastPlugin = {
  install: setupToast
};
