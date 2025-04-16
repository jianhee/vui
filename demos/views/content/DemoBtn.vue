<!-- 按钮 -->
<template>
  <DemoCard title="类型">
    <DemoRow>
      <MxBtn>default</MxBtn>
      <MxBtn type="primary">primary</MxBtn>
    </DemoRow>
  </DemoCard>
  <DemoCard title="尺寸">
    <DemoRow>
      <MxBtn size="small"> small </MxBtn>
      <MxBtn>medium</MxBtn>
      <MxBtn size="large"> large </MxBtn>
    </DemoRow>
  </DemoCard>
  <DemoCard title="铺满状态">
    <MxBtn block>default</MxBtn>
    <MxBtn
      type="primary"
      block
    >
      primary
    </MxBtn>
  </DemoCard>
  <DemoCard title="禁用状态">
    <DemoRow>
      <MxBtn disabled>default</MxBtn>
      <MxBtn
        type="primary"
        disabled
      >
        primary
      </MxBtn>
    </DemoRow>
  </DemoCard>
  <DemoCard title="加载状态">
    <DemoRow>
      <MxBtn loading>default</MxBtn>
      <MxBtn
        type="primary"
        loading
      >
        primary
      </MxBtn>
    </DemoRow>
  </DemoCard>
  <DemoCard title="前置图标">
    <DemoRow>
      <MxBtn icon="close">图标 name</MxBtn>
      <MxBtn :icon="IconClose">图标 component</MxBtn>
      <MxBtn :icon="{ name: 'close' }">图标 props.name</MxBtn>
      <MxBtn :icon="{ component: IconClose }">图标 props.component</MxBtn>
    </DemoRow>
  </DemoCard>
</template>

<script setup>
import IconClose from '@/assets/icons/close.svg?component';
</script>
