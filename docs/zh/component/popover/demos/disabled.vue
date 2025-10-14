<template>
  <DemoUsage>
    <template #render>
      <VComponentMatchRoute
        v-bind="props"
        :disabled="isDisabled"
      >
        <VButton :disabled="isDisabled">hover 触发元素</VButton>
      </VComponentMatchRoute>
    </template>

    <template #config>
      <DemoConfig
        label="是否禁用状态"
        code="disabled"
      >
        <VSwitch v-model:checked="isDisabled" />
      </DemoConfig>
    </template>
  </DemoUsage>
</template>

<script setup>
import { ref } from 'vue';
import { useDemo } from '../composables';

const { props } = useDemo();
const isDisabled = ref(true);
</script>
