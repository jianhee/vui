<template>
  <DemoSpace
    flex
    class="c-demo-tables"
  >
    <DemoConfig
      label="默认状态"
      label-position="top-center"
    >
      <VComponentMatchRoute v-bind="props" />
    </DemoConfig>
    <DemoConfig
      label="使用属性自定义"
      label-position="top-center"
    >
      <VComponentMatchRoute
        v-bind="props"
        :empty-props="{ icon: 'face', description: '自定义文案' }"
      />
    </DemoConfig>
    <DemoConfig
      label="使用插槽自定义"
      label-position="top-center"
    >
      <VComponentMatchRoute v-bind="props">
        <template #empty>
          <VIcon name="face" />
          <span>自定义文案</span>
        </template>
      </VComponentMatchRoute>
    </DemoConfig>
  </DemoSpace>
</template>

<script setup>
import { renderProps } from '../composables';
const props = renderProps();
</script>

<style lang="scss">
.c-demo-tables {
  .g-demo-config {
    width: 33%;
    margin-bottom: 0;
  }
  .vui-table {
    height: 200px;
    border: 1px solid var(--demo-border-color-base);
  }
}
</style>
