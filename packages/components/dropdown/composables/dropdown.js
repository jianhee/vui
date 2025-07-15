// 下拉框
import { ref, nextTick, onMounted } from 'vue';
import { useEventListener, onClickOutside } from '@vueuse/core';

// emits
export const dropdownEmits = ['open', 'close'];

// props
export const dropdownProps = {
  // 触发方式：hover, click, contextmenu
  // 右键对齐鼠标，其它对齐元素
  trigger: { type: String, default: 'hover' },
  // 是否在点击下拉框时关闭
  closeOnClickDropdown: { type: Boolean, default: false }
};

// 使用下拉框
export const useDropdown = ({ triggerNextElRef, dropdownElRef, props, emits }) => {
  // 目标元素：可以是 1.触发元素 2.下拉方法传入的元素 3.下拉方法传入的事件中的元素
  const targetElRef = ref(null);

  // 触发元素
  const triggerElRef = ref(null);
  onMounted(() => {
    triggerElRef.value = triggerNextElRef.value?.previousElementSibling;
  });

  // 触发元素事件
  let hoverTimer = null;
  useEventListener(triggerElRef, 'mouseenter', () => onMouseToggle(triggerElRef.value, 'enter'));
  useEventListener(triggerElRef, 'mouseleave', () => onMouseToggle(triggerElRef.value, 'leave'));
  useEventListener(triggerElRef, 'click', () => onClick(triggerElRef.value));
  useEventListener(triggerElRef, 'contextmenu', event => {
    event.preventDefault();
    onContextmenu(event);
  });

  // 下拉元素
  const dropdownVisible = ref(false);
  const dropdownStyles = ref(null);
  const dropdownMargin = 5;

  // 下拉元素事件
  useEventListener(dropdownElRef, 'mouseenter', () => onMouseToggle(triggerElRef.value, 'enter'));
  useEventListener(dropdownElRef, 'mouseleave', () => onMouseToggle(triggerElRef.value, 'leave'));
  useEventListener(dropdownElRef, 'click', () => {
    if (props.closeOnClickDropdown) {
      closeDropdown();
    }
  });
  onClickOutside(dropdownElRef, closeDropdown, { ignore: [targetElRef] });

  // 通过下拉方法手动打开
  function openByMethod({ el, event }) {
    const target = el || event.target;
    if (props.trigger === 'hover') {
      onMouseToggle(target, 'enter');
    } else if (props.trigger === 'click') {
      onClick(target);
    } else {
      onContextmenu(event);
    }
  }

  // 鼠标滑过：对齐元素
  function onMouseToggle(el, type) {
    if (props.trigger !== 'hover') return;
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => {
      if (type === 'enter') {
        openWithTarget(el);
      } else {
        closeDropdown();
      }
    }, 150);
  }

  // 点击左键：对齐元素
  function onClick(el) {
    if (props.trigger !== 'click') return;
    if (dropdownVisible.value) {
      closeDropdown();
    } else {
      openWithTarget(el);
    }
  }

  // 点击右键：对齐鼠标
  function onContextmenu(event) {
    if (props.trigger !== 'contextmenu') return;
    openWithMouse(event);
  }

  // 打开下拉框：对齐目标
  function openWithTarget(el) {
    if (!el || !dropdownElRef.value) return;
    targetElRef.value = el;
    const rect = el.getBoundingClientRect();
    updatePosition(rect);
  }

  // 打开下拉框：对齐鼠标
  function openWithMouse(event) {
    if (!event || !dropdownElRef.value) return;
    updatePosition({
      left: event.clientX,
      right: event.clientX,
      top: event.clientY,
      bottom: event.clientY
    });
  }

  // 更新定位
  async function updatePosition({ left, right, top, bottom }) {
    // 打开事件
    if (!dropdownVisible.value) {
      dropdownVisible.value = true;
      emits('open');
    }

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
      left: `${dropdownLeft}px`,
      top: `${dropdownTop}px`
    };
  }

  // 关闭下拉框
  function closeDropdown() {
    if (!dropdownVisible.value) return;
    dropdownVisible.value = false;
    emits('close');
  }

  return {
    dropdownVisible,
    dropdownStyles,
    openByMethod,
    closeDropdown
  };
};
