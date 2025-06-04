<!-- 对话框/抽屉 -->
<template>
  <Teleport to="body">
    <Transition :name="`vui-${modalType}`">
      <!-- 遮罩 -->
      <VOverlay
        v-show="parentModal.modelVisible.value"
        @click.self="onClickOverlay"
      >
        <!-- 主体 -->
        <div
          v-bind="$attrs"
          :class="modalClasses"
          :style="modalStyles"
        >
          <!-- 顶栏 -->
          <div :class="`vui-${modalType}-header`">
            <!-- 标题 -->
            <span :class="`vui-${modalType}-title`">{{ parentModal.props.title }}</span>
            <!-- 关闭按钮 -->
            <VIcon
              v-if="parentModal.props.showClose"
              :class="`vui-${modalType}-close`"
              :component="IconClose"
              @click="onClickCloseIcon"
            />
          </div>
          <!-- 内容 -->
          <div :class="`vui-${modalType}-body`">
            <slot />
          </div>
          <!-- 底栏 -->
          <div :class="`vui-${modalType}-footer`">
            <slot name="footer" />
          </div>
        </div>
      </VOverlay>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, watch, inject } from 'vue';
import IconClose from '../../../icons/close.vue';

defineOptions({ inheritAttrs: false });
const parentModal = inject('parentModal', null);

// 区分类型
const modalType = parentModal.modalType;

// 获取类名
const modalClasses = computed(() => {
  return [
    `vui-${modalType}`,
    {
      [`vui-drawer--${parentModal.props.placement}`]: parentModal.modalType === 'drawer'
    }
  ];
});

// 获取样式
const modalStyles = computed(() => {
  return { width: parentModal.props.width };
});

// 点击遮罩
function onClickOverlay() {
  if (!parentModal.props.closeOnClickModal) return;
  closeDialog();
}

// 点击关闭按钮
function onClickCloseIcon() {
  closeDialog();
}

// 关闭弹窗
function closeDialog() {
  parentModal.modelVisible.value = false;
}

// 切换显示状态：外部关闭也能触发
watch(parentModal.modelVisible, val => {
  if (val) {
    parentModal.emits('open');
  } else {
    parentModal.emits('close');
  }
});
</script>
