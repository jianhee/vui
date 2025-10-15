<template>
  <div class="c-demo-sliders">
    <DemoConfig
      label="使用属性"
      label-width="4em"
    >
      <VSlider
        v-model:value="valueRef"
        :suffix="`${valueRef}px`"
      />
    </DemoConfig>
    <DemoConfig
      label="使用插槽"
      label-width="4em"
    >
      <VSlider v-model:value="valueRef">
        <template #suffix="{ value }">{{ `${value}px` }}</template>
      </VSlider>
      <VSlider
        v-model:value="valueRef"
        :tooltip="`${valueRef}px`"
      >
        <template #suffix="{ tooltipText }">{{ tooltipText }}</template>
      </VSlider>
    </DemoConfig>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const valueRef = ref(50);
</script>
