<template>
  <DemoDesc :items="['radius']" />
  <VForm>
    <VFormItem label="圆角尺寸">
      <DemoValue v-model:value="radiusRef" />
      <DemoBasic :radius="radiusRef" />
    </VFormItem>
  </VForm>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const radiusRef = ref(4);
</script>
