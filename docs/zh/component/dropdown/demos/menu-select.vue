<template>
  <VDropdown
    v-model:selected-key="seletedKey"
    :menus="menus"
    selectable
    @menu-click="writeLog('menu-click', $event)"
    @menu-select-change="writeLog('menu-select-change', $event)"
  >
    <VBtn>当前值为 {{ seletedKey }}</VBtn>
  </VDropdown>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@vp/utils';

const seletedKey = ref(1);
const menus = [1, 2, 3, 4].map(key => ({
  key,
  label: `选项${key}`
}));
</script>
