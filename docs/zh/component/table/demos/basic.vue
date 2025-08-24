<template>
  <VTable
    class="demo-table"
    :row-items="rowItems"
    :col-items="colItems"
    table-height="300"
  />
</template>

<script setup>
import { renderItems, renderCols } from '../composables';

const rowItems = renderItems({ length: 1000 });
const colItems = renderCols();
</script>

<style>
.demo-table {
  height: 300px;
  border: 1px solid var(--vui-border-color-base);
}
.demo-table-cell {
  font-weight: bold;
}
</style>
