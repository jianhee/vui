<!-- 抽屉 -->
<template>
  <DemoCard title="基本用法">
    <DemoRow>
      <MxBtn @click="openDrawer('left')">左侧打开</MxBtn>
      <MxBtn @click="openDrawer('right')">右侧打开</MxBtn>
    </DemoRow>
  </DemoCard>

  <MxDrawer
    v-model:visible="isVisible"
    :placement="currentPlacement"
    title="标题"
  >
    内容
  </MxDrawer>
</template>

<script setup>
import { ref } from 'vue';

// 抽屉
const isVisible = ref(false);
const currentPlacement = ref(null);

// 打开抽屉
function openDrawer(newVal) {
  isVisible.value = true;
  currentPlacement.value = newVal;
}
</script>
