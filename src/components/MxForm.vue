<!-- 表单-容器 -->
<template>
  <div :class="`mx-form mx-form-${layout}`">
    <slot />
  </div>
</template>

<script setup>
import { provide } from 'vue';

// 参数
const props = defineProps({
  // 布局：horizontal, vertical, inline
  layout: { type: String, default: 'horizontal' },
  // 标签宽度
  labelWidth: { type: String, default: null }
});

// 共享数据
provide('layout', props.layout);
provide('labelWidth', props.labelWidth);
</script>

<style lang="scss">
.mx-form {
  display: flex;
  gap: 10px;

  // 布局
  &-horizontal,
  &-vertical {
    flex-direction: column;
  }
  &-inline {
    flex-wrap: wrap;
  }
}
</style>
