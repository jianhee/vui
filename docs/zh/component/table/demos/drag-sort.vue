<template>
  <VTable
    v-model:selected-row-ids="selectedRowIds"
    :row-items="rowItems"
    :col-items="colItems"
    :selectable="true"
    :drag-sortable="true"
    :can-drop-into="row => row.canDropInto"
    @drag-sort-end="writeLog('drag-sort-end', $event)"
  />
</template>

<script setup>
import { ref } from 'vue';
import { renderRows } from '../composables';
import { writeLog } from '@vp/utils';

// 行
const rowItems = renderRows({ length: 10 });

// 列
const colItems = [
  { key: 'id', title: 'ID' },
  { key: 'drop', title: '是否可以移入' }
];

// 已选中的行
const selectedRowIds = ref(null);
</script>
