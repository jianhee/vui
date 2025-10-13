<template>
  <DemoUsage>
    <template #render>
      <DemoBasic :block="isBlock" />
    </template>

    <template #config>
      <DemoConfig code="inline|block">
        <VSwitch
          v-model:checked="isBlock"
          inactive-text="行内模式"
          active-text="块级模式"
        />
      </DemoConfig>
    </template>
  </DemoUsage>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './option.vue';

const isBlock = ref(true);
</script>
