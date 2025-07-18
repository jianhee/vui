<!-- 表头-行 -->
<template>
  <div :class="['vui-table-row', allSelectionClasses]">
    <!-- 拖拽排序 -->
    <div
      v-if="tableRoot.props.dragSortable"
      class="vui-table-row-action"
    />
    <!-- 全选 -->
    <div
      v-if="tableRoot.props.selectable"
      class="vui-table-row-action"
    >
      <VCheckbox
        :checked="isSelectedAll"
        :disabled="!tableRoot.rowItemsRef.value?.length"
        @change="toggleAllSelection"
      />
    </div>
    <!-- 单元格 -->
    <TheadCell
      v-for="col in tableRoot.props.colItems"
      :key="col.key"
      :col-data="col"
    />
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { useAllSelection } from './composables/selection';
import TheadCell from './thead-cell.vue';

// 表格
const tableRoot = inject('tableRoot', null);

// 使用全选
const { isSelectedAll, toggleAllSelection, allSelectionClasses } = useAllSelection({
  selectable: tableRoot.props.selectable,
  ctrlASelectable: tableRoot.props.ctrlASelectable,
  modelSelectedRowIds: tableRoot.modelSelectedRowIds,
  rowItemsRef: tableRoot.rowItemsRef
});
</script>
