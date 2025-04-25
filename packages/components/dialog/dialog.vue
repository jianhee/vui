<!-- 弹窗 -->
<template>
  <Teleport to="body">
    <Transition name="vui-dialog">
      <!-- 遮罩 -->
      <VOverlay
        v-show="modelVisible"
        @click.self="onClickModal"
      >
        <!-- 主体 -->
        <div
          v-bind="$attrs"
          class="vui-dialog"
          :style="dialogStyles"
        >
          <!-- 顶栏 -->
          <div class="vui-dialog-header">
            <!-- 标题 -->
            <span class="vui-dialog-title">{{ title }}</span>
            <!-- 关闭按钮 -->
            <VIcon
              v-if="showClose"
              class="vui-dialog-close"
              :component="IconClose"
              @click="onClickCloseIcon"
            />
          </div>
          <!-- 内容 -->
          <div class="vui-dialog-body">
            <slot />
          </div>
          <!-- 底栏 -->
          <div class="vui-dialog-footer">
            <slot name="footer" />
          </div>
        </div>
      </VOverlay>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, watch } from 'vue';
import IconClose from '../../icons/close.vue';

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
