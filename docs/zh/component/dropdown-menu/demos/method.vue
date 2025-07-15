<template>
  <DemoSpace flex>
    <VButton @click="openDropdown($event, 0)">点击左键调用方法</VButton>
    <VButton @contextmenu.prevent="openDropdown($event, 1)">点击右键调用方法</VButton>
  </DemoSpace>

  <!-- 下拉菜单 -->
  <VDropdownMenu
    v-for="trigger in triggers"
    ref="dropdownElRef"
    :key="trigger"
    :trigger="trigger"
    :items="items"
    @open="writeLog('open')"
    @close="writeLog('close')"
  />
</template>

<script setup>
import { useTemplateRef } from 'vue';
import { items } from '../composables';
import { writeLog } from '@vp/utils';

const triggers = ['click', 'contextmenu'];
const dropdownElRef = useTemplateRef('dropdownElRef');

// 打开菜单
function openDropdown(event, index) {
  dropdownElRef.value[index].open({ event });
}
</script>
