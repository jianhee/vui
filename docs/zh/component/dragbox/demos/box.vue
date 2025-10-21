<template>
  <VDragbox
    v-model:left="leftRef"
    v-model:top="topRef"
    v-model:width="widthRef"
    v-model:height="heightRef"
    :enabled="isEnabled"
    :movable="isMovable"
    :resizable="isResizable"
    :min-width="100"
    :min-height="100"
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
    <DemoConfig
      label="是否可缩放"
      code="resizable"
      label-width="180px"
    >
      <VSwitch v-model:checked="isResizable" />
    </DemoConfig>
    <DemoConfig
      label="可缩放手柄"
      code="resizeHandles"
      label-width="180px"
    >
      <VCheckboxGroup
        v-model:value="handlesRef"
        :options="handlesOptions"
        option-type="button"
      />
    </DemoConfig>
    <DemoConfig
      label="绑定值"
      label-width="180px"
    >
      <code>v-model:left="{{ leftRef }}"</code>
      <br />
      <code>v-model:top="{{ topRef }}"</code>
      <br />
      <code>v-model:width="{{ widthRef }}"</code>
      <br />
      <code>v-model:height="{{ heightRef }}"</code>
    </DemoConfig>
    <DemoConfig
      label="最小值"
      label-width="180px"
    >
      <code>minWidth="100"</code>
      <br />
      <code>minHeight="100"</code>
    </DemoConfig>
  </VDragbox>
</template>

<script setup>
import { ref } from 'vue';

const isEnabled = ref(false);
const isMovable = ref(false);
const isResizable = ref(false);
const handlesOptions = ['left', 'right', 'top', 'bottom'];
const handlesRef = ref(handlesOptions);
const leftRef = ref(400);
const topRef = ref(200);
const widthRef = ref(null);
const heightRef = ref(null);
</script>

<style lang="scss">
.c-demo-dragbox {
  padding: 20px;
  overflow: hidden;
  background-color: var(--demo-bg-color-base);
  border: 1px solid var(--demo-border-color-lighter);
  border-radius: 4px;
  box-shadow: var(--demo-box-shadow);
}
</style>
