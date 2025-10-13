<!-- 间距 -->
<template>
  <div
    :class="{
      'g-demo-space': true,
      'g-demo-space--flex': flex
    }"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  flex: { type: Boolean, default: false }
});
</script>

<style lang="scss">
.g-demo-space {
  margin: 10px 0;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  &--flex {
    display: flex;
    gap: 10px;
  }
}
</style>
