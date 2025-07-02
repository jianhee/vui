<template>
  <VTable
    table-height="500"
    :col-items="colItems"
    :row-items="rowItems"
    :row-height="50"
    :current-row-id="rowItems[1].id"
    :custom-row="setCustomRow"
  />
</template>

<script setup>
import { renderData, colItems } from '../composables';

// 自定义行属性
const rowItems = renderData(1000);
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
