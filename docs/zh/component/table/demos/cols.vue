<template>
  <VTable
    v-slot="{ row, col }"
    class="demo-table"
    :row-items="rowItems"
    :col-items="colItems"
    col-resizable
    col-resize-storage-key="demo-table-col-widths"
  >
    <template v-if="col.key === 'title'">
      <VIcon :name="row.type" />
      <span>{{ row.title }}</span>
    </template>
  </VTable>
</template>

<script setup>
import { renderItems, renderCols } from '../composables';

const rowItems = renderItems({ length: 5 });
const colItems = renderCols();
</script>
