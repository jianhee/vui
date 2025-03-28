<template>
  <div class="demo-card">
    <div class="demo-card-title">{{ title }}</div>
    <div class="demo-card-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' }
});
</script>

<style lang="scss">
.demo-card {
  &-title {
    margin: 20px 0;
    font-size: 16px;
  }
  &-content {
    padding: 20px;
    font-size: 14px;
    border: 1px solid var(--demo-border-color);
  }
}
</style>
