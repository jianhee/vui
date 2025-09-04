<template>
  <DemoView content-gap>
    <template #content>
      <DemoBasic :disabled="isDisabled" />
      <DemoBasic :loading="isLoading" />
    </template>

    <template #props>
      <DemoViewBoolean
        code="disabled"
        label="是否禁用状态"
      >
        <VSwitch v-model:checked="isDisabled" />
      </DemoViewBoolean>
      <DemoViewBoolean
        code="loading"
        label="是否加载状态"
      >
        <VSwitch v-model:checked="isLoading" />
      </DemoViewBoolean>
    </template>
  </DemoView>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const isDisabled = ref(true);
const isLoading = ref(true);
</script>
