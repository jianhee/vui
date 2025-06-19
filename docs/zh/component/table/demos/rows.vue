<template>
  <VTable
    table-height="500"
    :row-items="rowItems"
    :col-items="colItems"
    :row-height="50"
    :current-row-id="1"
    :custom-row="setCustomRow"
    @row-contextmenu="writeLog('row-contextmenu', $event)"
  />
</template>

<script setup>
import { rowItems, colItems } from '../composables';
import { writeLog } from '@vp/utils';

function setCustomRow(row) {
  return {
    title: row.name,
    style: {
      color: row.id === 3 ? 'red' : null,
      backgroundColor: row.id === 5 ? 'yellow' : null
    }
  };
}
</script>
