<template>
  <DemoUsage>
    <template #render>
      <VComponentMatchRoute :padding="paddingRef" />
    </template>

    <template #config>
      <DemoConfig
        label="上下间距"
        code="padding"
      >
        <DemoSlider
          v-model:value="paddingRef"
          unit="px"
        />
      </DemoConfig>
    </template>
  </DemoUsage>
</template>

<script setup>
import { ref } from 'vue';

const paddingRef = ref(30);
</script>
