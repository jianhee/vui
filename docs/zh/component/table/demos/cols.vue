<template>
  <VTable
    v-slot="{ row, col }"
    class="demo-table"
    :row-items="rowItems"
    :col-items="colItems"
    :col-resizable="true"
    col-widths-storage-key="demo-table-col-widths"
  >
    <template v-if="col.key === 'title'">
      <VIcon :name="row.type" />
      <span>{{ row.title }}</span>
    </template>
  </VTable>
</template>

<script setup>
import { renderData, colItems } from '../composables';

const rowItems = renderData(5);
</script>
