<!-- 对话框 -->
<template>
  <BaseModal>
    <slot />
    <template #footer>
      <slot name="footer" />
    </template>
  </BaseModal>
</template>

<script setup>
import { provide } from 'vue';
import { modalEmits, dialogProps } from './base/composable';
import BaseModal from './base/base-modal.vue';

// 参数
const emits = defineEmits(modalEmits);
const props = defineProps(dialogProps);
const modelVisible = defineModel('visible', { type: Boolean, default: false });

// 共享数据
provide('parentModal', {
  modalType: 'dialog',
  emits,
  props,
  modelVisible
});
</script>
