<template>
  <VTable
    v-slot="{ row, col }"
    :row-items="rowItems"
    :col-items="colItems"
    :col-resizable="true"
    col-widths-storage-key="demo-table-col-widths"
  >
    <template v-if="col.key === 'desc'">
      <VIcon :name="row.type" />
      <span>{{ row.desc }}</span>
    </template>
  </VTable>
</template>

<script setup>
import { renderData, colItems } from '../composables';

const rowItems = renderData(5);
</script>
