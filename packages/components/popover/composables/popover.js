// 弹出框
import { ref, computed, onUnmounted, nextTick } from 'vue';
import { onClickOutside, useEventListener } from '@vueuse/core';
import { usePosition } from './popover-position.v2.js';

// emits
export const popoverEmits = ['open', 'opened', 'close', 'closed'];

// props
export const popoverProps = {
  // 弹框内容
  content: { type: [String, Number], default: undefined },
  // 弹框位置
  // 'top', 'top-start', 'top-end'
  // 'bottom', 'bottom-start', 'bottom-end'
  // 'right', 'right-start', 'right-end'
  // 'left', 'left-start', 'left-end'
  placement: { type: String, default: 'top' },
  // 触发方式：hover, click, contextmenu
  trigger: { type: String, default: 'hover' },
  // 触发元素：一个 DOM 元素或组件对象，为空时使用 slots.default
  triggerElement: { type: [HTMLElement, Object], default: undefined },
  // 是否禁用
  disabled: { type: Boolean, default: false }
};

// 使用弹出框
export const usePopover = ({ triggerRef, contentElRef, arrowElRef, props, emits }) => {
  // 触发元素
  const triggerElRef = computed(() => props.triggerElement || triggerRef.value);

  // 内容元素
  const contentVisible = ref(false);

  // 处理定位
  let isCapture = false;
  let hoverTimer = null;
  const positionInitance = usePosition();

  // 触发元素/内容元素 hover
  useEventListener(triggerElRef, 'mouseenter', () => onMouseToggle('enter'));
  useEventListener(triggerElRef, 'mouseleave', () => onMouseToggle('leave'));
  useEventListener(contentElRef, 'mouseenter', () => onMouseToggle('enter'));
  useEventListener(contentElRef, 'mouseleave', () => onMouseToggle('leave'));
  function onMouseToggle(type) {
    if (props.trigger !== 'hover') return;

    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => {
      if (type === 'enter') {
        openByTrigger();
      } else {
        closePopover();
      }
    }, 150);
  }

  // 触发元素 click
  useEventListener(triggerElRef, 'click', () => {
    if (props.trigger !== 'click') return;

    if (contentVisible.value) {
      closePopover();
    } else {
      openByTrigger();
    }
  });

  // 触发元素 contextmenu
  useEventListener(triggerElRef, 'contextmenu', event => {
    if (props.trigger !== 'contextmenu') return;

    event.preventDefault();
    if (contentVisible.value) {
      closePopover();
    } else {
      openByTrigger();
    }
  });

  // 外部元素 click
  onClickOutside(
    contentElRef,
    () => {
      if (!props.trigger) return;
      closePopover();
    },
    {
      // 忽略触发元素
      ignore: [triggerElRef],
      // 捕获事件
      capture: isCapture
    }
  );

  // 通过触发元素自动打开
  function openByTrigger() {
    if (props.disabled) return;

    // 已打开状态：不能重复打开
    if (contentVisible.value) return;
    contentVisible.value = true;
    emits('open');

    // 参照 HTMLElement 更新定位
    updatePosition(triggerElRef.value, true);
  }

  // 通过内部方法手动打开
  function openByMethod(arg = {}, forceCreate = true) {
    if (props.disabled) return;

    // 关闭事件阻止冒泡：再次调用方法时不会触发关闭事件
    isCapture = false;

    // 已打开状态：不更新状态，但是要更新定位
    if (!contentVisible.value) {
      contentVisible.value = true;
      emits('open');
    }

    // 获取参考元素
    const { el, event } = arg;
    const referenceEl = getReferenceEl(arg);
    function getReferenceEl() {
      // 1.参数和 props.triggerElement 格式一致，直接使用
      if (el) {
        return el?.$el || el;
      }

      // 2.参数为 MouseEvent 鼠标事件，创建虚拟元素，使用鼠标位置
      if (event) {
        const virtualEl = {
          getBoundingClientRect: () => ({
            width: 0,
            height: 0,
            top: event.clientY,
            right: event.clientX,
            bottom: event.clientY,
            left: event.clientX
          })
        };
        return virtualEl;
      }

      // 3.参数为空，使用 props.triggerElement 或 slots.default
      return triggerElRef.value;
    }

    // 更新定位
    if (!referenceEl) return;
    updatePosition(referenceEl, forceCreate);
  }

  // 更新定位
  // 1.每次都需要重新初始化实例的情况：v-if/调用方法
  // 2.只有第一次需要初始化实例的情况：v-show
  async function updatePosition(referenceEl, isForceCreate) {
    await nextTick();
    positionInitance.onOpen(
      {
        referenceElement: referenceEl.$el || referenceEl,
        contentElement: contentElRef.value,
        arrowElement: arrowElRef.value,
        placement: props.placement
      },
      isForceCreate
    );
  }

  // 关闭弹出框
  // 1.每次都需要销毁实例的情况：v-if
  // 2.无需销毁实例的情况：v-show
  function closePopover() {
    if (!contentVisible.value) return;

    // 关闭事件恢复冒泡：点击外部任意位置都会触发关闭事件
    isCapture = true;

    // 更新状态
    contentVisible.value = false;
    emits('close');

    // 更新定位
    positionInitance.onClose(true);
  }

  // 销毁实例
  onUnmounted(() => positionInitance.onClose(true));

  return {
    contentVisible,
    openByMethod,
    closePopover
  };
};
