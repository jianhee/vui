<template>
  <VTable
    class="demo-table"
    :row-items="rowItems"
    :col-items="colItems"
    table-height="300"
    @row-contextmenu="writeLog('row-contextmenu', $event)"
  />
</template>

<script setup>
import { renderData, colItems } from '../composables';
import { writeLog } from '@vp/utils';

const rowItems = renderData(1000);
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
