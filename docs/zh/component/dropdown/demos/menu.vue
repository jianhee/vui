<template>
  <VDropdown :menus="menuItems">
    <VBtn>下拉菜单</VBtn>
  </VDropdown>
</template>

<script setup>
const menuItems = [
  // Object
  { label: '文本1' },
  { title: '文本2', divider: true },
  // 图标
  { label: '图标1', icon: 'close' },
  { label: '图标2', icon: 'search', divider: true },
  // Number|String
  '字符串'
];
</script>
