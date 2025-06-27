<!-- 表头-行 -->
<template>
  <div :class="['vui-table-row', allSelectionClasses]">
    <!-- 排序占位 -->
    <div
      v-if="tableRoot.props.dragSortable"
      class="vui-table-cell is-action"
      style="width: 24px"
    />
    <!-- 全选 -->
    <div
      v-if="tableRoot.props.selectable"
      class="vui-table-cell is-action"
    >
      <VCheckbox
        :checked="isSelectedAll"
        @change="toggleAllSelection"
      />
    </div>
    <!-- 单元格：拖拽调整宽度 -->
    <VDragbox
      v-for="col in tableRoot.props.colItems"
      :key="col.key"
      v-model:width="tableRoot.colWidthsRef.value[col.key]"
      class="vui-table-cell"
      :resizable="tableRoot.props.colResizable"
      :resize-handles="['right']"
      :min-width="tableRoot.colMinWidth"
    >
      {{ col.title }}
    </VDragbox>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { useAllSelection } from './composables/selection';

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
