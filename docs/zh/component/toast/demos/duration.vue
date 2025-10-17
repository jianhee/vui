<template>
  <DemoSpace flex>
    <VButton
      v-for="duration in durations"
      :key="duration.value"
      @click="openToast(duration)"
    >
      {{ duration.label }}
    </VButton>
  </DemoSpace>
</template>

<script setup>
import { toast } from 'vui/plugins';

// 打开
const openToast = duration => {
  toast({
    message: duration.label,
    type: 'success',
    duration: duration.value
  });
};

// 显示时间
const durations = [
  { label: '5000ms 后关闭', value: 5000 },
  { label: '3000ms 后关闭（默认）', value: 3000 },
  { label: '1000ms 后关闭', value: 1000 },
  { label: '0ms（不自动关闭）', value: 0 }
];
</script>
