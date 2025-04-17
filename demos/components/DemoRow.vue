<template>
  <div :class="['demo-row', { 'demo-row-flex': flex }]">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  flex: { type: Boolean, default: false }
});
</script>

<style lang="scss">
.demo-row {
  margin-top: 10px;
  &:first-child {
    margin-top: 0;
  }
  &-flex {
    display: flex;
    gap: 10px;
    align-items: flex-start;
  }
}
</style>
