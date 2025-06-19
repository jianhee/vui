<!-- 表头-行 -->
<template>
  <div class="vui-table-row">
    <!-- 单元格：支持拖拽调整宽度 -->
    <VDragbox
      v-for="col in tableRoot.props.colItems"
      :key="col.key"
      v-model:width="tableRoot.colWidths.value[col.key]"
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

// 处理数据
const tableRoot = inject('tableRoot', null);
</script>
