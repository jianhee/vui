<template>
  <div class="demo-icons-view">
    <div
      v-for="(component, componentName) in components"
      :key="componentName"
      class="demo-icons-item"
    >
      <VIcon :icon="component" />
      <div class="demo-icons-name">{{ componentName }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue';
import { getComponents } from 'vui/composables';

// 导入组件
const modules = import.meta.glob('../../../packages/icons/*.vue', { eager: true });
const components = getComponents(modules);

// 注册组件
Object.entries(components).forEach(([componentName, component]) => {
  defineComponent({
    components: {
      [componentName]: component
    }
  });
});
</script>

<style lang="scss">
.demo-icons {
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
