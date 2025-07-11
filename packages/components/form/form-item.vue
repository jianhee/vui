<!-- 表单-项 -->
<template>
  <div class="vui-form-item">
    <!-- 左侧文本 -->
    <label
      v-if="label"
      class="vui-form-label"
    >
      {{ label }}
    </label>
    <!-- 右侧内容 -->
    <div class="vui-form-control">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { formItemProps } from './composables/form-item';
defineProps(formItemProps);
</script>
