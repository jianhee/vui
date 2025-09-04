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
.demo-table,
.demo-tables .vui-table {
  max-height: 300px;
}
.demo-table-cell {
  font-weight: bold;
}
</style>
