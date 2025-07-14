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
    <template #dropdown>
      <DemoSpace>第 {{ nRef }} 个条目的右键菜单</DemoSpace>
      <DemoSpace>
        <VButton @click="closeDropdown">关闭</VButton>
      </DemoSpace>
    </template>
  </VDropdown>
</template>

<script setup>
import { ref, useTemplateRef } from 'vue';
import { writeLog } from '@vp/utils';

const nRef = ref(null);
const dropdownElRef = useTemplateRef('dropdownElRef');

// 打开菜单
function openDropdown(event, n) {
  nRef.value = n;
  dropdownElRef.value.open({ event });
}

// 关闭菜单
function closeDropdown() {
  dropdownElRef.value.close();
}
</script>

<style>
.demo-dropdown-row {
  padding: 5px 10px;
  margin: 10px 0;
  background-color: pink;
}
</style>
