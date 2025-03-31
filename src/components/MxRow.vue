<!-- 常用样式 -->
<template>
  <component
    :is="tag"
    :class="{
      'mx-text-center': center,
      'mx-text-ellipsis': ellipsis,
      'mx-state-clickable': clickable,
      'mx-state-disabled': disabled
    }"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  tag: { type: String, default: 'div' },
  // 居中
  center: { type: Boolean, default: false },
  // 单行省略
  ellipsis: { type: Boolean, default: false },
  // 是否可点击
  clickable: { type: Boolean, default: false },
  // 是否禁用
  disabled: { type: Boolean, default: false }
});
</script>

<style lang="scss">
@use '../assets/styles/base';
</style>
