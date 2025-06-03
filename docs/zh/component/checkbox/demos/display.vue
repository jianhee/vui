<template>
  <VForm>
    <VFormFiled label="单个选项">
      <VSwitch
        v-model:checked="isBlock"
        active-text="块级模式"
      />
      <DemoOption :block="isBlock" />
    </VFormFiled>
    <VFormFiled label="选项组">
      <VSwitch
        v-model:checked="isInline"
        active-text="行内模式"
      />
      <DemoGroup :option-inline="isInline" />
    </VFormFiled>
  </VForm>
</template>

<script setup>
import { ref } from 'vue';
import DemoOption from './option.vue';
import DemoGroup from './group.vue';

const isBlock = ref(false);
const isInline = ref(false);
</script>
