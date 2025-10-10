<template>
  <VDropdown
    v-model:selected-key="seletedKey"
    :items="items"
    selectable
    @select="writeLog('select', $event)"
  >
    <VButton>hover 触发元素，当前选中的值为 {{ seletedKey }}</VButton>
  </VDropdown>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@vp/utils';
import { renderItems } from '../composables';

const items = renderItems();
const seletedKey = ref(1);
</script>
