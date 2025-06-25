<template>
  <!-- 定位元素 -->
  <VDragbox
    v-model:left="leftRef1"
    v-model:top="topRef1"
    v-model:width="widthRef1"
    v-model:height="heightRef1"
    :enabled="isEnabled1"
    resizable
    :resize-handles="handlesRef1"
    :min-width="100"
    :min-height="100"
    class="demo-dragbox"
    :class="{ 'demo-dragbox-fixed': isEnabled1 }"
  >
    <VForm>
      <VFormItem label="操作">定位元素缩放</VFormItem>
      <VFormItem label="是否启用">
        <VSwitch
          v-model:checked="isEnabled1"
          active-text="启用组件"
        />
      </VFormItem>
      <VFormItem label="切换手柄">
        <VCheckboxGroup
          v-model:value="handlesRef1"
          :options="handlesOptions1"
          option-type="button"
        />
      </VFormItem>
      <VFormItem label="绑定值">
        <code>v-model:left="{{ leftRef1 }}"</code>
        <br />
        <code>v-model:top="{{ topRef1 }}"</code>
        <br />
        <code>v-model:width="{{ widthRef1 }}"</code>
        <br />
        <code>v-model:height="{{ heightRef1 }}"</code>
      </VFormItem>
    </VForm>
  </VDragbox>

  <br />

  <!-- 非定位元素 -->
  <VDragbox
    v-model:width="widthRef2"
    v-model:height="heightRef2"
    :enabled="isEnabled2"
    resizable
    :resize-handles="handlesRef2"
    :min-width="100"
    :min-height="100"
    class="demo-dragbox"
  >
    <VForm>
      <VFormItem label="操作">非定位元素缩放</VFormItem>
      <VFormItem label="是否启用">
        <VSwitch
          v-model:checked="isEnabled2"
          active-text="启用组件"
        />
      </VFormItem>
      <VFormItem label="切换手柄">
        <VCheckboxGroup
          v-model:value="handlesRef2"
          :options="handlesOptions2"
          option-type="button"
        />
      </VFormItem>
      <VFormItem label="绑定值">
        <code>v-model:width="{{ widthRef2 }}"</code>
        <br />
        <code>v-model:height="{{ heightRef2 }}"</code>
      </VFormItem>
    </VForm>
  </VDragbox>
</template>

<script setup>
import { ref } from 'vue';

// 定位元素
const isEnabled1 = ref(false);
const handlesRef1 = ref(undefined);
const handlesOptions1 = ['left', 'right', 'top', 'bottom'];
const leftRef1 = ref(300);
const topRef1 = ref(100);
const widthRef1 = ref(400);
const heightRef1 = ref(400);

// 非定位元素
const isEnabled2 = ref(false);
const handlesRef2 = ref(undefined);
const handlesOptions2 = ['right', 'bottom'];
const widthRef2 = ref(400);
const heightRef2 = ref(260);
</script>

<style>
.demo-dragbox {
  padding: 20px;
  overflow: hidden;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--component-preview-border);
  border-radius: 4px;
  box-shadow: 0 0 10px var(--component-preview-border);
}
.demo-dragbox-fixed {
  position: fixed !important;
  z-index: 999;
}
</style>
