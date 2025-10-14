<template>
  <DemoConfig
    label="通过元素自动触发(默认)"
    label-position="top"
  >
    <VComponentMatchRoute
      ref="popoverRef"
      v-bind="props"
      trigger="contextmenu"
    >
      <VButton>contextmenu 触发元素</VButton>
    </VComponentMatchRoute>
  </DemoConfig>
  <DemoConfig
    label="通过方法手动触发"
    label-position="top"
  >
    <DemoSpace flex>
      <VButton @contextmenu.prevent="openPopover()">contextmenu 对齐元素</VButton>
      <VButton @contextmenu.prevent="openPopover">contextmenu 对齐鼠标</VButton>
      <VButton @contextmenu.prevent="closePopover">contextmenu 关闭</VButton>
    </DemoSpace>
  </DemoConfig>
</template>

<script setup>
import { ref } from 'vue';
import { useDemo } from '../composables';

const { props } = useDemo();
const popoverRef = ref(null);
const openPopover = event => popoverRef.value.open(event);
const closePopover = () => popoverRef.value.close();
</script>
