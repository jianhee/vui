<template>
  <VTable
    table-height="500"
    :row-items="rowItems"
    :col-items="colItems"
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
