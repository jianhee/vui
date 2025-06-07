<template>
  <div
    v-for="n in 10"
    :key="n"
    class="demo-dropdown-rect"
    @contextmenu.prevent="openDropdown($event, n)"
  >
    第 {{ n }} 个条目，右键点击任意区域打开菜单
  </div>

  <VDropdown
    ref="dropdownRef"
    trigger="contextmenu"
  >
    <template #content>
      <div class="demo-dropdown">第 {{ nRef }} 个条目的右键菜单</div>
    </template>
  </VDropdown>
</template>

<script setup>
import { ref } from 'vue';

// 当前点击的条目
const nRef = ref(null);

// 打开菜单
const dropdownRef = ref(null);
function openDropdown(event, n) {
  nRef.value = n;
  dropdownRef.value.open(event);
}
</script>

<style>
.demo-dropdown-rect {
  padding: 5px 10px;
  margin: 10px 0;
  background-color: pink;
}
</style>
