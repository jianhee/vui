<!-- 表单-项 -->
<template>
  <div class="vui-form-item">
    <label class="vui-form-label">{{ label }}</label>
    <div class="vui-form-control">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { formItemProps } from './composables';

defineProps(formItemProps);
</script>
