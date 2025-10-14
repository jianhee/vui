<template>
  <DemoSpace flex>
    <VComponentMatchRoute v-bind="props">
      <VButton>hover 使用插槽定义触发元素（默认）</VButton>
    </VComponentMatchRoute>

    <VButton ref="triggerElement">hover 使用属性定义触发元素</VButton>
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
const triggerElement = useTemplateRef('triggerElement');
</script>
