<template>
  <VTable
    class="c-demo-table"
    :row-items="rowItems"
    :col-items="colItems"
    sort-key="id"
    sort-order="asc"
  />
</template>

<script setup>
import { renderItems, renderCols } from '../composables';

const rowItems = renderItems({ length: 100 });
const colItems = renderCols({ sortable: true });
</script>
