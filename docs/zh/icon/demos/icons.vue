<template>
  <div class="i-demo-view">
    <div
      v-for="(component, componentName) in components"
      :key="componentName"
      class="i-demo-item"
    >
      <VIcon :component="component" />
      <div class="i-demo-name">{{ componentName }}</div>
    </div>
  </div>
</template>

<script setup>
import { getComponents } from 'vui/composables';

// 获取全部组件
const modulesMap = import.meta.glob('../../../../packages/icons/*.vue', { eager: true });
const components = getComponents(modulesMap);
</script>

<style lang="scss">
.i-demo {
  &-view {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    border-top: 1px solid var(--demo-border-color-base);
    border-left: 1px solid var(--demo-border-color-base);
  }
  &-item {
    --vui-icon-size: 20px;

    padding: 16px 0;
    text-align: center;
    border-right: 1px solid var(--demo-border-color-base);
    border-bottom: 1px solid var(--demo-border-color-base);
  }
  &-name {
    margin-top: 2px;
    font-size: 14px;
  }
}
</style>
