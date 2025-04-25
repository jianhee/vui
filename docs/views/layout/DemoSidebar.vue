<!-- 侧边栏 -->
<template>
  <div class="demo-sidebar">
    <RouterLink
      v-for="item in navItems"
      :key="item.name"
      :to="`${item.name}?test=测试测试`"
      class="demo-sidebar-item"
      active-class="demo-sidebar-item-active"
    >
      {{ item.title }}
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import navItems from '@/assets/data/navs.js';
</script>

<style lang="scss">
.demo-sidebar {
  flex: none;
  width: 200px;
  height: 100%;
  padding: 40px 0;
  border-right: 1px solid var(--demo-border-color);
  &-item {
    display: block;
    height: 40px;
    padding: 0 20px;
    line-height: 40px;
    color: var(--demo-sidebar-text-color);
    &:hover,
    &-active {
      color: var(--demo-sidebar-active-text-color);
      background-color: var(--demo-sidebar-active-bg-color);
    }
  }
}
</style>
