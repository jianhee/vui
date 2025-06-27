<template>
  <VTable
    class="demo-table"
    table-height="500"
    :row-items="rowItems"
    :col-items="colItems"
  />
</template>

<script setup>
import { renderRows, colItems } from '../composables';

const rowItems = renderRows();
</script>

<style>
.demo-table {
  height: 500px;
  border: 1px solid var(--vui-border-color-base);
}
.demo-table-cell {
  font-weight: bold;
}
</style>
