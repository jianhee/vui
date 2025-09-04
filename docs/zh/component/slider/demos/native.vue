<template>
  <DemoViewBoolean
    label="禁用状态"
    code="disabled"
  >
    <VSlider
      v-model:value="valueRef"
      disabled
      class="demo-slider"
    />
  </DemoViewBoolean>
  <DemoViewBoolean
    label="只读状态"
    code="readonly"
  >
    <VSlider
      v-model:value="valueRef"
      readonly
      class="demo-slider"
    />
  </DemoViewBoolean>
</template>

<script setup>
import { ref } from 'vue';

const valueRef = ref(50);
</script>
