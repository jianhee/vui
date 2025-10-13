<template>
  <DemoUsage>
    <template #render>
      <DemoBasic :option-inline="isInline" />
    </template>

    <template #config>
      <DemoConfig code="optionInline|optionBlock">
        <VSwitch
          v-model:checked="isInline"
          inactive-text="块级模式"
          active-text="行内模式"
        />
      </DemoConfig>
    </template>
  </DemoUsage>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './group.vue';

const isInline = ref(true);
</script>
