<!-- 下拉框 -->
<template>
  <!-- 触发器 -->
  <div
    v-if="slots.default"
    ref="triggerRef"
    class="mx-dropdown-trigger"
    v-bind="$attrs"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @click="onClickTrigger"
    @contextmenu.prevent="onContextMenu"
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
      >
        <slot name="content" />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, useSlots, nextTick } from 'vue';
import { onClickOutside, useWindowSize } from '@vueuse/core';

// 参数
const props = defineProps({
  // 触发方式：hover, click, contextmenu
  trigger: { type: String, default: 'hover' }
});

// slots
const slots = useSlots();

// 窗口大小
const { width: windowWidth, height: windowHeight } = useWindowSize();

// 触发器
const triggerRef = ref(null);

// 内容
const contentRef = ref(null);
const contentVisible = ref(false);
const contentStyles = ref(null);
const contentOffset = 5;

// hover：进入
const hoverTimer = ref(null);
function onMouseEnter() {
  if (props.trigger !== 'hover') return;
  clearTimeout(hoverTimer.value);
  if (contentVisible.value) return;
  // 对齐元素
  openDropdown(triggerRef.value);
}

// hover：离开
function onMouseLeave() {
  if (props.trigger !== 'hover') return;
  if (!contentVisible.value) return;
  hoverTimer.value = setTimeout(() => {
    closeDropdown();
  }, 100);
}

// click：左键点击
function onClickTrigger() {
  if (props.trigger !== 'click') return;
  if (contentVisible.value) return;
  // 对齐元素
  openDropdown(triggerRef.value);
}

// contextmenu：右键点击
function onContextMenu(event) {
  if (props.trigger !== 'contextmenu') return;
  // 对齐鼠标
  openDropdown(event);
}

// click：点击外部
onClickOutside(contentRef, () => {
  if (!contentVisible.value) return;
  closeDropdown();
});

// 关闭下拉框
function closeDropdown() {
  contentVisible.value = false;
}

// 打开下拉框：target可以是触发元素或鼠标事件
function openDropdown(target) {
  contentVisible.value = true;
  const isEl = target instanceof HTMLElement;
  nextTick(() => {
    // 触发元素
    const triggerRect = isEl ? target.getBoundingClientRect() : null;
    const triggerTop = triggerRect?.top || target?.clientY || 0;
    const triggerLeft = triggerRect?.left || target?.clientX || 0;
    const triggerBottom = triggerRect?.bottom || target?.clientY || 0;

    // 内容元素
    const contentRect = contentRef.value.getBoundingClientRect();
    let contentTop = triggerBottom + contentOffset;
    let contentLeft = triggerLeft;

    // 垂直方向溢出
    if (contentTop < 0) {
      contentTop = 0;
    } else if (contentTop + contentRect.height > windowHeight.value) {
      contentTop = triggerTop - contentRect.height - contentOffset;
    }

    // 水平方向溢出
    if (contentLeft < 0) {
      contentLeft = 0;
    } else if (contentLeft + contentRect.width > windowWidth.value) {
      contentLeft = windowWidth.value - contentRect.width;
    }

    contentStyles.value = {
      top: `${contentTop}px`,
      left: `${contentLeft}px`
    };
  });
}

// 外部调用方法，比如v-for渲染多个触发元素时，直接调用方法更方便
defineExpose({
  open: openDropdown,
  clsoe: closeDropdown
});
</script>

<style lang="scss">
:root {
  --mx-dropdown-bg-color: #fff;
  --mx-dropdown-border-color: #ddd;
  --mx-dropdown-shadow: 0 3px 6px rgb(0 0 0 / 16%);
}

@media (prefers-color-scheme: dark) {
  :root {
    --mx-dropdown-bg-color: #2b2b2b;
    --mx-dropdown-border-color: #4f4f4f;
  }
}
.mx-dropdown {
  &-trigger {
    cursor: pointer;
  }
  &-content {
    position: fixed;
    z-index: 999;
    max-width: 95vw;
    max-height: 95vh;
    overflow: auto;
    background-color: var(--mx-dropdown-bg-color);
    border: 1px solid var(--mx-dropdown-border-color);
    border-radius: 4px;
    box-shadow: var(--mx-dropdown-shadow);
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(-5px);
  }
}
</style>
