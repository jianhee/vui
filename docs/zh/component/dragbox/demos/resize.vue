<template>
  <!-- 例1 -->
  <DemoSpace>
    <VSwitch
      v-model:checked="isDisabled1"
      active-text="禁用状态"
    />
  </DemoSpace>
  <VDragbox
    v-model:width="widthRef1"
    v-model:height="heightRef1"
    resizable
    :min-width="50"
    :min-height="50"
    :disabled="isDisabled1"
    class="demo-dragbox"
  >
    非定位元素缩放
    <br />
    只支持 <code>`right, bottom`</code> 两个轴
    <br />
    <code>v-model:width="{{ widthRef1 }}"</code>
    <br />
    <code>v-model:height="{{ heightRef1 }}"</code>
  </VDragbox>

  <!-- 例2 -->
  <DemoSpace>
    <VSwitch
      v-model:checked="isDisabled2"
      active-text="禁用状态"
    />
  </DemoSpace>
  <VDragbox
    v-model:left="leftRef2"
    v-model:top="topRef2"
    v-model:width="widthRef2"
    v-model:height="heightRef2"
    resizable
    :min-width="50"
    :min-height="50"
    :disabled="isDisabled2"
    class="demo-dragbox"
    :class="{ 'demo-dragbox-fixed': !isDisabled2 }"
  >
    定位元素缩放
    <br />
    支持 <code>`left, right, top, bottom`</code> 四个轴
    <br />
    <code>v-model:left="{{ leftRef2 }}"</code>
    <br />
    <code>v-model:top="{{ topRef2 }}"</code>
    <br />
    <code>v-model:width="{{ widthRef2 }}"</code>
    <br />
    <code>v-model:height="{{ heightRef2 }}"</code>
  </VDragbox>

  <!-- 例3 -->
  <DemoSpace>
    <VSwitch
      v-model:checked="isDisabled3"
      active-text="禁用状态"
    />
  </DemoSpace>
  <VDragbox
    v-model:left="leftRef3"
    v-model:top="topRef3"
    v-model:width="widthRef3"
    v-model:height="heightRef3"
    resize-handles="right"
    :min-width="50"
    :min-height="50"
    :disabled="isDisabled3"
    class="demo-dragbox"
    :class="{ 'demo-dragbox-fixed': !isDisabled3 }"
  >
    定位元素缩放
    <br />
    自定义 <code>`right`</code> 轴
    <br />
    <code>v-model:left="{{ leftRef3 }}"</code>
    <br />
    <code>v-model:top="{{ topRef3 }}"</code>
    <br />
    <code>v-model:width="{{ widthRef3 }}"</code>
    <br />
    <code>v-model:height="{{ heightRef3 }}"</code>
  </VDragbox>
</template>

<script setup>
import { ref } from 'vue';

// 例1
const isDisabled1 = ref(true);
const widthRef1 = ref(300);
const heightRef1 = ref(200);

// 例2
const isDisabled2 = ref(true);
const leftRef2 = ref(300);
const topRef2 = ref(100);
const widthRef2 = ref(300);
const heightRef2 = ref(200);

// 例3
const isDisabled3 = ref(true);
const leftRef3 = ref(300);
const topRef3 = ref(100);
const widthRef3 = ref(300);
const heightRef3 = ref(200);
</script>

<style>
.demo-dragbox-fixed {
  position: fixed !important;
  z-index: 999;
}
</style>
