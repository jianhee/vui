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
    v-model:width="widthRef"
    v-model:height="heightRef"
    moveable
    resizable
    :min-width="50"
    :min-height="50"
    :disabled="isDisabled"
    class="demo-dragbox"
  >
    移动+缩放
    <br />
    <code>v-model:left="{{ leftRef }}"</code>
    <br />
    <code>v-model:top="{{ topRef }}"</code>
    <br />
    <code>v-model:width="{{ widthRef }}"</code>
    <br />
    <code>v-model:height="{{ heightRef }}"</code>
  </VDragbox>
</template>

<script setup>
import { ref } from 'vue';

const isDisabled = ref(true);
const leftRef = ref(300);
const topRef = ref(100);
const widthRef = ref(300);
const heightRef = ref(200);
</script>
