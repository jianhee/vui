<!-- 下拉框 -->
<!-- 1.使用 trigger 打开 -->
<!-- 2.使用 open 方法打开 -->
<template>
  <!-- 触发器 -->
  <div
    v-if="slots.default"
    ref="triggerRef"
    class="mx-dropdown-trigger"
    v-bind="$attrs"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @click="onTriggerClick"
    @contextmenu.prevent="onTriggerContextmenu"
  >
    <slot />
  </div>

  <!-- 内容 -->
  <Teleport to="body">
    <Transition name="mx-dropdown">
      <div
        v-show="contentVisible"
        ref="contentRef"
        class="mx-dropdown-content"
        :style="contentStyles"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @click="onContentClick"
      >
        <slot name="content" />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, useSlots, nextTick } from 'vue';
import { onClickOutside, useWindowSize } from '@vueuse/core';

defineOptions({ inheritAttrs: false });
const slots = useSlots();
const emits = defineEmits(['open', 'close']);

// 参数
const props = defineProps({
  // 触发方式
  // hover        对齐元素
  // click        对齐元素
  // contextmenu  对齐鼠标
  trigger: { type: String, default: 'hover' }
});

// 窗口
const { width: windowWidth, height: windowHeight } = useWindowSize();

// 触发器和内容
const triggerRef = ref(null);
const contentRef = ref(null);
const contentVisible = ref(false);
const contentStyles = ref(null);
const contentOffset = 5;

// 鼠标进入：对齐元素
let hoverTimer = null;
function onMouseEnter() {
  if (props.trigger !== 'hover') return;
  clearTimeout(hoverTimer);
  openDropdownByEl(triggerRef.value);
}

// 鼠标离开
function onMouseLeave() {
  if (props.trigger !== 'hover') return;
  hoverTimer = setTimeout(() => {
    clearTimeout(hoverTimer);
    closeDropdown();
  }, 100);
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

// 点击 content 内部
function onContentClick() {
  closeDropdown();
}

// 点击 content 外部
onClickOutside(contentRef, closeDropdown, { ignore: [triggerRef] });

// 打开下拉框：通过元素
function openDropdownByEl(el) {
  if (!contentVisible.value) {
    emits('open');
    contentVisible.value = true;
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
    emits('open');
    contentVisible.value = true;
  }
  updatePosition({
    triggerLeft: clientX,
    triggerTop: clientY,
    triggerBottom: clientY
  });
}

// 关闭下拉框
function closeDropdown() {
  if (!contentVisible.value) return;
  emits('close');
  contentVisible.value = false;
}

// 更新定位
function updatePosition({ triggerLeft, triggerTop, triggerBottom }) {
  nextTick(() => {
    // 内容元素
    const { clientWidth: contentWidth, clientHeight: contentHeight } = contentRef.value;

    // 水平方向
    const currentLeft = triggerLeft;
    const maxLeft = windowWidth.value - contentWidth;
    const contentLeft = Math.max(0, Math.min(maxLeft, currentLeft));

    // 垂直方向
    let currentTop = triggerBottom + contentOffset;
    const maxTop = windowHeight.value - contentHeight - contentOffset;
    if (currentTop > maxTop) {
      currentTop = triggerTop - contentHeight - contentOffset;
    }
    const contentTop = Math.max(0, currentTop);

    // 更新样式
    contentStyles.value = {
      left: `${contentLeft}px`,
      top: `${contentTop}px`
    };
  });
}

// 外部调用方法，比如v-for渲染多个触发元素时，直接调用方法更方便
defineExpose({
  open: openDropdownByEvent
});
</script>

<style lang="scss">
@use '../assets/styles/vars';
.mx-dropdown {
  &-trigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  &-content {
    position: fixed;
    z-index: 999;
    max-width: 95vw;
    max-height: 95vh;
    padding-top: 5px;
    padding-bottom: 5px;
    overflow: auto;
    background-color: var(--mx-dropdown-content-bg-color);
    border: 1px solid var(--mx-dropdown-content-border-color);
    border-radius: 4px;
    box-shadow: var(--mx-dropdown-content-shadow);
    transition:
      opacity 0.3s ease,
      transform 0.3s ease,
      left 0.1s ease,
      top 0.1s ease;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(-5px);
  }
}
</style>
