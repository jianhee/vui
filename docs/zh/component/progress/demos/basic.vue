<template>
  <div class="c-demo-progresses">
    <DemoConfig
      label="静态进度"
      label-width="4em"
    >
      <VProgress :percent="50" />
    </DemoConfig>

    <DemoConfig
      label="动态进度"
      label-width="4em"
    >
      <VProgress :percent="valueRef" />
    </DemoConfig>
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
.c-demo-progresses .vui-progress {
  max-width: var(--demo-filed-width);
  min-height: 32px;
}
</style>
