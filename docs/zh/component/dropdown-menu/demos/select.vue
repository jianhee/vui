<template>
  <VDropdownMenu
    v-model:selected-key="seletedKey"
    :items="items"
    selectable
    @select="writeLog('select', $event)"
  >
    <VButton>hover</VButton>
  </VDropdownMenu>

  <DemoSpace>
    当前值为 <code>{{ seletedKey }}</code>
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@vp/utils';

const seletedKey = ref(1);
const items = [1, 2, 3, 4].map(key => ({ key, label: `选项${key}` }));
</script>
