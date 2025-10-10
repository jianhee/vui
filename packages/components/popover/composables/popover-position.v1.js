// 弹出框定位（已废弃）
export const popoverPosition = {
  // 打开弹框时
  onOpen(params) {
    this.setPlacementAttrs(params);
    this.setPositionStyles(params);
    this.getScrollableParents(params);
    this.toggleScrollListeners(true);
  },
  // 关闭弹框时
  onClose() {
    this.toggleScrollListeners(false);
  },
  // 设置位置属性
  setPlacementAttrs(params) {
    params.popperElement.setAttribute('data-placement', params.placement);
  },
  // 设置定位样式
  setPositionStyles(params) {
    // 窗口坐标
    const { clientWidth: windowWidth, clientHeight: windowHeight } = document.documentElement;

    // 参考元素坐标
    const refRect = params.referenceElement?.getBoundingClientRect();
    const { left, right, top, bottom } = refRect;

    // 弹框元素坐标
    const { clientWidth: contentWidth, clientHeight: contentHeight } = params.popperElement;
    const offsetSize = 8;

    // 水平方向坐标：默认对齐左边，超出屏幕则对齐右边
    const contentLeft = left + contentWidth > windowWidth ? right - contentWidth : left;

    // 垂直方向坐标
    let contentTop = 0;
    const contentTopPB = bottom + offsetSize;
    const contentTopPT = top - offsetSize - contentHeight;
    if (params.placement === 'bottom') {
      // 默认在下方，超出屏幕则在上方
      contentTop = contentTopPB + contentHeight > windowHeight ? contentTopPT : contentTopPB;
    } else if (params.placement === 'top') {
      // 默认在上方，超出屏幕则在下方
      contentTop = contentTopPT < 0 ? contentTopPB : contentTopPT;
    }

    // 设置样式
    params.popperElement.style.left = `${Math.max(0, contentLeft)}px`;
    params.popperElement.style.top = `${Math.max(0, contentTop)}px`;
  },
  // 获取所有可滚动的父元素
  scrollableParents: null,
  getScrollableParents(params) {
    const parents = [];
    let parent = params.popperElement?.parentElement;

    while (parent) {
      const style = window.getComputedStyle(parent);
      const isScrollable = style.overflow === 'auto' || style.overflow === 'scroll' || style.overflowX === 'auto' || style.overflowX === 'scroll' || style.overflowY === 'auto' || style.overflowY === 'scroll';

      if (isScrollable) {
        parents.push(parent);
      }

      parent = parent.parentElement;
    }

    // 始终添加window作为可能的滚动源
    parents.push(window);
    this.scrollableParents = parents;
  },
  // 启用/禁用滚动事件
  toggleScrollListeners(enabled) {
    this.scrollableParents.forEach(parent => {
      if (enabled) {
        parent.addEventListener('scroll', this.setPositionStyles, { passive: true });
      } else {
        parent.removeEventListener('scroll', this.setPositionStyles);
      }
    });
  }
};
