<template>
  <DemoSpace>
    <VSwitch
      v-model:checked="inInline"
      active-text="行内模式"
    />
  </DemoSpace>

  <DemoBasic :filed-inline="inInline" />
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './basic.vue';

const inInline = ref(true);
</script>
