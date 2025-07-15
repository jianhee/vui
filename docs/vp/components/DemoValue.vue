<!-- 切换值 -->
<template>
  <DemoSpace class="demo-value">
    <VSlider
      v-model:value="modelValue"
      :min="min"
      :max="max"
      :tip-formatter="val => `${val}${unit}`"
      class="demo-value-slider"
    />
    <span class="demo-value-text">{{ `${modelValue}${unit}` }}</span>
  </DemoSpace>
</template>

<script setup>
defineProps({
  min: { type: Number, default: undefined },
  max: { type: Number, default: undefined },
  unit: { type: String, default: 'px' }
});

const modelValue = defineModel('value', { type: Number, default: null });
</script>

<style lang="scss">
.demo-value {
  display: flex;
  gap: 10px;
  align-items: center;
  &-slider {
    flex: auto;
    max-width: 240px;
  }
  &-text {
    flex: none;
    color: var(--vui-text-color-regular);
  }
}
</style>
