<template>
  <VTable
    v-model:selected-row-keys="selectedRowKeys"
    table-height="300"
    :row-items="rowItems"
    :col-items="colItems"
    selectable
    @selection-change="writeLog('selection-change', $event)"
  />

  <DemoSpace>
    绑定值 <code>v-model:selected-row-keys</code> 的值为 <code>{{ selectedRowKeys }}</code>
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';
import { rowItems, colItems } from '../composables';
import { writeLog } from '@vp/utils';

const selectedRowKeys = ref([1, 3, 4]);
</script>
