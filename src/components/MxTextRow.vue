<!-- 文字行溢出隐藏 -->
<template>
  <component
    :is="tag"
    class="'mx-text-row'"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  tag: { type: String, default: 'span' }
});
</script>

<style lang="scss">
.mx-text-row {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
