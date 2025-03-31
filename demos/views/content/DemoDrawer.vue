<!-- 抽屉 -->
<template>
  <DemoCard title="基本用法">
    <DemoRow>
      <MxBtn @click="openDrawer('left')">左侧打开</MxBtn>
      <MxBtn @click="openDrawer('right')">右侧打开</MxBtn>
    </DemoRow>
  </DemoCard>

  <MxDrawer
    v-model:visible="visibleRef"
    :placement="placementRef"
    title="标题"
  >
    内容
  </MxDrawer>
</template>

<script setup>
import { ref } from 'vue';

const visibleRef = ref(false);
const placementRef = ref(null);

function openDrawer(placement) {
  visibleRef.value = true;
  placementRef.value = placement;
}
</script>
