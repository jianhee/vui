<template>
  <VMenu
    class="demo-menu"
    :items="items"
    @click="writeLog('click', $event)"
  />
</template>

<script setup>
import { writeLog } from '@vp/utils';

const items = [
  // Object
  { label: '文本1' },
  { title: '文本2', divider: true },
  // 图标
  { label: '图标1', icon: 'close' },
  { label: '图标2', icon: 'search', divider: true },
  // string|number
  '字符串'
];
</script>

<style>
.demo-menu {
  width: var(--demo-filed-width);
}
</style>
