<template>
  <DemoFormBasic :direction="direction">
    <VFormFiled label="排列方向">
      <VRadioGroup
        v-model:value="direction"
        :items="['vertical', 'horizontal']"
      />
    </VFormFiled>
  </DemoFormBasic>
</template>

<script setup>
import { ref } from 'vue';
import DemoFormBasic from './basic.vue';

const direction = ref('horizontal');
</script>
