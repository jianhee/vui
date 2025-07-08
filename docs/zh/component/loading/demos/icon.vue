<template>
  <DemoSpace flex>
    <div class="demo-loading-item">
      <div class="demo-loading-title">修改图标</div>
      <VLoading :icon="IconFace" />
    </div>
    <div class="demo-loading-item">
      <div class="demo-loading-title">修改颜色</div>
      <VLoading :icon="{ color: 'red' }" />
    </div>
    <div class="demo-loading-item">
      <div class="demo-loading-title">修改尺寸</div>
      <VLoading :icon="{ size: 50 }" />
    </div>
    <div class="demo-loading-item">
      <div class="demo-loading-title">修改多项</div>
      <VLoading :icon="{ component: IconFace, color: 'red', size: 50 }" />
    </div>
  </DemoSpace>
</template>

<script setup>
import IconFace from '@vp/icons/face.svg?component';
</script>

<style>
.demo-loading-item {
  flex: auto;
}
.demo-loading-title {
  margin-bottom: 10px;
  text-align: center;
}
</style>
