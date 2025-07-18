<template>
  <VTable
    class="demo-table"
    :row-items="rowItems"
    :col-items="colItems"
  />
</template>

<script setup>
import { renderItems, renderCols } from '../composables';

const rowItems = renderItems({ length: 100 });
const colItems = renderCols({ sortable: true });
</script>
