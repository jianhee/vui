<template>
  <VTable
    v-model:selected-row-ids="selectedRowIds"
    table-height="500"
    :row-items="rowItems"
    :col-items="colItems"
    :selectable="true"
    :drag-select-area-width="20"
    @selection-change="writeLog('selection-change', $event)"
  />

  <DemoSpace>
    当前值为 <code>{{ selectedRowIds }}</code>
  </DemoSpace>
</template>

<script setup>
import { ref } from 'vue';
import { renderRows, colItems } from '../composables';
import { writeLog } from '@vp/utils';

const rowItems = renderRows();
const selectedRowIds = ref([1, 3, 4]);
</script>
