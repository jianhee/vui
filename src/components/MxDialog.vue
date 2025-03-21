<!-- 弹窗 -->
<template>
  <Teleport to="body">
    <Transition name="mx-dialog">
      <!-- mask -->
      <div
        v-show="visible"
        class="mx-dialog"
      >
        <!-- 主体 -->
        <div
          v-bind="$attrs"
          class="mx-dialog-content"
          :style="contentStyles"
        >
          <!-- 顶栏 -->
          <div class="mx-dialog-header">
            <span class="mx-dialog-title">{{ title }}</span>
            <MxIcon
              class="mx-dialog-close"
              :component="IconClose"
              @click="onClose"
            />
          </div>
          <!-- 内容 -->
          <div class="mx-dialog-body">
            <slot />
          </div>
          <!-- 底栏 -->
          <div class="mx-dialog-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue';
import MxIcon from './MxIcon.vue';
import IconClose from '../icons/close.vue';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  // 标题
  title: { type: String, default: null },
  // 宽度
  width: { type: String, default: '500px' }
});

// 是否显示
const visible = defineModel('visible', { type: Boolean, default: false });

// 计算样式
const contentStyles = computed(() => {
  return {
    width: props.width
  };
});

// 关闭
const emits = defineEmits(['close']);
function onClose() {
  visible.value = false;
  emits('close');
}
</script>

<style lang="scss">
@use '../styles/vars';
.mx-dialog {
  position: fixed;
  inset: 0;
  z-index: 999;
  overflow: auto;
  background-color: var(--mx-dialog-mask-bg-color);
  backdrop-filter: blur(2px);
  transition: opacity 0.3s ease;
  &-content {
    margin: 50px auto;
    background-color: var(--mx-dialog-content-bg-color);
    border-radius: 4px;
    transition: transform 0.3s ease;
  }
  &-header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px 10px;
    line-height: 24px;
  }
  &-title {
    font-size: 16px;
    color: var(--mx-dialog-title-text-color);
  }
  &-close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 16px;
    color: var(--mx-dialog-close-text-color);
    cursor: pointer;
    &:hover {
      color: var(--mx-dialog-close-active-text-color);
    }
  }
  &-body {
    padding: 30px 20px;
    font-size: 14px;
  }
  &-footer {
    padding: 10px 20px 20px;
    text-align: right;
  }
}
.mx-dialog-enter-from,
.mx-dialog-leave-to {
  opacity: 0;
  .mx-dialog-content {
    transform: translateY(-20px);
  }
}
</style>
