<template>
  <DemoUsage render-gap>
    <template #render>
      <DemoBasic :disabled="isDisabled" />
      <DemoBasic :loading="isLoading" />
    </template>

    <template #config>
      <DemoConfig
        code="disabled"
        label="是否禁用状态"
      >
        <VSwitch v-model:checked="isDisabled" />
      </DemoConfig>
      <DemoConfig
        code="loading"
        label="是否加载状态"
      >
        <VSwitch v-model:checked="isLoading" />
      </DemoConfig>
    </template>
  </DemoUsage>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const isDisabled = ref(true);
const isLoading = ref(true);
</script>
