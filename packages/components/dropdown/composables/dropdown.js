// 下拉框
import { ref, nextTick } from 'vue';
import { useEventListener, onClickOutside } from '@vueuse/core';

// emits
export const dropdownEmits = ['open', 'close'];

// props
export const dropdownProps = {
  // 触发方式：hover, click, contextmenu
  trigger: { type: String, default: 'hover' }
};

// 使用方法
export const useDropdown = ({ triggerRef, dropdownRef, props, emits }) => {
  const dropdownVisible = ref(false);
  const dropdownStyles = ref(null);
  const dropdownMargin = 5;
  let hoverTimer = null;

  // 鼠标进入/离开：对齐元素
  function onMouseToggle(type) {
    if (props.trigger !== 'hover') return;
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => {
      if (type === 'enter') {
        openDropdown();
      } else {
        closeDropdown();
      }
    }, 150);
  }

  // 点击 trigger：对齐元素
  function onTriggerClick() {
    if (props.trigger !== 'click') return;
    if (dropdownVisible.value) {
      closeDropdown();
    } else {
      openDropdown();
    }
  }

  // 右键 trigger：对齐鼠标
  function onTriggerContextmenu(event) {
    if (props.trigger !== 'contextmenu') return;
    openDropdown(event);
  }

  // 点击 dropdown 外部
  onClickOutside(dropdownRef, closeDropdown, { ignore: [triggerRef] });

  // 关闭下拉框
  function closeDropdown() {
    if (!dropdownVisible.value) return;
    dropdownVisible.value = false;
    emits('close');
  }

  // 打开下拉框
  async function openDropdown(event) {
    // 通过事件：每次都更新定位
    if (event) {
      updatePosition({
        triggerLeft: event.clientX,
        triggerTop: event.clientY,
        triggerBottom: event.clientY
      });
    }

    // 通过元素：只有重新打开时更新定位
    if (dropdownVisible.value) return;
    if (!event) {
      const { left, top, bottom } = triggerRef.value.getBoundingClientRect();
      updatePosition({
        triggerLeft: left,
        triggerTop: top,
        triggerBottom: bottom
      });
    }

    // 触发事件
    dropdownVisible.value = true;
    emits('open');
  }

  // 更新定位
  async function updatePosition({ triggerLeft, triggerTop, triggerBottom }) {
    await nextTick();
    // 内容元素
    const { clientWidth: dropdownWidth, clientHeight: dropdownHeight } = dropdownRef.value;

    // 窗口
    const { clientWidth: windowWidth, clientHeight: windowHeight } = document.documentElement;

    // 水平方向
    const currentLeft = triggerLeft;
    const maxLeft = windowWidth - dropdownWidth;
    const dropdownLeft = Math.max(0, Math.min(maxLeft, currentLeft));

    // 垂直方向
    let currentTop = triggerBottom + dropdownMargin;
    const maxTop = windowHeight - dropdownHeight - dropdownMargin;
    if (currentTop > maxTop) {
      currentTop = triggerTop - dropdownHeight - dropdownMargin;
    }
    const dropdownTop = Math.max(0, currentTop);

    // 更新样式
    dropdownStyles.value = {
      left: `${dropdownLeft}px`,
      top: `${dropdownTop}px`
    };
  }

  // 触发器
  useEventListener(triggerRef, 'mouseenter', () => onMouseToggle('enter'));
  useEventListener(triggerRef, 'mouseleave', () => onMouseToggle('leave'));
  useEventListener(triggerRef, 'click', onTriggerClick);
  useEventListener(triggerRef, 'contextmenu', e => {
    e.preventDefault();
    onTriggerContextmenu(e);
  });

  // 下拉框
  useEventListener(dropdownRef, 'mouseenter', () => onMouseToggle('enter'));
  useEventListener(dropdownRef, 'mouseleave', () => onMouseToggle('leave'));

  return {
    dropdownVisible,
    dropdownStyles,
    openDropdown,
    closeDropdown
  };
};
