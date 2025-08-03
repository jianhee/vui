<template>
  <DemoView>
    <template #content>
      <DemoBasic :disabled="isDisabled" />
    </template>

    <template #props>
      <DemoViewBoolean
        code="disabled"
        label="禁用状态"
      >
        <VSwitch v-model:checked="isDisabled" />
      </DemoViewBoolean>
    </template>
  </DemoView>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const isDisabled = ref(true);
</script>
