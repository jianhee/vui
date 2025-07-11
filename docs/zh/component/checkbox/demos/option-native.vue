<template>
  <DemoDesc :items="['disabled']" />
  <VForm>
    <VFormItem label="是否禁用">
      <VSwitch
        v-model:checked="isDisabled"
        active-text="禁用状态"
      />
      <DemoOption :disabled="isDisabled" />
    </VFormItem>
  </VForm>
</template>

<script setup>
import { ref } from 'vue';
import DemoOption from './option.vue';

const isDisabled = ref(true);
</script>
