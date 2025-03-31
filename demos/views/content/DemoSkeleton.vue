<!-- 骨架屏 -->
<template>
  <DemoCard title="基本用法">
    <MxSkeleton
      width="50%"
      center
    />
    <MxSkeleton
      aspect-ratio="16/9"
      center
      border
    />
    <MxSkeleton
      :rows="3"
      border
    />
    <MxSkeleton
      :rows="3"
      border
    />
    <MxSkeleton :rows="3" />
  </DemoCard>
</template>
