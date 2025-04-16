<!-- 抽屉 -->
<template>
  <DemoCard title="基本用法">
    <template #desc>
      <DemoRow>
        1.<code>v-model:visible</code> 抽屉显示状态，当前为 <code>{{ isVisible1 }}</code>
      </DemoRow>
      <DemoRow>2.<code>props.title</code> 抽屉标题，<code>slot.default</code> 抽屉内容</DemoRow>
    </template>
    <MxBtn @click="isVisible1 = true">打开抽屉</MxBtn>
  </DemoCard>
  <DemoCard title="更多用法">
    <template #desc>
      <DemoRow>1.<code>props.width</code> 抽屉宽度</DemoRow>
      <DemoRow>2.<code>props.placement</code> 出现位置</DemoRow>
    </template>
    <MxBtn @click="isVisible2 = true">右侧打开</MxBtn>
  </DemoCard>

  <MxDrawer
    v-model:visible="isVisible1"
    title="标题"
  >
    内容
  </MxDrawer>

  <MxDrawer
    v-model:visible="isVisible2"
    title="标题"
    width="600px"
    placement="right"
  >
    内容
  </MxDrawer>
</template>

<script setup>
import { ref } from 'vue';

const isVisible1 = ref(false);
const isVisible2 = ref(false);
</script>
