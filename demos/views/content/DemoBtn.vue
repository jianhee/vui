<!-- 按钮 -->
<template>
  <DemoCard title="类型">
    <template #desc><code>props.type</code></template>
    <DemoRow flex>
      <MxBtn>default</MxBtn>
      <MxBtn type="primary">primary</MxBtn>
    </DemoRow>
  </DemoCard>
  <DemoCard title="尺寸">
    <template #desc><code>props.size</code></template>
    <DemoRow flex>
      <MxBtn size="small">small</MxBtn>
      <MxBtn>medium</MxBtn>
      <MxBtn size="large">large</MxBtn>
    </DemoRow>
  </DemoCard>
  <DemoCard title="铺满状态">
    <template #desc><code>props.block</code></template>
    <DemoRow>
      <MxBtn block>default</MxBtn>
    </DemoRow>
    <DemoRow>
      <MxBtn
        type="primary"
        block
      >
        primary
      </MxBtn>
    </DemoRow>
  </DemoCard>
  <DemoCard title="禁用状态">
    <template #desc><code>props.disabled</code></template>
    <DemoRow flex>
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
    <template #desc><code>props.loading</code></template>
    <DemoRow flex>
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
    <template #desc><code>props.icon</code> MxIcon 组件的 name/component/props</template>
    <DemoRow flex>
      <MxBtn icon="close">传入 name</MxBtn>
      <MxBtn :icon="IconClose">传入 component</MxBtn>
      <MxBtn :icon="{ name: 'close' }">传入 { name }</MxBtn>
      <MxBtn :icon="{ component: IconClose }">传入 { component }</MxBtn>
    </DemoRow>
  </DemoCard>
</template>

<script setup>
import IconClose from '@/assets/icons/close.svg?component';
</script>
