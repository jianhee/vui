<!-- 表格 -->
<template>
  <div>固定表头+拖拽调整列宽、虚拟列表、多选+鼠标框选、保持选中状态、拖拽排序+合并</div>
  <DemoCard title="基础用法">
    <template #desc>
      <ol>
        <li>`props.rowsData` 行数据</li>
        <ol>
          <li>`row.id` 行唯一标识</li>
          <li>`row.xxx` 行自定义字段</li>
        </ol>
        <li>`props.colsData` 列数据</li>
        <ol>
          <li>`col.key` 列唯一标识</li>
          <li>`col.title` 列标题</li>
          <li>`col.width` 列宽，默认根据列数量平分</li>
          <li>`col.className` 自定义类名</li>
        </ol>
        <li>`row[col.key]` 单元格默认文本，优先显示自定义 `slot[col.key]`</li>
        <li>`props.tableHeight` 表格高度</li>
        <li>`props.rowHeight` 行高</li>
        <li>`props.colsWidthStorageKey` 列宽本地存储的 key</li>
        <li>`props.rowProps` 行自定义属性 `row => ({title: row.title})`</li>
        <li>`props.currentRowId` 当前行</li>
        <li>`emits.row-contextmenu` 右键点击行时触发，返回点击的行数据和点击事件</li>
      </ol>
    </template>
    <VTable
      :table-height="300"
      :cols-data="tableCols"
      cols-width-storage-key="demo-table-cols-width"
      :rows-data="tableRows"
      :row-height="40"
      :row-props="row => ({ title: row.title })"
      :current-row-id="currentRowId"
      @row-contextmenu="(row, event) => writeLog('row-contextmenu', row, event)"
    >
      <template #btn="{ row }">
        <VBtn
          size="small"
          @click="currentRowId = row.id"
        >
          设为当前行
        </VBtn>
      </template>
    </VTable>
  </DemoCard>
  <DemoCard title="多选">
    <template #desc>
      <ol>
        <li>`props.selectable` 是否可选择</li>
        <li>`props.keepSelected` 刷新后是否保留选中状态</li>
        <li>`props.selectboxPadding` 鼠标框选两侧间距</li>
        <li>`emits.selectionChange` 切换选中项时触发，返回所有选中的行数据</li>
      </ol>
    </template>
    <VTable
      :table-height="300"
      :cols-data="tableCols"
      :rows-data="tableRows"
      :selectable="selectable"
      :keep-selected="keepSelected"
      :selectbox-padding="20"
      @selection-change="writeLog('selection-change', $event)"
    />
    <DemoRow
      flex
      flex-center
    >
      <VCheckbox v-model:checked="selectable">多选+鼠标框选</VCheckbox>
      <VCheckbox v-model:checked="keepSelected">刷新时保留选中状态 </VCheckbox>
      <VBtn
        type="primary"
        size="small"
        @click="getTableData"
      >
        刷新
      </VBtn>
    </DemoRow>
  </DemoCard>
  <DemoCard title="排序">
    <template #desc>
      <ol>
        <li>`props.sortable` 是否可排序</li>
        <li>`props.sortMerge` 可合并时的规则 `row => true | false`</li>
        <li>`emits.sort` 和 `emits.merge` 拖拽排序/合并完成时触发，返回 `{ dragItem, dragItems, targetItem, state, newIndex }`</li>
      </ol>
    </template>
    <VTable
      :table-height="300"
      :cols-data="tableCols"
      :rows-data="tableRows"
      :sortable="sortable"
      :sort-merge="sortMerge ? row => true : undefined"
      @sort="writeLog('sort', $event)"
      @merge="writeLog('merge', $event)"
    />
    <DemoRow flex>
      <VCheckbox v-model:checked="sortable">排序</VCheckbox>
      <VCheckbox v-model:checked="sortMerge">支持合并</VCheckbox>
    </DemoRow>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@utils';

// 当前行
const currentRowId = ref(null);

// 多选
const selectable = ref(true);
const keepSelected = ref(false);

// 排序
const sortable = ref(true);
const sortMerge = ref(false);

// 刷新标识
let refreshTag = 0;

// 行数据
const tableRows = ref(null);
getTableData();
function getTableData() {
  refreshTag++;
  tableRows.value = renderData(1000);
}

// 列数据
const tableCols = [
  { key: 'id', title: 'ID' },
  { key: 'title', title: '标题' },
  { key: 'name', title: '姓名' },
  { key: 'age', title: '年纪' },
  { key: 'phone', title: '手机' },
  { key: 'address', title: '地址' },
  { key: 'btn', title: '按钮' }
];

// 生成数据
function renderData(length) {
  return Array.from({ length }).map((_, i) => {
    const path = i + 1;
    const key = `${path}-${refreshTag}`;
    return {
      id: path,
      title: key,
      name: `姓名-${key}`,
      age: `年纪-${key}`,
      phone: `手机号-${key}`,
      address: `地址-${key}`,
      btn: `地址-${key}`
    };
  });
}
</script>
