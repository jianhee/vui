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
import { useTableRow, tableRowProps } from './composables/table';
import { useRowSelection } from './composables/selection';
import TbodyCell from './tbody-cell.vue';

// 处理数据
const tableRoot = inject('tableRoot', null);
const props = defineProps(tableRowProps);
const { rowClasses, customRowAttrs, onRowContextmenu } = useTableRow({ props });

// 处理多选
const { rowSelectionClasses, isSelectedRow, toggleRowSelection } = useRowSelection({ props });
</script>
