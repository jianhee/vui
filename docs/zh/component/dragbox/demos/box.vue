<template>
  <VDragbox
    v-model:left="leftRef"
    v-model:top="topRef"
    v-model:width="widthRef"
    v-model:height="heightRef"
    :enabled="isEnabled"
    movable
    resizable
    :min-width="100"
    :min-height="100"
    class="demo-dragbox"
  >
    <VForm>
      <VFormItem label="操作">移动+缩放</VFormItem>
      <VFormItem label="是否启用">
        <VSwitch
          v-model:checked="isEnabled"
          active-text="启用组件"
        />
      </VFormItem>
      <VFormItem label="绑定值">
        <code>v-model:left="{{ leftRef }}"</code>
        <br />
        <code>v-model:top="{{ topRef }}"</code>
        <br />
        <code>v-model:width="{{ widthRef }}"</code>
        <br />
        <code>v-model:height="{{ heightRef }}"</code>
      </VFormItem>
    </VForm>
  </VDragbox>
</template>

<script setup>
import { ref } from 'vue';

const isEnabled = ref(false);
const leftRef = ref(300);
const topRef = ref(100);
const widthRef = ref(360);
const heightRef = ref(260);
</script>
