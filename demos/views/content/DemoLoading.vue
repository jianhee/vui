<!-- 加载状态 -->
<template>
  <DemoCard title="基础用法">
    <MxLoading />
  </DemoCard>
  <DemoCard title="自定义图标">
    <template #desc><code>props.icon</code></template>
    <DemoRow flex>
      <MxLoading :icon="IconClose" />
      <MxLoading :icon="{ component: IconLoading, spin: false, size: 100 }" />
    </DemoRow>
  </DemoCard>
  <DemoCard title="自定义文本">
    <template #desc>
      <ol>
        <li><code>props.text</code> 文本内容</li>
        <li><code>props.showText</code> 是否显示文本</li>
      </ol>
    </template>
    <DemoRow flex>
      <MxLoading text="加载中..." />
      <MxLoading :show-text="false" />
    </DemoRow>
  </DemoCard>
</template>

<script setup>
import IconClose from '@/assets/icons/close.svg?component';
import IconLoading from '@/assets/icons/loading2.svg?component';
</script>
