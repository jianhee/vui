<!-- 表单-项 -->
<template>
  <div :class="['mx-form-filed', `mx-form-filed-label-${parentForm.labelPosition}`]">
    <label
      class="mx-form-label"
      :style="labelStyles"
    >
      {{ label }}
    </label>
    <div class="mx-form-control">
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
  const useWidth = parentForm.direction === 'vertical' && parentForm.labelPosition !== 'top';
  return {
    width: useWidth ? parentForm.labelWidth : null
  };
});
</script>

<style lang="scss">
@use '../assets/styles/vars';
.mx-form {
  &-filed {
    display: flex;
    gap: 10px;
    font-size: 14px;
    line-height: 32px;
  }
  &-label {
    flex: none;
  }
  &-control {
    position: relative;
    flex: auto;
  }

  // 标签位置
  &-filed-label-right &-label {
    text-align: right;
  }
  &-filed-label-top {
    display: block;
  }
}
</style>
