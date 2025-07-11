<!-- 卡片 -->
<template>
  <div class="demo-card">
    <div class="demo-card-label">{{ label }}</div>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, default: null }
});
</script>

<style>
.demo-card {
  flex: auto;
  width: 100%;
}
.demo-card-label {
  margin-bottom: 10px;
  text-align: center;
}
</style>
