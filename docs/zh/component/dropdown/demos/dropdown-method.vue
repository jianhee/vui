<template>
  <div
    v-for="n in 10"
    :key="n"
    class="demo-dropdown-row"
    @contextmenu.prevent="openDropdown($event, n)"
  >
    第 {{ n }} 个条目，右键点击任意区域打开菜单
  </div>

  <VDropdown
    ref="dropdownElRef"
    trigger="contextmenu"
    class="demo-dropdown"
    @open="writeLog('open')"
    @close="writeLog('close')"
  >
    <template #dropdown>第 {{ nRef }} 个条目的右键菜单</template>
  </VDropdown>
</template>

<script setup>
import { ref, useTemplateRef } from 'vue';
import { writeLog } from '@vp/utils';

// 当前点击的条目
const nRef = ref(null);

// 打开菜单
const dropdownElRef = useTemplateRef('dropdownElRef');
function openDropdown(event, n) {
  nRef.value = n;
  dropdownElRef.value.open({ event });
}
</script>

<style>
.demo-dropdown-row {
  padding: 5px 10px;
  margin: 10px 0;
  background-color: pink;
}
</style>
