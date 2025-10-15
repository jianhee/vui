<template>
  <DemoSpace flex>
    <VComponentMatchRoute :description="null" />
    <VComponentMatchRoute :description="descText" />
  </DemoSpace>
</template>

<script setup>
import { validateRoutePath } from '@vp/composables';

// 区分类型
const isEmpty = validateRoutePath('empty');
const descText = isEmpty ? '暂无数据' : '加载中...';
</script>
