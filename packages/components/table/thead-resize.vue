<!-- 表格-表头-行 -->
<template>
  <div>
    <!-- 全选 -->
    <slot />
    <!-- 拖拽调整宽度 -->
    <VDragbox
      v-for="col in parentTable.props.colsData"
      :key="col.key"
      v-model:width="parentTable.colsWidth.value[col.key]"
      resizable
      handles="right"
      :fixed="false"
      :min-width="100"
      class="vui-table-cell"
    >
      <VRow ellipsis>{{ col.title }}</VRow>
    </VDragbox>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const parentTable = inject('parentTable', null);
</script>
