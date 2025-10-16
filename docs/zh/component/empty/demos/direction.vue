<template>
  <DemoUsage>
    <template #render>
      <VComponentMatchRoute :direction="directionRef" />
    </template>

    <template #config>
      <DemoConfig
        label="布局方向"
        code="direction"
      >
        <DemoOptions
          v-model:value="directionRef"
          :options="directionItems"
        />
      </DemoConfig>
    </template>
  </DemoUsage>
</template>

<script setup>
import { ref } from 'vue';

const directionItems = ['vertical', 'horizontal'];
const directionRef = ref(directionItems[1]);
</script>
