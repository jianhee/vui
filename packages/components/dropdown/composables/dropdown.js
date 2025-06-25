// 下拉框
import { ref, nextTick, onMounted } from 'vue';
import { useEventListener, onClickOutside } from '@vueuse/core';

// emits
export const dropdownEmits = ['open', 'close'];

// props
export const dropdownProps = {
  // 触发方式：hover, click, contextmenu
  trigger: { type: String, default: 'hover' }
};

// 使用下拉框
export const useDropdown = ({ triggerNextEl, dropdownEl, props, emits }) => {
  // 记录数据
  const triggerEl = ref(null);
  const dropdownVisible = ref(false);
  const dropdownStyles = ref(null);
  const dropdownMargin = 5;
  let hoverTimer = null;

  // 触发器
  onMounted(() => {
    triggerEl.value = triggerNextEl.value?.previousElementSibling;
  });

  // 触发器事件
  useEventListener(triggerEl, 'mouseenter', () => onMouseToggle('enter'));
  useEventListener(triggerEl, 'mouseleave', () => onMouseToggle('leave'));
  useEventListener(triggerEl, 'click', onTriggerClick);
  useEventListener(triggerEl, 'contextmenu', e => {
    e.preventDefault();
    onTriggerContextmenu(e);
  });

  // 下拉框事件
  useEventListener(dropdownEl, 'mouseenter', () => onMouseToggle('enter'));
  useEventListener(dropdownEl, 'mouseleave', () => onMouseToggle('leave'));

  // 鼠标进入/离开：对齐元素
  function onMouseToggle(type) {
    if (props.trigger !== 'hover') return;
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => {
      if (type === 'enter') {
        openDropdown({ el: triggerEl.value });
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
      openDropdown({ el: triggerEl.value });
    }
  }

  // 右键 trigger：对齐鼠标
  function onTriggerContextmenu(event) {
    if (props.trigger !== 'contextmenu') return;
    openDropdown({ event });
  }

  // 点击 dropdown 外部
  onClickOutside(dropdownEl, closeDropdown, { ignore: [triggerEl] });

  // 关闭下拉框
  function closeDropdown() {
    if (!dropdownVisible.value) return;
    dropdownVisible.value = false;
    emits('close');
  }

  // 打开下拉框
  async function openDropdown(params) {
    // 更新事件
    if (!dropdownVisible.value) {
      dropdownVisible.value = true;
      emits('open');
    }
    // 更新定位
    updatePosition(params);
  }

  // 更新定位
  async function updatePosition({ event, el }) {
    await nextTick();

    // 参照物
    const trigger = event || el.getBoundingClientRect();
    const triggerLeft = trigger.clientX || trigger.left;
    const triggerRight = trigger.clientX || trigger.right;
    const triggerTop = trigger.clientY || trigger.top;
    const triggerBottom = trigger.clientY || trigger.bottom;

    // 下拉框
    const { clientWidth: dropdownWidth, clientHeight: dropdownHeight } = dropdownEl.value;

    // 窗口
    const { clientWidth: windowWidth, clientHeight: windowHeight } = document.documentElement;

    // 水平方向：默认对齐左边，超出屏幕则对齐右边
    let dropdownLeft = triggerLeft;
    if (dropdownLeft + dropdownWidth > windowWidth) {
      dropdownLeft = triggerRight - dropdownWidth;
    }

    // 垂直方向：默认在下方，超出屏幕则在上方
    let dropdownTop = triggerBottom + dropdownMargin;
    if (dropdownTop + dropdownHeight > windowHeight) {
      dropdownTop = triggerTop - dropdownMargin - dropdownHeight;
    }

    // 更新样式
    dropdownStyles.value = {
      left: `${dropdownLeft}px`,
      top: `${dropdownTop}px`
    };
  }

  return {
    dropdownVisible,
    dropdownStyles,
    openDropdown,
    closeDropdown
  };
};
