<!-- 表单-项 -->
<template>
  <div :class="['vui-form-filed', `vui-form-filed-label-${parentForm.props.labelPosition}`]">
    <label
      class="vui-form-label"
      :style="labelStyles"
    >
      {{ label }}
    </label>
    <div class="vui-form-control">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue';

const parentForm = inject('parentForm', null);

// 参数
defineProps({
  // 标签文本
  label: { type: String, default: null }
});

// 标签样式
const labelStyles = computed(() => {
  // 是否使用宽度：纵向 && 标签位置不是顶部 时才生效
  const useWidth = parentForm.props.direction === 'vertical' && parentForm.props.labelPosition !== 'top';
  return {
    width: useWidth ? parentForm.props.labelWidth : null
  };
});
</script>
