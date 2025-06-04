<template>
  <!-- 定位元素 -->
  <VDragbox
    v-model:left="leftRef1"
    v-model:top="topRef1"
    v-model:width="widthRef1"
    v-model:height="heightRef1"
    resizable
    :resize-handles="handles1"
    :min-width="100"
    :min-height="100"
    :disabled="isDisabled1"
    class="demo-dragbox"
    :class="{ 'demo-dragbox-fixed': !isDisabled1 }"
  >
    <VForm>
      <VFormItem label="操作">定位元素缩放</VFormItem>
      <VFormItem label="当前值">
        <code>v-model:left="{{ leftRef1 }}"</code>
        <br />
        <code>v-model:top="{{ topRef1 }}"</code>
        <br />
        <code>v-model:width="{{ widthRef1 }}"</code>
        <br />
        <code>v-model:height="{{ heightRef1 }}"</code>
      </VFormItem>
      <VFormItem label="切换状态">
        <VSwitch
          v-model:checked="isDisabled1"
          active-text="禁用状态"
        />
      </VFormItem>
      <VFormItem label="切换手柄">
        <VCheckboxGroup
          v-model:value="handles1"
          :options="['left', 'right', 'top', 'bottom']"
          option-type="button"
        />
      </VFormItem>
    </VForm>
  </VDragbox>

  <br />

  <!-- 非定位元素 -->
  <VDragbox
    v-model:width="widthRef2"
    v-model:height="heightRef2"
    resizable
    :resize-handles="handles2"
    :min-width="100"
    :min-height="100"
    :disabled="isDisabled2"
    class="demo-dragbox"
  >
    <VForm>
      <VFormItem label="操作">非定位元素缩放</VFormItem>
      <VFormItem label="当前值">
        <code>v-model:width="{{ widthRef2 }}"</code>
        <br />
        <code>v-model:height="{{ heightRef2 }}"</code>
      </VFormItem>
      <VFormItem label="切换状态">
        <VSwitch
          v-model:checked="isDisabled2"
          active-text="禁用状态"
        />
      </VFormItem>
      <VFormItem label="切换手柄">
        <VCheckboxGroup
          v-model:value="handles2"
          :options="['right', 'bottom']"
          option-type="button"
        />
      </VFormItem>
    </VForm>
  </VDragbox>
</template>

<script setup>
import { ref } from 'vue';

// 定位元素
const isDisabled1 = ref(true);
const handles1 = ref(undefined);
const leftRef1 = ref(300);
const topRef1 = ref(100);
const widthRef1 = ref(400);
const heightRef1 = ref(400);

// 非定位元素
const isDisabled2 = ref(true);
const handles2 = ref(undefined);
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
