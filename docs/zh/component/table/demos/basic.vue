<template>
  <VTable
    table-height="300"
    :row-items="rowItems"
    :col-items="colItems"
  />
</template>

<script setup>
import { rowItems, colItems } from '../composables';
</script>

<style>
.demo-table-cell {
  font-weight: bold;
}
</style>
