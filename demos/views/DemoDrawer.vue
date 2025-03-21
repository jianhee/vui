<!-- 抽屉 -->
<template>
  <DemoCard title="基本用法">
    <DemoRow>
      <MxBtn @click="openDrawer('left')">左侧打开</MxBtn>
      <MxBtn @click="openDrawer('right')">右侧打开</MxBtn>
    </DemoRow>
  </DemoCard>

  <MxDrawer
    v-model:visible="drawerVisible"
    :placement="drawerPlacement"
    title="标题"
  >
    内容
  </MxDrawer>
</template>

<script setup>
import { ref } from 'vue';

const drawerVisible = ref(false);
const drawerPlacement = ref(null);

function openDrawer(placement) {
  drawerVisible.value = true;
  drawerPlacement.value = placement;
}
</script>
