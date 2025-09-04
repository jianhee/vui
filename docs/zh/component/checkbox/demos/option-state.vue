<template>
  <DemoView content-gap>
    <template #content>
      <DemoBasic :disabled="isDisabled" />
      <DemoBasic :readonly="isReadonly" />
    </template>

    <template #props>
      <DemoViewBoolean
        label="是否禁用状态"
        code="disabled"
      >
        <VSwitch v-model:checked="isDisabled" />
      </DemoViewBoolean>
      <DemoViewBoolean
        label="是否只读状态"
        code="readonly"
      >
        <VSwitch v-model:checked="isReadonly" />
      </DemoViewBoolean>
    </template>
  </DemoView>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './option.vue';

const isDisabled = ref(true);
const isReadonly = ref(true);
</script>
