<template>
  <VDropdown
    :menus="menus"
    @select="writeLog('select', $event)"
  >
    <VButton>下拉菜单</VButton>
  </VDropdown>
</template>

<script setup>
import { writeLog } from '@vp/utils';

const menus = [
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
