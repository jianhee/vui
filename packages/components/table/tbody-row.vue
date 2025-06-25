<!-- 表身-行 -->
<template>
  <div
    :class="[...rowClasses, rowSelectionClasses]"
    v-bind="customRowAttrs"
    @contextmenu.prevent="onRowContextmenu"
  >
    <!-- 多选 -->
    <div
      v-if="tableRoot.props.selectable"
      class="vui-table-cell is-action"
    >
      <VCheckbox
        :checked="isSelectedRow"
        @change="toggleRowSelection"
      />
    </div>
    <!-- 单元格 -->
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
import { useTbodyRow, tbodyRowProps } from './composables/tbody-row';
import { useRowSelection } from './composables/selection';
import TbodyCell from './tbody-cell.vue';

// 表格
const tableRoot = inject('tableRoot', null);

// 表身行
const props = defineProps(tbodyRowProps);

// 使用行
const { rowClasses, customRowAttrs, onRowContextmenu } = useTbodyRow({
  tableRoot,
  tbodyRow: { props }
});

// 使用行选中
const { rowSelectionClasses, isSelectedRow, toggleRowSelection } = useRowSelection({
  selectable: tableRoot.props.selectable,
  modelSelectedRowIds: tableRoot.modelSelectedRowIds,
  rowItems: tableRoot.props.rowItems,
  rowId: props.rowData?.id
});
</script>
