<!-- 表单-容器 -->
<template>
  <div :class="['vui-form', `vui-form-${direction}`]">
    <slot />
  </div>
</template>

<script setup>
import { provide } from 'vue';

// 参数
const props = defineProps({
  // 排列方向：默认 vertical 纵向（每项独占一行），horizontal 横向（所有项共用一行）
  direction: { type: String, default: 'vertical' },
  // 标签位置：left, right, top
  labelPosition: { type: String, default: 'left' },
  // 标签宽度
  labelWidth: { type: String, default: '4em' }
});

// 共享数据
provide('parentForm', {
  direction: props.direction,
  labelPosition: props.labelPosition,
  labelWidth: props.labelWidth
});
</script>
