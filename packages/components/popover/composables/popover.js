// 弹出框
import { ref, computed, onUnmounted, nextTick } from 'vue';
import { onClickOutside, useEventListener } from '@vueuse/core';
import { usePosition } from './popover-position.v2.js';

// emits
export const popoverEmits = ['open', 'opened', 'close', 'closed'];

// props
export const popoverProps = {
  // 弹框内容
  content: { type: [String, Number], default: null },
  // 弹框位置
  // 'top', 'top-start', 'top-end'
  // 'bottom', 'bottom-start', 'bottom-end'
  // 'right', 'right-start', 'right-end'
  // 'left', 'left-start', 'left-end'
  placement: { type: String, default: 'top' },
  // 触发方式：hover, click, contextmenu
  trigger: { type: String, default: 'hover' },
  // 触发元素：一个 DOM 元素或组件对象，为空时使用 default 插槽
  triggerElement: { type: [HTMLElement, Object], default: null },
  // 是否禁用
  disabled: { type: Boolean, default: false }
};

// 使用弹出框
export const usePopover = ({ triggerRef, contentElRef, arrowElRef, props, emits }) => {
  // 定位实例
  const positionInitance = usePosition();

  // 触发元素
  const triggerElRef = computed(() => props.triggerElement || triggerRef.value);

  // 内容元素
  const contentVisible = ref(false);

  // 触发元素/内容元素 hover
  let hoverTimer = null;
  useEventListener(triggerElRef, 'mouseenter', () => onMouseToggle('enter'));
  useEventListener(triggerElRef, 'mouseleave', () => onMouseToggle('leave'));
  useEventListener(contentElRef, 'mouseenter', () => onMouseToggle('enter'));
  useEventListener(contentElRef, 'mouseleave', () => onMouseToggle('leave'));
  function onMouseToggle(type) {
    if (props.trigger !== 'hover') return;

    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => {
      if (type === 'enter') {
        openByTriggerElement();
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
      openByTriggerElement();
    }
  });

  // 触发元素 contextmenu
  useEventListener(triggerElRef, 'contextmenu', event => {
    if (props.trigger !== 'contextmenu') return;

    event.preventDefault();

    if (contentVisible.value) {
      closePopover();
    } else {
      openByTriggerElement();
    }
  });

  // 外部元素 click
  onClickOutside(
    contentElRef,
    () => {
      if (!props.trigger) return;
      closePopover();
    },
    { ignore: [triggerElRef] }
  );

  // 通过触发元素自动打开：参照 HTMLElement
  function openByTriggerElement() {
    if (props.disabled) return;
    if (contentVisible.value) return;

    // 更新状态
    contentVisible.value = true;
    emits('open');
    updatePosition(triggerElRef.value, true);
  }

  // 通过方法手动打开：参照 MouseEvent 或 HTMLElement
  // 即使当前是打开状态，也可以重复调用
  function openByMethod(event, forceCreate = true) {
    if (props.disabled) return;

    // 更新状态
    if (!contentVisible.value) {
      contentVisible.value = true;
      emits('open');
    }

    // 更新定位
    if (event) {
      const virtualElement = {
        getBoundingClientRect: () => ({ width: 0, height: 0, top: event.clientY, right: event.clientX, bottom: event.clientY, left: event.clientX })
      };
      updatePosition(virtualElement, forceCreate);
    } else {
      updatePosition(triggerElRef.value, forceCreate);
    }
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
