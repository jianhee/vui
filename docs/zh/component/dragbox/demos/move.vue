<template>
  <VDragbox
    v-model:left="leftRef"
    v-model:top="topRef"
    :enabled="isEnabled"
    :movable="isMovable"
    class="demo-dragbox"
  >
    <DemoViewLeft
      label="是否启用"
      code="enabled"
      label-width="200"
    >
      <VSwitch v-model:checked="isEnabled" />
    </DemoViewLeft>
    <DemoViewLeft
      label="是否可移动"
      code="movable"
      label-width="200"
    >
      <VSwitch v-model:checked="isMovable" />
    </DemoViewLeft>
    <slot />
    <DemoViewLeft
      label="绑定值"
      label-width="200"
    >
      <code>v-model:left="{{ leftRef }}"</code>
      <br />
      <code>v-model:top="{{ topRef }}"</code>
    </DemoViewLeft>
  </VDragbox>
</template>

<script setup>
import { ref } from 'vue';

const isEnabled = ref(false);
const isMovable = ref(false);
const leftRef = ref(400);
const topRef = ref(200);
</script>

<style lang="scss">
.demo-dragbox {
  padding: 20px;
  overflow: hidden;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--component-preview-border);
  border-radius: 4px;
  box-shadow: 0 0 10px var(--component-preview-border);
}
</style>
