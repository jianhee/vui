// 弹出框定位（基于Popper.js）
// https://popper.js.org/docs/v2/
import { createPopper } from '@popperjs/core';
export const popoverPosition = {
  // 打开弹框时
  onOpen(params, forceCreate) {
    if (forceCreate || !this.popperInstance) {
      // 1.需要强制创建实例
      // 2.实例不存在
      this.initPopper(params);
    } else {
      // 3.实例存在：直接更新定位
      this.popperInstance.update();
    }

    // 监听滚动事件
    this.toggleScrollListeners(true);
  },
  // 关闭弹框时
  onClose(forceDestroy) {
    // 移除滚动事件
    this.toggleScrollListeners(false);

    // 如果需要销毁实例
    if (forceDestroy) {
      this.popperInstance?.destroy();
      this.popperInstance = null;
    }
  },
  // 初始化
  popperInstance: null,
  initPopper(params) {
    this.onClose(true);
    this.popperInstance = createPopper(params.referenceElement, params.popperElement, {
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
  },
  // 启用/禁用滚动事件
  toggleScrollListeners(enabled) {
    this.popperInstance?.setOptions(options => ({
      ...options,
      modifiers: [...options.modifiers, { name: 'eventListeners', enabled }]
    }));
  }
};
