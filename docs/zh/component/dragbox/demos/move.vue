<template>
  <VDragbox
    v-model:left="leftRef"
    v-model:top="topRef"
    moveable
    :disabled="isDisabled"
    class="demo-dragbox"
  >
    <VForm>
      <VFormItem label="操作">移动</VFormItem>
      <VFormItem label="当前值">
        <code>v-model:left="{{ leftRef }}"</code>
        <br />
        <code>v-model:top="{{ topRef }}"</code>
      </VFormItem>
      <VFormItem label="切换状态">
        <VSwitch
          v-model:checked="isDisabled"
          active-text="禁用状态"
        />
      </VFormItem>
    </VForm>
  </VDragbox>
</template>

<script setup>
import { ref } from 'vue';

const isDisabled = ref(true);
const leftRef = ref(300);
const topRef = ref(100);
</script>
