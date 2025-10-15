<!-- 包装 VSlider -->
<template>
  <VSlider
    class="g-demo-slider"
    :tooltip="val => `${val}${unit}`"
  >
    <template #suffix="{ tooltip }">{{ tooltip }} </template>
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
