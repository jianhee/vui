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
