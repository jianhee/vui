<!-- 按钮 -->
<template>
  <DemoCard title="类型">
    <template #desc><code>props.type</code></template>
    <MxBtn>default</MxBtn>
    <MxBtn type="primary">primary</MxBtn>
  </DemoCard>
  <DemoCard title="尺寸">
    <template #desc><code>props.size</code></template>
    <MxBtn size="small"> small </MxBtn>
    <MxBtn>medium</MxBtn>
    <MxBtn size="large"> large </MxBtn>
  </DemoCard>
  <DemoCard title="铺满状态">
    <template #desc><code>props.block</code></template>
    <MxBtn block>default</MxBtn>
    <MxBtn
      type="primary"
      block
    >
      primary
    </MxBtn>
  </DemoCard>
  <DemoCard title="禁用状态">
    <template #desc><code>props.disabled</code></template>
    <MxBtn disabled>default</MxBtn>
    <MxBtn
      type="primary"
      disabled
    >
      primary
    </MxBtn>
  </DemoCard>
  <DemoCard title="加载状态">
    <template #desc><code>props.loading</code></template>
    <MxBtn loading>default</MxBtn>
    <MxBtn
      type="primary"
      loading
    >
      primary
    </MxBtn>
  </DemoCard>
  <DemoCard title="前置图标">
    <template #desc><code>props.icon</code> MxIcon 组件的 name/component/props</template>
    <MxBtn icon="close">传入 name</MxBtn>
    <MxBtn :icon="IconClose">传入 component</MxBtn>
    <MxBtn :icon="{ name: 'close' }">传入 { name }</MxBtn>
    <MxBtn :icon="{ component: IconClose }">传入 { component }</MxBtn>
  </DemoCard>
</template>

<script setup>
import IconClose from '@/assets/icons/close.svg?component';
</script>
