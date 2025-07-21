<template>
  <VTable
    class="demo-table"
    :col-items="colItems"
    :row-items="rowItems"
    :row-height="25"
    :current-row-id="rowItems[0].id"
    :custom-row="customRow"
  />
</template>

<script setup>
import { renderItems, renderCols } from '../composables';

// 数据
const rowItems = renderItems({ length: 5 });
const colItems = renderCols();

// 自定义行属性
function customRow({ row }) {
  return {
    title: row.name,
    style: {
      color: row.id === rowItems[2].id ? 'pink' : null,
      backgroundColor: row.id === rowItems[4].id ? 'pink' : null
    }
  };
}
</script>
