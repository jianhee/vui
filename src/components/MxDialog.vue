<!-- 弹窗 -->
<template>
  <Teleport to="body">
    <Transition name="mx-dialog">
      <!-- mask -->
      <div
        v-show="modelVisible"
        class="mx-dialog"
      >
        <!-- 主体 -->
        <div
          v-bind="$attrs"
          class="mx-dialog-content"
          :style="contentStyles"
        >
          <div class="mx-dialog-header">
            <!-- 标题 -->
            <span class="mx-dialog-title">{{ title }}</span>
            <!-- 关闭按钮 -->
            <MxIcon
              v-if="showClose"
              class="mx-dialog-close"
              :component="IconClose"
              @click="closeDialog"
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
import { computed, watch } from 'vue';
import MxIcon from './MxIcon.vue';
import IconClose from '../assets/icons/close.vue';

defineOptions({ inheritAttrs: false });
const emits = defineEmits(['open', 'close']);

// 参数
const props = defineProps({
  // 标题
  title: { type: String, default: null },
  // 是否显示关闭按钮
  showClose: { type: Boolean, default: true },
  // 宽度
  width: { type: String, default: '500px' }
});

// 是否显示
const modelVisible = defineModel('visible', { type: Boolean, default: false });

// 获取样式
const contentStyles = computed(() => {
  return {
    width: props.width
  };
});

// 关闭弹窗
function closeDialog() {
  modelVisible.value = false;
}

// 关闭时触发关闭事件：外部关闭也能触发
watch(modelVisible, val => {
  if (val) {
    emits('open');
  } else {
    emits('close');
  }
});
</script>

<style lang="scss">
@use '../assets/styles/vars';
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
