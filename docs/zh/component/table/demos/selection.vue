<template>
  <VTable
    v-model:selected-row-ids="selectedRowIds"
    class="demo-table"
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
import { renderItems, renderCols } from '../composables';
import { writeLog } from '@vp/utils';

const rowItems = renderItems({ length: 5 });
const colItems = renderCols();
const selectedRowIds = ref([rowItems[2].id]);
</script>
