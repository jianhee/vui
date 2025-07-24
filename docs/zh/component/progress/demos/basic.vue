<template>
  <VForm class="demo-toolbar">
    <VFormItem label="静态进度">
      <VProgress
        class="demo-progress"
        :percent="50"
      />
    </VFormItem>
    <VFormItem label="动态进度">
      <VProgress
        class="demo-progress"
        :percent="valueRef"
      />
    </VFormItem>
  </VForm>
</template>

<script setup>
import { ref } from 'vue';

const valueRef = ref(50);

// 动态进度
setInterval(() => {
  if (valueRef.value < 100) {
    valueRef.value++;
  } else {
    valueRef.value = 0;
  }
}, 100);
</script>

<style>
.demo-progress {
  min-height: 32px;
}
.demo-progress .vui-progress-rail {
  max-width: var(--demo-filed-width);
}
</style>
