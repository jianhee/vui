<!-- 抽屉 -->
<template>
  <Teleport to="body">
    <Transition name="mx-drawer">
      <!-- mask -->
      <div
        v-show="isVisible"
        class="mx-drawer"
        @click.self="isVisible = false"
      >
        <!-- 主体 -->
        <div
          v-bind="$attrs"
          class="mx-drawer-content"
          :class="contentClasses"
          :style="contentStyles"
        >
          <!-- 标题 -->
          <div
            v-if="title"
            class="mx-drawer-title"
          >
            {{ title }}
          </div>
          <!-- 内容 -->
          <div class="mx-drawer-body">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue';

defineOptions({ inheritAttrs: false });

// 参数
const props = defineProps({
  // 标题
  title: { type: String, default: null },
  // 位置：left, right
  placement: { type: String, default: 'left' },
  // 宽度
  width: { type: String, default: '378px' }
});

// 是否显示
const isVisible = defineModel('visible', { type: Boolean, default: false });

// 获取类名
const contentClasses = computed(() => {
  return `is-${props.placement}`;
});

// 获取样式
const contentStyles = computed(() => {
  return {
    '--mx-drawer-content-width': props.width
  };
});
</script>

<style lang="scss">
@use '../assets/styles/vars';
.mx-drawer {
  position: fixed;
  inset: 0;
  z-index: 999;
  transition: opacity 0.3s ease;
  &-content {
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--mx-drawer-content-width);
    max-width: 100vw;
    word-break: break-word;
    background-color: var(--mx-drawer-content-bg-color);
    &.is-left {
      left: 0;
      transition: left 0.3s ease;
    }
    &.is-right {
      right: 0;
      transition: right 0.3s ease;
    }
  }
  &-title {
    padding: 0 20px;
    font-size: 20px;
    font-weight: bold;
    line-height: 48px;
    color: var(--mx-drawer-title-text-color);
    text-align: center;
  }
}
.mx-drawer-enter-from .mx-drawer-content,
.mx-drawer-leave-to .mx-drawer-content {
  &.is-left {
    left: calc(min(var(--mx-drawer-content-width), 100vw) * -1);
  }
  &.is-right {
    right: calc(min(var(--mx-drawer-content-width), 100vw) * -1);
  }
}
</style>
