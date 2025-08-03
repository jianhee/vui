<template>
  <DemoView>
    <template #content>
      <DemoBasic :disabled="isDisabled" />
    </template>

    <template #props>
      <DemoViewBoolean
        label="是否禁用"
        code="disabled"
      >
        <VSwitch v-model:checked="isDisabled" />
      </DemoViewBoolean>
    </template>
  </DemoView>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './option.vue';

const isDisabled = ref(true);
</script>
