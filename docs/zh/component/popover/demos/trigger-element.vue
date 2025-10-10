<template>
  <DemoSpace flex>
    <VPopover content="弹出框内容">
      <VButton>hover 使用插槽定义触发元素（默认）</VButton>
    </VPopover>

    <VButton ref="triggerElement">hover 使用属性定义触发元素</VButton>
    <VPopover
      content="弹出框内容"
      :trigger-element="triggerElement"
    />
  </DemoSpace>
</template>

<script setup>
import { useTemplateRef } from 'vue';
const triggerElement = useTemplateRef('triggerElement');
</script>
