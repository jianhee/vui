<template>
  <DemoSpace class="demo-dropdown-trigger">
    <VDropdown
      v-model:selected-key="seletedKey"
      :menus="menus"
      selectable
      @select-change="writeLog('select-change', $event)"
    >
      <VBtn>下拉菜单</VBtn>
    </VDropdown>

    <span>
      绑定值 <code>`v-model:selected-key`</code> 的值为 <code>{{ seletedKey }}</code>
    </span>
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
