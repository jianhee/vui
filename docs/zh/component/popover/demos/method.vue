<template>
  <DemoViewTop label="默认调用">
    <VPopover
      ref="popoverRef"
      trigger="contextmenu"
      content="弹出框内容"
    >
      <VButton>contextmenu 触发元素</VButton>
    </VPopover>
  </DemoViewTop>
  <DemoViewTop label="方法调用">
    <DemoSpace flex>
      <VButton @contextmenu.prevent="openDropdown()">contextmenu 对齐元素</VButton>
      <VButton @contextmenu.prevent="openDropdown">contextmenu 对齐鼠标</VButton>
      <VButton @contextmenu.prevent="closeDropdown">contextmenu 关闭</VButton>
    </DemoSpace>
  </DemoViewTop>
</template>

<script setup>
import { ref } from 'vue';

const popoverRef = ref(null);
const openDropdown = event => popoverRef.value.open(event);
const closeDropdown = () => popoverRef.value.close();
</script>
