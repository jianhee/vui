<!-- 弹窗 -->
<template>
  <Teleport to="body">
    <Transition name="mx-dialog">
      <!-- 遮罩 -->
      <MxOverlay
        v-show="modelVisible"
        @click.self="onClickModal"
      >
        <!-- 主体 -->
        <div
          v-bind="$attrs"
          class="mx-dialog"
          :style="dialogStyles"
        >
          <!-- 顶栏 -->
          <div class="mx-dialog-header">
            <!-- 标题 -->
            <span class="mx-dialog-title">{{ title }}</span>
            <!-- 关闭按钮 -->
            <MxIcon
              v-if="showClose"
              class="mx-dialog-close"
              :component="IconClose"
              @click="onClickCloseIcon"
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
      </MxOverlay>
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
  // 宽度
  width: { type: String, default: '500px' },
  // 标题
  title: { type: String, default: null },
  // 是否显示关闭按钮
  showClose: { type: Boolean, default: true },
  // 是否在点击 modal 时关闭
  closeOnClickModal: { type: Boolean, default: true }
});

// 是否显示
const modelVisible = defineModel('visible', { type: Boolean, default: false });

// 获取样式
const dialogStyles = computed(() => {
  return { width: props.width };
});

// 点击遮罩
function onClickModal() {
  if (!props.closeOnClickModal) return;
  closeDialog();
}

// 点击关闭按钮
function onClickCloseIcon() {
  closeDialog();
}

// 关闭弹窗
function closeDialog() {
  modelVisible.value = false;
}

// 切换显示状态：外部关闭也能触发
watch(modelVisible, val => {
  if (val) {
    emits('open');
  } else {
    emits('close');
  }
});
</script>

<style lang="scss">
@use '../assets/styles/modules/dialog';
@include dialog.mx-dialog('mx-dialog');
.mx-dialog {
  // 颜色
  --mx-dialog-bg-color: var(--mx-bg-color);
  --mx-dialog-box-shadow: var(--mx-box-shadow);
  --mx-dialog-title-text-color: var(--mx-text-color-primary);
  --mx-dialog-content-text-color: var(--mx-text-color-regular);
  --mx-dialog-close-icon-color: var(--mx-text-color-secondary);
  --mx-dialog-close-icon-active-color: var(--mx-brand-color);

  // 主体
  max-width: 98vw;
  padding: 16px;
  margin: 15vh auto 50px;
  overflow: auto;
  border-radius: 4px;

  // 顶栏
  &-header {
    padding-bottom: 16px;
  }

  // 动画
  &-enter-from > &,
  &-leave-to > & {
    transform: translateY(-20px);
  }
}
</style>
