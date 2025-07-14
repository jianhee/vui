<template>
  <DemoSpace>使用触发元素</DemoSpace>
  <DemoSpace flex>
    <VDropdownMenu
      v-for="trigger in triggers1"
      :key="trigger"
      :trigger="trigger"
      :items="items"
      @open="writeLog('open')"
      @close="writeLog('close')"
    >
      <VButton>{{ trigger }} 触发</VButton>
    </VDropdownMenu>
  </DemoSpace>
  <DemoSpace>使用下拉方法</DemoSpace>
  <DemoSpace flex>
    <VButton @click="openDropdown($event, 0)">click 触发</VButton>
    <VButton @contextmenu.prevent="openDropdown($event, 1)">contextmenu 触发</VButton>
  </DemoSpace>

  <!-- 下拉框 -->
  <VDropdownMenu
    v-for="trigger in triggers2"
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
import { writeLog } from '@vp/utils';

const triggers1 = ['hover', 'click', 'contextmenu'];
const triggers2 = ['click', 'contextmenu'];
const dropdownElRef = useTemplateRef('dropdownElRef');
const items = [1, 2, 3, 4].map(key => ({ key, label: `选项${key}` }));

// 打开菜单
function openDropdown(event, index) {
  dropdownElRef.value[index].open({ event });
}
</script>
