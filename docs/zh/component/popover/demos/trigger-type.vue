<template>
  <DemoSpace flex>
    <VComponentMatchRoute
      v-for="trigger in triggers"
      :key="trigger.value"
      v-bind="props"
      :trigger="trigger.value"
    >
      <VButton>{{ trigger.value }}{{ trigger.label }}</VButton>
    </VComponentMatchRoute>
  </DemoSpace>
</template>

<script setup>
import { useDemo } from '../composables';

const { props } = useDemo();
const triggers = [{ value: 'hover', label: '（默认）' }, { value: 'click' }, { value: 'contextmenu' }];
</script>
