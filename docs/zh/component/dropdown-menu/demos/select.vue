<template>
  <DemoSpace flex>
    <VDropdownMenu
      :items="items"
      @click="writeLog('click', $event)"
    >
      <VButton>点击事件</VButton>
    </VDropdownMenu>

    <VDropdownMenu
      v-model:selected-key="seletedKey"
      :items="items"
      selectable
      @select="writeLog('select', $event)"
    >
      <VButton>选中事件 值为 {{ seletedKey }}</VButton>
    </VDropdownMenu>
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';
import { items } from '../composables';
import { writeLog } from '@vp/utils';

const seletedKey = ref(1);
</script>
