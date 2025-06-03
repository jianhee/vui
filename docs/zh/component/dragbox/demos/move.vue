<template>
  <DemoSpace>
    <VSwitch
      v-model:checked="isDisabled"
      active-text="禁用状态"
    />
  </DemoSpace>

  <VDragbox
    v-model:left="leftRef"
    v-model:top="topRef"
    moveable
    :disabled="isDisabled"
    class="demo-dragbox"
  >
    移动
    <br />
    <code>v-model:left="{{ leftRef }}"</code>
    <br />
    <code>v-model:top="{{ topRef }}"</code>
  </VDragbox>
</template>

<script setup>
import { ref } from 'vue';

const isDisabled = ref(true);
const leftRef = ref(300);
const topRef = ref(100);
</script>
