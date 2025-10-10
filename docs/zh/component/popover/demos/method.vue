<template>
  <DemoViewTop label="默认通过元素自动触发">
    <VPopover
      ref="popoverRef"
      trigger="contextmenu"
      content="弹出框内容"
    >
      <VButton>contextmenu 触发元素</VButton>
    </VPopover>
  </DemoViewTop>
  <DemoViewTop label="通过方法手动触发">
    <DemoSpace flex>
      <VButton @contextmenu.prevent="openPopover()">contextmenu 对齐元素</VButton>
      <VButton @contextmenu.prevent="openPopover">contextmenu 对齐鼠标</VButton>
      <VButton @contextmenu.prevent="closePopover">contextmenu 关闭</VButton>
    </DemoSpace>
  </DemoViewTop>
</template>

<script setup>
import { ref } from 'vue';

const popoverRef = ref(null);
const openPopover = event => popoverRef.value.open(event);
const closePopover = () => popoverRef.value.close();
</script>
