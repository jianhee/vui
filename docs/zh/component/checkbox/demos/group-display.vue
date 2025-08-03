<template>
  <DemoView>
    <template #content>
      <DemoBasic :option-inline="isInline" />
    </template>

    <template #props>
      <DemoViewBoolean code="optionInline|optionBlock">
        <VSwitch
          v-model:checked="isInline"
          inactive-text="块级模式"
          active-text="行内模式"
        />
      </DemoViewBoolean>
    </template>
  </DemoView>
</template>

<script setup>
import { ref } from 'vue';
import DemoBasic from './group.vue';

const isInline = ref(true);
</script>
