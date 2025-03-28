<!-- 加载状态 -->
<template>
  <DemoCard title="基础用法">
    <MxLoading />
  </DemoCard>
  <DemoCard title="自定义图标">
    <MxLoading :icon="IconLoading" />
  </DemoCard>
  <DemoCard title="自定义文本">
    <MxLoading text="加载中..." />
  </DemoCard>
  <DemoCard title="不显示文本">
    <MxLoading hide-text />
  </DemoCard>
</template>

<script setup>
import IconLoading from '@/icons/loading2.svg?component';
</script>
