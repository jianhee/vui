<!-- 切换值 -->
<template>
  <DemoSpace class="demo-value">
    <span
      v-if="label"
      class="demo-value-label"
    >
      {{ label }}
    </span>
    <VSlider
      v-model:value="modelValue"
      :min="min"
      :max="max"
      :tip-format="val => `${val}${unit}`"
      class="demo-value-slider"
    />
    <span class="demo-value-text">{{ `${modelValue}${unit}` }}</span>
  </DemoSpace>
</template>

<script setup>
defineProps({
  label: { type: String, default: null },
  min: { type: Number, default: undefined },
  max: { type: Number, default: undefined },
  unit: { type: String, default: 'px' }
});

const modelValue = defineModel('value', { type: Number, default: 0 });
</script>

<style lang="scss">
.demo-value {
  display: flex;
  gap: 15px;
  align-items: center;
  max-width: 500px;
  color: var(--vui-text-color-regular);
  &-label {
    flex: none;
  }
  &-slider {
    flex: auto;
  }
  &-text {
    flex: none;
    width: 4em;
    text-align: right;
  }
}
</style>
