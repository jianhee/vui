<template>
  <DemoSpace flex>
    <DemoBase :description="descText" />
    <DemoBase :description="null" />
  </DemoSpace>
</template>

<script setup>
import DemoBase from './basic.vue';
import { useRouteValid } from '@vp/composables';

// 区分类型
const isEmpty = useRouteValid('empty');
const descText = isEmpty ? '暂无数据' : '加载中...';
</script>
