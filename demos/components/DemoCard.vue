<template>
  <div class="demo-card">
    <div class="demo-card-title">{{ title }}</div>
    <div class="demo-card-desc">
      <slot name="desc" />
    </div>
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
  &-desc {
    margin: 10px 0;
    font-size: 12px;
  }
  &-content {
    padding: 20px;
    font-size: 14px;
    border: 1px solid var(--demo-border-color);
  }
}
</style>
