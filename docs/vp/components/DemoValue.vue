<!-- 使用滑块切换值 -->
<template>
  <div class="demo-value">
    <VSlider
      v-model:value="modelValue"
      :min="min"
      :max="max"
      :tip-formatter="val => `${val}${unit}`"
      class="demo-value-slider"
    />
    <span class="demo-value-text">
      {{ modelValue === null ? '' : `${modelValue}${unit}` }}
    </span>
  </div>
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
  align-items: center;
  &-slider {
    flex: auto;
  }
  &-text {
    flex: none;
    width: 4em;
    color: var(--vui-text-color-regular);
    text-align: right;
  }
}
</style>
