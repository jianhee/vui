<template>
  <VDragbox
    v-model:left="leftRef"
    v-model:top="topRef"
    :enabled="isEnabled"
    movable
    class="demo-dragbox"
  >
    <VForm>
      <VFormItem label="操作">移动</VFormItem>
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
      </VFormItem>
    </VForm>
  </VDragbox>
</template>

<script setup>
import { ref } from 'vue';

const isEnabled = ref(false);
const leftRef = ref(300);
const topRef = ref(100);
</script>
