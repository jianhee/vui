<template>
  <DemoFormBasic :label-position="labelPosition">
    <VFormFiled label="对齐方式">
      <VRadioGroup
        v-model:value="labelPosition"
        :items="['left', 'right', 'top']"
        direction="horizontal"
      />
    </VFormFiled>
  </DemoFormBasic>
</template>

<script setup>
import { ref } from 'vue';
import DemoFormBasic from './basic.vue';

const labelPosition = ref('top');
</script>
