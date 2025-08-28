// 下拉框
import { ref, nextTick, computed } from 'vue';
import { useEventListener, onClickOutside } from '@vueuse/core';

// emits
export const dropdownEmits = ['open', 'close'];

// props
export const dropdownProps = {
  // 触发方式：hover, click, contextmenu
  trigger: { type: String, default: 'hover' },
  // 是否在点击下拉框时关闭
  closeOnClickDropdown: { type: Boolean, default: false }
};

// 使用下拉框
export const useDropdown = ({ triggerNextElRef, dropdownElRef, props, emits }) => {
  // 参考元素：可以是 1.触发元素 2.下拉方法传入的元素 3.下拉方法传入的事件中的元素
  const targetElRef = ref(null);

  // 通过触发元素打开
  const triggerElRef = computed(() => triggerNextElRef.value?.previousElementSibling);
  useEventListener(triggerElRef, 'mouseenter', () => onMouseToggle(triggerElRef.value, 'enter'));
  useEventListener(triggerElRef, 'mouseleave', () => onMouseToggle(triggerElRef.value, 'leave'));
  useEventListener(triggerElRef, 'click', () => onClick(triggerElRef.value));
  useEventListener(triggerElRef, 'contextmenu', event => {
    event.preventDefault();
    openByContextmenu(event);
  });

  // 通过下拉方法打开：传入元素或事件
  function openByMethod({ el, event }) {
    const target = el || event.target;
    if (props.trigger === 'hover') {
      onMouseToggle(target, 'enter');
    } else if (props.trigger === 'click') {
      onClick(target);
    } else {
      openByContextmenu(event);
    }
  }

  // 下拉元素
  const dropdownVisible = ref(false);
  const dropdownStyles = ref(null);
  const dropdownMargin = 5;
  useEventListener(dropdownElRef, 'mouseenter', () => onMouseToggle(triggerElRef.value, 'enter'));
  useEventListener(dropdownElRef, 'mouseleave', () => onMouseToggle(triggerElRef.value, 'leave'));
  useEventListener(dropdownElRef, 'click', () => {
    if (props.closeOnClickDropdown) {
      closeDropdown();
    }
  });

  // 点击外部关闭
  onClickOutside(dropdownElRef, closeDropdown, { ignore: [targetElRef] });

  // hover 打开过关闭
  let hoverTimer = null;
  function onMouseToggle(el, type) {
    if (props.trigger !== 'hover') return;
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => {
      if (type === 'enter') {
        openByHoverOrClick(el);
      } else {
        closeDropdown();
      }
    }, 150);
  }

  // click 打开或关闭
  function onClick(el) {
    if (props.trigger !== 'click') return;
    if (dropdownVisible.value) {
      closeDropdown();
    } else {
      openByHoverOrClick(el);
    }
  }

  // hover 和 click 打开：对齐元素
  function openByHoverOrClick(el) {
    if (!el) return;
    targetElRef.value = el;
    const rect = el.getBoundingClientRect();
    openDropdown();
    updatePosition(rect);
  }

  // contextmenu 只能打开不能关闭：对齐鼠标
  function openByContextmenu(event) {
    if (props.trigger !== 'contextmenu') return;
    if (!event) return;
    targetElRef.value = event.target;
    openDropdown();
    updatePosition({
      left: event.clientX,
      right: event.clientX,
      top: event.clientY,
      bottom: event.clientY
    });
  }

  // 打开下拉框
  function openDropdown() {
    // 显示状态
    if (dropdownVisible.value) return;
    dropdownVisible.value = true;

    // 触发事件
    emits('open');

    // 监听滚动事件
    const scrollableParents = getScrollableParents();
    scrollableParents.forEach(parent => {
      parent.addEventListener('scroll', closeDropdown, { passive: true });
    });
  }

  // 关闭下拉框
  function closeDropdown() {
    // 显示状态
    if (!dropdownVisible.value) return;
    dropdownVisible.value = false;

    // 触发事件
    emits('close');

    // 移出滚动事件
    const scrollableParents = getScrollableParents();
    scrollableParents.forEach(parent => {
      parent.removeEventListener('scroll', closeDropdown);
    });
  }

  // 更新定位
  async function updatePosition({ left, right, top, bottom }) {
    // 窗口
    const { clientWidth: windowWidth, clientHeight: windowHeight } = document.documentElement;

    // 下拉框
    await nextTick();
    const { clientWidth: dropdownWidth, clientHeight: dropdownHeight } = dropdownElRef.value;

    // 水平方向：默认对齐左边，超出屏幕则对齐右边
    let dropdownLeft = left;
    if (dropdownLeft + dropdownWidth > windowWidth) {
      dropdownLeft = right - dropdownWidth;
    }

    // 垂直方向：默认在下方，超出屏幕则在上方
    let dropdownTop = bottom + dropdownMargin;
    if (dropdownTop + dropdownHeight > windowHeight) {
      dropdownTop = top - dropdownMargin - dropdownHeight;
    }

    // 更新样式
    dropdownStyles.value = {
      left: `${Math.max(0, dropdownLeft)}px`,
      top: `${Math.max(0, dropdownTop)}px`
    };
  }

  // 获取所有可滚动的父元素
  const getScrollableParents = () => {
    const element = targetElRef.value;
    const parents = [];
    let parent = element?.parentElement;

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
    return parents;
  };

  return {
    dropdownVisible,
    dropdownStyles,
    openByMethod,
    closeDropdown
  };
};
