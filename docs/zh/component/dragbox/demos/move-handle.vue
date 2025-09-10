<template>
  <DemoMove :move-handle="handleRef">
    <DemoViewLeft
      label="移动手柄"
      code="moveHandle"
      label-width="200"
    >
      <VButton
        ref="handleRef"
        style="cursor: move"
      >
        手柄
      </VButton>
    </DemoViewLeft>
  </DemoMove>
</template>

<script setup>
import { useTemplateRef } from 'vue';
import DemoMove from './move.vue';
const handleRef = useTemplateRef('handleRef');
</script>
