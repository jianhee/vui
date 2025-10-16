<template>
  <VTable
    class="c-demo-table"
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
.c-demo-table {
  max-height: 300px;
}
.c-demo-tables .vui-table {
  height: 300px;
  border: 1px solid var(--demo-border-color-base);
}
.c-demo-table-cell {
  font-weight: bold;
}
</style>
