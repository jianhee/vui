// 下拉框
import { ref, nextTick } from 'vue';
import { useEventListener, onClickOutside } from '@vueuse/core';

// emits
export const dropdownEmits = ['open', 'close'];

// props
export const dropdownProps = {
  // 触发方式：hover, click, contextmenu
  // 1. 内部打开：通过 `slots.default` 自动处理，适用于单一元素
  // 2. 外部打开：通过 `dropdownRef.open(event)` 方法手动处理，可以脱离触发元素，适用于多个元素打开同一个下拉框，比如列表项的右键菜单
  trigger: { type: String, default: 'hover' }
};

// 使用方法
export const useDropdown = (props, emits, triggerRef, contentRef) => {
  const contentVisible = ref(false);
  const contentStyles = ref(null);
  const contentMargin = 5;
  let hoverTimer = null;

  // 鼠标进入：对齐元素
  function onMouseEnter() {
    if (props.trigger !== 'hover') return;
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => {
      openDropdownByEl(triggerRef.value);
    }, 150);
  }

  // 鼠标离开
  function onMouseLeave() {
    if (props.trigger !== 'hover') return;
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => {
      closeDropdown();
    }, 150);
  }

  // 点击 trigger：对齐元素
  function onTriggerClick() {
    if (props.trigger !== 'click') return;
    if (contentVisible.value) {
      closeDropdown();
    } else {
      openDropdownByEl(triggerRef.value);
    }
  }

  // 右键 trigger：对齐鼠标
  function onTriggerContextmenu(event) {
    if (props.trigger !== 'contextmenu') return;
    openDropdownByEvent(event);
  }

  // 点击 content 外部
  onClickOutside(contentRef, closeDropdown, { ignore: [triggerRef] });

  // 关闭下拉框
  function closeDropdown() {
    if (!contentVisible.value) return;
    emits('close');
    contentVisible.value = false;
  }

  // 打开下拉框：通过元素
  function openDropdownByEl(el) {
    if (!contentVisible.value) {
      openDropdown();
      const { left, top, bottom } = el.getBoundingClientRect();
      updatePosition({
        triggerLeft: left,
        triggerTop: top,
        triggerBottom: bottom
      });
    }
  }

  // 打开下拉框：通过事件
  function openDropdownByEvent({ clientX, clientY }) {
    if (!contentVisible.value) {
      openDropdown();
    }
    updatePosition({
      triggerLeft: clientX,
      triggerTop: clientY,
      triggerBottom: clientY
    });
  }

  // 更新定位
  async function updatePosition({ triggerLeft, triggerTop, triggerBottom }) {
    await nextTick();
    // 内容元素
    const { clientWidth: contentWidth, clientHeight: contentHeight } = contentRef.value;

    // 窗口
    const { clientWidth: windowWidth, clientHeight: windowHeight } = document.documentElement;

    // 水平方向
    const currentLeft = triggerLeft;
    const maxLeft = windowWidth - contentWidth;
    const contentLeft = Math.max(0, Math.min(maxLeft, currentLeft));

    // 垂直方向
    let currentTop = triggerBottom + contentMargin;
    const maxTop = windowHeight - contentHeight - contentMargin;
    if (currentTop > maxTop) {
      currentTop = triggerTop - contentHeight - contentMargin;
    }
    const contentTop = Math.max(0, currentTop);

    // 更新样式
    contentStyles.value = {
      left: `${contentLeft}px`,
      top: `${contentTop}px`
    };
  }

  // 打开
  function openDropdown() {
    contentVisible.value = true;
    emits('open');
  }

  // 触发器
  useEventListener(triggerRef, 'mouseenter', onMouseEnter);
  useEventListener(triggerRef, 'mouseleave', onMouseLeave);
  useEventListener(triggerRef, 'click', onTriggerClick);
  useEventListener(triggerRef, 'contextmenu', e => {
    e.preventDefault();
    onTriggerContextmenu(e);
  });

  // 内容
  useEventListener(contentRef, 'mouseenter', onMouseEnter);
  useEventListener(contentRef, 'mouseleave', onMouseLeave);

  return {
    contentVisible,
    contentStyles,
    openDropdownByEvent
  };
};
