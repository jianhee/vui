<!-- 表单-项 -->
<template>
  <div :class="`mx-form-filed mx-form-filed-${layout}`">
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

// 参数
defineProps({
  // 表单项label
  label: { type: String, default: null }
});

// 共享数据
const layout = inject('layout');
const labelWidth = inject('labelWidth');

// 标签样式
const labelStyles = computed(() => {
  if (layout === 'horizontal') {
    return { width: labelWidth };
  } else {
    return null;
  }
});
</script>

<style lang="scss">
@use '../assets/styles/vars';
.mx-form {
  &-filed {
    display: flex;
    font-size: 14px;
    line-height: 32px;

    // 布局
    &-horizontal,
    &-inline {
      gap: 10px;
    }
    &-vertical {
      flex-direction: column;
    }
  }
  &-label {
    flex: none;
    color: var(--mx-form-label-text-color);
  }
  &-control {
    position: relative;
  }
}
</style>
