<template>
  <VTable
    class="demo-table"
    :col-items="colItems"
    :row-items="rowItems"
    :row-height="20"
    :current-row-id="rowItems[0].id"
    :custom-row="customRow"
  />
</template>

<script setup>
import { renderData, colItems } from '../composables';

// 行数据
const rowItems = renderData(5);

// 自定义行属性
function customRow({ row }) {
  return {
    title: row.name,
    style: {
      color: row.id === '0-2' ? 'pink' : null,
      backgroundColor: row.id === '0-4' ? 'pink' : null
    }
  };
}
</script>
