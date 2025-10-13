<template>
  <VDragbox
    v-model:left="leftRef"
    v-model:top="topRef"
    :enabled="isEnabled"
    :movable="isMovable"
    class="c-demo-dragbox"
  >
    <DemoConfig
      label="是否启用"
      code="enabled"
      label-width="180px"
    >
      <VSwitch v-model:checked="isEnabled" />
    </DemoConfig>
    <DemoConfig
      label="是否可移动"
      code="movable"
      label-width="180px"
    >
      <VSwitch v-model:checked="isMovable" />
    </DemoConfig>
    <slot />
    <DemoConfig
      label="绑定值"
      label-width="180px"
    >
      <code>v-model:left="{{ leftRef }}"</code>
      <br />
      <code>v-model:top="{{ topRef }}"</code>
    </DemoConfig>
  </VDragbox>
</template>

<script setup>
import { ref } from 'vue';

const isEnabled = ref(false);
const isMovable = ref(false);
const leftRef = ref(400);
const topRef = ref(200);
</script>
