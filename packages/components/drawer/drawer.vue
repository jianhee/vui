<!-- 抽屉 -->
<template>
  <BaseModal :class="classes">
    <slot />
    <template #footer>
      <slot name="footer" />
    </template>
  </BaseModal>
</template>

<script setup>
import { computed, provide } from 'vue';
import { modalEmits, drawerProps } from '../dialog/base/composable';
import BaseModal from '../dialog/base/base-modal.vue';

// 参数
const emits = defineEmits(modalEmits);
const props = defineProps(drawerProps);
const modelVisible = defineModel('visible', { type: Boolean, default: false });
const classes = computed(() => {
  return `vui-drawer--${props.placement}`;
});

// 共享数据
provide('parentModal', {
  modalType: 'drawer',
  emits,
  props,
  modelVisible
});
</script>
