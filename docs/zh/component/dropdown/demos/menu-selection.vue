<template>
  <DemoSpace>
    <VDropdown
      v-model:selected-key="seletedKey"
      :menus="menus"
      selectable
      @selection-change="writeLog('selection-change', $event)"
    >
      <VBtn>下拉菜单</VBtn>
    </VDropdown>
  </DemoSpace>
  <DemoSpace>
    当前值为 <code>{{ seletedKey }}</code>
  </DemoSpace>
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
