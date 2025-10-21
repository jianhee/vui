<template>
  <VDragbox
    v-model:width="widthRef"
    v-model:height="heightRef"
    :enabled="isEnabled"
    :resizable="isResizable"
    :min-width="100"
    :min-height="100"
    class="c-demo-dragbox"
    :class="{ 'is-fixed': boxState === 'fixed' && isEnabled }"
  >
    <DemoConfig
      label="盒子状态"
      label-width="180px"
    >
      <VRadioGroup
        v-model:value="boxState"
        :options="['fixed', 'normal']"
        option-type="button"
      />
    </DemoConfig>
    <DemoConfig
      label="是否启用"
      code="enabled"
      label-width="180px"
    >
      <VSwitch v-model:checked="isEnabled" />
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

const boxState = ref('fixed');
const isEnabled = ref(false);
const isResizable = ref(false);
const handlesOptions = ['left', 'right', 'top', 'bottom'];
const handlesRef = ref(handlesOptions);
const widthRef = ref(null);
const heightRef = ref(null);
</script>

<style lang="scss">
.c-demo-dragbox.is-fixed {
  position: fixed !important;
  top: 200px;
  left: 400px;
  z-index: 999;
}
</style>
