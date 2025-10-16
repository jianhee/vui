<template>
  <VTable
    class="c-demo-table"
    :row-items="rowItems"
    :col-items="colItems"
    stripe
  />
</template>

<script setup>
import { renderItems, renderCols } from '../composables';

const rowItems = renderItems({ length: 10 });
const colItems = renderCols();
</script>
