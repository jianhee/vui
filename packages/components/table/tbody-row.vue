<!-- 表身-行 -->
<template>
  <div
    :class="[...rowClasses]"
    v-bind="customRowAttrs"
    @contextmenu.prevent="onRowContextmenu"
  >
    <TbodyCell
      v-for="col in tableRoot.props.colItems"
      :key="col.key"
      :row-data="rowData"
      :col-data="col"
    >
      <slot :col="col" />
    </TbodyCell>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { tableRowProps, useTableRow } from './composables/table';
import TbodyCell from './tbody-cell.vue';

// 处理数据
const tableRoot = inject('tableRoot', null);
const props = defineProps(tableRowProps);
const { rowClasses, customRowAttrs, onRowContextmenu } = useTableRow({ props });
</script>
