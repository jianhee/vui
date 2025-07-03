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

// 行数据
const rowItems = renderData(1000);

// 自定义行属性
function setCustomRow({ row }) {
  return {
    title: row.name,
    style: {
      color: row.id === '0-3' ? 'red' : null,
      backgroundColor: row.id === '0-5' ? 'yellow' : null
    }
  };
}
</script>
