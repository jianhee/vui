<template>
  <DemoSpace flex>
    <div class="demo-state-item">
      <div class="demo-state-title">修改图标</div>
      <component
        :is="StateComponent"
        :icon="IconFace"
      />
    </div>
    <div class="demo-state-item">
      <div class="demo-state-title">修改颜色</div>
      <component
        :is="StateComponent"
        :icon="{ color: 'pink' }"
      />
    </div>
    <div class="demo-state-item">
      <div class="demo-state-title">修改尺寸</div>
      <component
        :is="StateComponent"
        :icon="{ size: 50 }"
      />
    </div>
    <div class="demo-state-item">
      <div class="demo-state-title">修改多项</div>
      <component
        :is="StateComponent"
        :icon="{ component: IconFace, color: 'pink', size: 50 }"
      />
    </div>
  </DemoSpace>
</template>

<script setup>
import { useRoute } from 'vitepress';
import IconFace from '@vp/icons/face.svg?component';

// 区分类型
const route = useRoute();
const isEmpty = /empty/.test(route.path);
const StateComponent = isEmpty ? 'VEmpty' : 'VLoading';
</script>

<style>
.demo-state-item {
  flex: auto;
}
.demo-state-title {
  margin-bottom: 10px;
  text-align: center;
}
</style>
