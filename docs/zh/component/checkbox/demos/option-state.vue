<template>
  <DemoUsage render-gap>
    <template #render>
      <DemoBasic :disabled="isDisabled" />
      <DemoBasic :readonly="isReadonly" />
    </template>

    <template #config>
      <DemoConfig
        label="是否禁用状态"
        code="disabled"
      >
        <VSwitch v-model:checked="isDisabled" />
      </DemoConfig>
      <DemoConfig
        label="是否只读状态"
        code="readonly"
      >
        <VSwitch v-model:checked="isReadonly" />
      </DemoConfig>
    </template>
  </DemoUsage>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './option.vue';

const isDisabled = ref(true);
const isReadonly = ref(true);
</script>
