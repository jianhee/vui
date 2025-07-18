<!-- 表头-单元格 -->
<template>
  <VDragbox
    v-model:width="tableRoot.colWidthsRef.value[colData.key]"
    :class="['vui-table-cell', { 'is-sortable': colData.sortable }]"
    :resizable="tableRoot.props.colResizable"
    :resize-handles="['right']"
    :min-width="tableRoot.colMinWidth"
    @click="onSortFiledClick"
  >
    <!-- 内容 -->
    <div
      class="vui-table-cell-inner"
      :title="colData.title"
    >
      {{ colData.title }}
    </div>
    <!-- 排序 -->
    <div
      v-if="colData.sortable"
      class="vui-table-cell-sort"
    >
      <span
        :class="['vui-table-cell-sorter', 'is-asc', { 'is-active': isAsc }]"
        @click.stop="onSortOrderClick('asc')"
      />
      <span
        :class="['vui-table-cell-sorter', 'is-desc', { 'is-active': isDesc }]"
        @click.stop="onSortOrderClick('desc')"
      />
    </div>
  </VDragbox>
</template>

<script setup>
import { inject } from 'vue';
import { useSortItem } from './composables/sort';

// 表格
const tableRoot = inject('tableRoot', null);

// 单元格
const props = defineProps({
  colData: { type: Object, required: true }
});

// 使用排序
const { isAsc, isDesc, onSortFiledClick, onSortOrderClick } = useSortItem({
  sortKeyRef: tableRoot.sortKeyRef,
  sortOrderRef: tableRoot.sortOrderRef,
  colKey: props.colData.key
});
</script>
