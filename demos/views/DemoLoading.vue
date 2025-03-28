<!-- 加载状态 -->
<template>
  <DemoCard title="基础用法">
    <MxLoading />
  </DemoCard>
  <DemoCard title="自定义图标">
    <MxLoading :icon="IconLoading" />
  </DemoCard>
  <DemoCard title="自定义文本">
    <MxLoading label="加载中..." />
  </DemoCard>
</template>

<script setup>
import IconLoading from '@/icons/loading2.svg?component';
</script>
