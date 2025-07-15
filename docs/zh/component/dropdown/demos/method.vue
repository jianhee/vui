<template>
  <DemoSpace flex>
    <VButton @click="openDropdown($event, 0)">点击左键调用方法</VButton>
    <VButton @contextmenu.prevent="openDropdown($event, 1)">点击右键调用方法</VButton>
  </DemoSpace>

  <!-- 下拉框 -->
  <VDropdown
    v-for="(trigger, index) in triggers"
    ref="dropdownElRef"
    :key="trigger"
    :trigger="trigger"
    class="demo-dropdown"
    @open="writeLog('open')"
    @close="writeLog('close')"
  >
    <template #dropdown>
      <VButton @click="closeDropdown(index)">点击关闭</VButton>
    </template>
  </VDropdown>
</template>

<script setup>
import { useTemplateRef } from 'vue';
import { writeLog } from '@vp/utils';

const triggers = ['click', 'contextmenu'];
const dropdownElRef = useTemplateRef('dropdownElRef');

// 打开下拉框
function openDropdown(event, index) {
  dropdownElRef.value[index].open({ event });
}

// 关闭下拉框
function closeDropdown(index) {
  dropdownElRef.value[index].close();
}
</script>
