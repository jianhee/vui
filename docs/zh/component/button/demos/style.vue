<template>
  <VForm style="margin-top: 20px">
    <VFormItem label="圆角尺寸">
      <DemoValue v-model:value="radiusRef" />
    </VFormItem>
  </VForm>
  <DemoBasic :radius="radiusRef" />
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const radiusRef = ref(4);
</script>
