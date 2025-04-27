<!-- 表格 -->
<template>
  <div>固定表头、拖拽调整列宽、虚拟列表、多选、鼠标框选、保持选中状态、拖拽排序+合并</div>
  <DemoCard title="基础用法">
    <template #desc>
      <ol>
        <li><code>props.rowsData</code> 行数据</li>
        <ol>
          <li><code>row.id</code> 行唯一标识</li>
          <li><code>row.xxx</code> 行自定义字段</li>
        </ol>
        <li><code>props.colsData</code> 列数据</li>
        <ol>
          <li><code>col.key</code> 列唯一标识</li>
          <li><code>col.title</code> 列标题</li>
          <li><code>col.width</code> 列宽，默认根据列数量平分</li>
          <li><code>col.className</code> 自定义类名</li>
        </ol>
        <li><code>row[col.key]</code> 单元格默认文本，优先显示自定义 <code>slot[col.key]</code></li>
        <li><code>props.tableHeight</code> 表格高度</li>
        <li><code>props.rowHeight</code> 行高</li>
        <li><code>props.colsWidthStorageKey</code> 列宽本地存储的 key</li>
        <li><code>props.rowProps</code> 行自定义属性 <code>row => ({title: row.title})</code></li>
        <li><code>props.currentRowId</code> 当前行</li>
        <li><code>emits.row-contextmenu</code> 右键点击行时触发，返回点击的行数据和点击事件</li>
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
        <li><code>props.selectable</code> 是否可选择</li>
        <li><code>props.keepSelected</code> 刷新后是否保留选中状态</li>
        <li><code>props.selectAreaWidth</code> 鼠标框选两侧宽度</li>
        <li><code>emits.selectionChange</code> 切换选中项时触发，返回所有选中的行数据</li>
      </ol>
    </template>
    <VTable
      :table-height="300"
      :cols-data="tableCols"
      :rows-data="tableRows"
      :selectable="selectable"
      :keep-selected="keepSelected"
      :select-area-width="20"
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
        <li><code>props.sortable</code> 是否可排序</li>
        <li><code>props.sortMerge</code> 可合并时的规则 <code>row => true | false</code></li>
        <li><code>emits.sort</code> 和 <code>emits.merge</code> 拖拽排序/合并完成时触发，返回 <code>{ dragItem, dragItems, targetItem, state, newIndex }</code></li>
      </ol>
    </template>
    <VTable
      :table-height="300"
      :cols-data="tableCols"
      :rows-data="tableRows"
      :sortable="sortable"
      :sort-merge="sortMerge ? row => true : null"
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
import { writeLog } from '@/utils';

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
