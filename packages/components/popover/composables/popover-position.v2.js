// 弹出框定位（基于Popper.js）
// https://popper.js.org/docs/v2/
import { createPopper } from '@popperjs/core';
export const usePosition = () => {
  // 保存实例
  let popperInstance = null;

  // 打开弹框时
  function onOpen(params, forceCreate) {
    if (forceCreate || !popperInstance) {
      // 1.需要强制创建实例
      // 2.实例不存在
      initPopper(params);
    } else {
      // 3.实例存在：直接更新定位
      popperInstance.update();
    }

    // 监听滚动事件
    toggleScrollListeners(true);
  }

  // 关闭弹框时
  function onClose(forceDestroy) {
    // 移除滚动事件
    toggleScrollListeners(false);

    // 如果需要销毁实例
    if (forceDestroy) {
      popperInstance?.destroy();
      popperInstance = null;
    }
  }

  // 初始化
  function initPopper(params) {
    // 先销毁
    onClose(true);
    // 再创建
    popperInstance = createPopper(params.referenceElement, params.contentElement, {
      // 初始定位
      placement: params.placement,
      // 定位策略
      strategy: 'fixed',
      // 其它配置
      modifiers: [
        // 偏移量: x轴0, y轴8
        { name: 'offset', options: { offset: [0, 8] } },
        // 溢出视口时自动调整位置：最小间距8
        { name: 'preventOverflow', options: { padding: 8 } },
        // 自动计算箭头位置
        { name: 'arrow', options: { element: params.arrowElement } }
      ]
    });
  }

  // 启用/禁用滚动事件
  function toggleScrollListeners(enabled) {
    popperInstance?.setOptions(options => ({
      ...options,
      modifiers: [...options.modifiers, { name: 'eventListeners', enabled }]
    }));
  }

  return { onOpen, onClose };
};
