<template>
  <VRadioGroup
    v-model:value="labelPosition"
    :items="labelPositionItems"
    type="btn"
  />
  <DemoFormBasic
    :label-position="labelPosition"
    class="vui-mt-10"
  />
</template>

<script setup>
import { ref } from 'vue';
import DemoFormBasic from './basic.vue';

const labelPosition = ref('top');
const labelPositionItems = ['left', 'right', 'top'];
</script>
