<template>
  <VTable
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
.demo-table-cell {
  font-weight: bold;
}
</style>
