<template>
  <DemoMove :move-handle="handleRef">
    <DemoConfig
      label="移动手柄"
      code="moveHandle"
      label-width="180px"
    >
      <VButton
        ref="handleRef"
        style="cursor: move"
      >
        手柄
      </VButton>
    </DemoConfig>
  </DemoMove>
</template>

<script setup>
import { useTemplateRef } from 'vue';
import DemoMove from './move.vue';
const handleRef = useTemplateRef('handleRef');
</script>
