<template>
  <DemoSpace flex>
    <VComponentMatchRoute v-bind="props">
      <VButton>hover 默认插槽（默认）</VButton>
    </VComponentMatchRoute>

    <VButton ref="triggerComponent">hover 外部组件</VButton>
    <VComponentMatchRoute
      v-bind="props"
      :trigger-element="triggerComponent"
    />

    <button ref="triggerElement">hover 外部元素</button>
    <VComponentMatchRoute
      v-bind="props"
      :trigger-element="triggerElement"
    />
  </DemoSpace>
</template>

<script setup>
import { useTemplateRef } from 'vue';
import { useDemo } from '../composables';

const { props } = useDemo();
const triggerComponent = useTemplateRef('triggerComponent');
const triggerElement = useTemplateRef('triggerElement');
</script>
