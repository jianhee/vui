<template>
  <VDragbox
    v-model:width="widthRef"
    v-model:height="heightRef"
    :enabled="isEnabled"
    :resizable="isResizable"
    :min-width="100"
    :min-height="100"
    class="demo-dragbox"
    :class="{ 'is-fixed': isEnabled }"
  >
    <DemoViewLeft
      label="是否启用"
      code="enabled"
      label-width="200"
    >
      <VSwitch v-model:checked="isEnabled" />
    </DemoViewLeft>
    <DemoViewLeft
      label="是否可缩放"
      code="resizable"
      label-width="200"
    >
      <VSwitch v-model:checked="isResizable" />
    </DemoViewLeft>
    <DemoViewLeft
      label="可缩放手柄"
      code="resizeHandles"
      label-width="200"
    >
      <VCheckboxGroup
        v-model:value="handlesRef"
        :options="handlesOptions"
        option-type="button"
      />
    </DemoViewLeft>
    <DemoViewLeft
      label="绑定值"
      label-width="200"
    >
      <code>v-model:width="{{ widthRef }}"</code>
      <br />
      <code>v-model:height="{{ heightRef }}"</code>
    </DemoViewLeft>
    <DemoViewLeft
      label="最小值"
      label-width="200"
    >
      <code>minWidth="100"</code>
      <br />
      <code>minHeight="100"</code>
    </DemoViewLeft>
  </VDragbox>
</template>

<script setup>
import { ref } from 'vue';

const isEnabled = ref(false);
const isResizable = ref(false);
const handlesOptions = ['left', 'right', 'top', 'bottom'];
const handlesRef = ref(['left', 'right', 'top', 'bottom']);
const widthRef = ref(null);
const heightRef = ref(null);
</script>

<style lang="scss">
.is-fixed:not(.is-normal) {
  position: fixed !important;
  top: 200px;
  left: 400px;
  z-index: 999;
}
</style>
