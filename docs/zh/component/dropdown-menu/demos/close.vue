<template>
  <DemoSpace flex>
    <VDropdownMenu :items="items">
      <VButton>点击菜单项可以关闭（默认）</VButton>
    </VDropdownMenu>
    <VDropdownMenu
      :items="items"
      :close-on-click-dropdown="false"
    >
      <VButton>点击菜单项不会关闭</VButton>
    </VDropdownMenu>
  </DemoSpace>
</template>

<script setup>
import { items } from '../composables';
</script>
