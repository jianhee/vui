<template>
  <VTable
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
.demo-table-cell {
  font-weight: bold;
}
</style>
