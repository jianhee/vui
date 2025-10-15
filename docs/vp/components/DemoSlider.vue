<!-- 包装 VSlider -->
<template>
  <VSlider
    class="g-demo-slider"
    :tooltip-formatter="val => `${val}${unit}`"
  >
    <template #suffix="{ value }">{{ `${value}${unit}` }} </template>
  </VSlider>
</template>

<script setup>
defineProps({
  unit: { type: String, default: 'px' }
});
</script>

<style lang="scss">
.g-demo-slider {
  min-width: 120px;
}
</style>
