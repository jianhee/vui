<template>
  <VTable
    v-model:selected-row-ids="selectedRowIds"
    :table-height="300"
    :row-items="rowItems"
    :col-items="colItems"
    :selectable="true"
    :drag-sortable="true"
    :can-drop-into="target => target.canDropInto"
    @drag-sort-end="writeLog('drag-sort-end', $event)"
  />
</template>

<script setup>
import { ref } from 'vue';
import { renderData, colItems } from '../composables';
import { writeLog } from '@vp/utils';

// 行
const rowItems = renderData(10);

// 已选中的行
const selectedRowIds = ref(null);
</script>
