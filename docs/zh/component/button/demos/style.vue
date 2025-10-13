<template>
  <DemoUsage>
    <template #render>
      <DemoBasic :radius="radiusRef" />
    </template>

    <template #config>
      <DemoConfig
        label="圆角尺寸"
        code="radius"
      >
        <DemoSlider v-model:value="radiusRef" />
      </DemoConfig>
    </template>
  </DemoUsage>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const radiusRef = ref(4);
</script>
