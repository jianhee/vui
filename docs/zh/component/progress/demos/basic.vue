<template>
  <div class="demo-progresses">
    <DemoViewLeft label="静态进度">
      <VProgress :percent="50" />
    </DemoViewLeft>

    <DemoViewLeft label="动态进度">
      <VProgress :percent="valueRef" />
    </DemoViewLeft>
  </div>
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
.demo-progresses .vui-progress {
  min-height: 32px;
}
.demo-progresses .vui-progress-rail {
  max-width: var(--demo-filed-width);
}
</style>
