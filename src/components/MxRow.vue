<!-- 常用样式 -->
<template>
  <component
    :is="tag"
    :class="[
      'mx-row',
      {
        'mx-center': center,
        'mx-ellipsis': ellipsis
      }
    ]"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  // 标签
  tag: { type: String, default: 'div' },
  // 是否居中
  center: { type: Boolean, default: false },
  // 是否溢出隐藏
  ellipsis: { type: Boolean, default: false }
});
</script>

<style lang="scss">
@use '../assets/styles/base';
</style>
