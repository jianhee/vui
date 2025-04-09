<!-- 表格和树结构 -->
<template>
  <DemoCard title="表格">
    <template #desc>
      <DemoRow>1.虚拟列表、固定表头、拖拽调整列宽、多选</DemoRow>
      <DemoRow>2.表头显示值：<code>col.title</code></DemoRow>
      <DemoRow>3.每行显示值：优先显示 <code>slot</code> 其次显示 <code>row[col.key]</code></DemoRow>
    </template>
    <DemoRow>
      <MxTable
        height="300px"
        :rows="tableRows"
        :columns="tableCols"
        selectable
        :keep-selected="keepSelected"
        storage-key="demo-table"
        @row-contextmenu="writeLog('row-contextmenu', $event)"
        @selection-change="writeLog('selection-change', $event)"
      />
    </DemoRow>
    <DemoRow flex>
      <MxBtn
        type="primary"
        size="small"
        @click="renderTableRows"
      >
        刷新
      </MxBtn>
      <MxCheckbox v-model:checked="keepSelected">刷新时保留选中状态</MxCheckbox>
    </DemoRow>
  </DemoCard>
  <DemoCard title="树结构">
    <template #desc>
      <DemoRow>1.虚拟列表</DemoRow>
      <DemoRow>2.每行显示值：优先显示 <code>slot</code> 其次显示 <code>node.title</code></DemoRow>
    </template>
    <MxTree
      height="200px"
      :data="treeData"
      @node-click="writeLog('node-click', $event)"
      @node-contextmenu="writeLog('node-contextmenu', $event)"
    >
      <template #default="{ node }">
        {{ node.title }}
      </template>
    </MxTree>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@/utils';
import { randomIntNum } from '@mxui/utils';

// 保留选中状态
const keepSelected = ref(false);

// 表格行数据
const tableRows = ref(null);
renderTableRows();
function renderTableRows() {
  tableRows.value = Array.from({ length: 1000 }).map((_, i) => {
    const key = randomIntNum();
    return {
      id: i,
      name: `姓名-${key}`,
      age: `年纪-${key}`,
      phone: `手机号-${key}`,
      address: `地址-${key}`
    };
  });
}

// 表格列数据
const tableCols = [
  { key: 'id', title: 'ID', width: 100 },
  { key: 'name', title: '姓名', width: 100 },
  { key: 'age', title: '年纪', width: 100 },
  { key: 'phone', title: '年纪', width: 100 },
  { key: 'address', title: '地址', width: 100 }
];

// 树结构数据
const treeData = ref(null);
treeData.value = renderTreeData();
function renderTreeData(path = '0', level = 2) {
  return Array.from({ length: 20 }).map((_, i) => {
    const key = `${path}-${i}`;
    return {
      id: key,
      title: key,
      children: level > 0 ? renderTreeData(key, level - 1) : null
    };
  });
}
</script>
