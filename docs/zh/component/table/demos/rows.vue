<template>
  <VTable
    class="demo-table"
    :col-items="colItems"
    :row-items="rowItems"
    :row-height="50"
    :current-row-id="1"
    :custom-row="setCustomRow"
    @row-contextmenu="writeLog('row-contextmenu', $event)"
  />
</template>

<script setup>
import { renderRows, colItems } from '../composables';
import { writeLog } from '@vp/utils';

// 自定义行属性
const rowItems = renderRows();
function setCustomRow(row) {
  return {
    title: row.name,
    style: {
      color: row.id === 3 ? 'red' : null,
      backgroundColor: row.id === 5 ? 'yellow' : null
    }
  };
}
</script>
