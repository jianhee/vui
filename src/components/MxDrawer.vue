<!-- 抽屉 -->
<template>
  <Teleport to="body">
    <Transition name="mx-drawer">
      <!-- mask -->
      <div
        v-show="modelVisible"
        class="mx-drawer"
        @click.self="modelVisible = false"
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
  // 宽度
  width: { type: String, default: '378px' },
  // 出现位置：left, right
  placement: { type: String, default: 'left' }
});

// 是否显示
const modelVisible = defineModel('visible', { type: Boolean, default: false });

// 获取类名
const contentClasses = computed(() => {
  return `mx-drawer-content-${props.placement}`;
});

// 获取样式
const contentStyles = computed(() => {
  return { width: props.width };
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
    max-width: 100vw;
    word-break: break-word;
    background-color: var(--mx-drawer-content-bg-color);
    transition: all 0.3s ease;
    &-left {
      left: 0;
    }
    &-right {
      right: 0;
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
  &-left {
    transform: translateX(-100%);
  }
  &-right {
    transform: translateX(100%);
  }
}
</style>
