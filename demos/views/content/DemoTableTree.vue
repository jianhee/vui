<!-- 表格和树结构 -->
<template>
  <DemoCard title="表格">
    <template #desc>
      <DemoRow>1.虚拟列表、固定表头、拖拽调整列宽、多选</DemoRow>
      <DemoRow>2.表头显示值：<code>col.title</code></DemoRow>
      <DemoRow>3.每行显示值：优先显示 <code>slot</code> 其次显示 <code>row[col.key]</code></DemoRow>
    </template>
    <MxTable
      height="300px"
      :rows="tableRows"
      :columns="tableCols"
      selectable
      storage-key="demo-table"
      @row-contextmenu="writeLog('row-contextmenu', $event)"
      @selection-change="writeLog('selection-change', $event)"
    />
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

// 表格行数据
const tableRows = ref(null);
tableRows.value = renderTableRows();
function renderTableRows() {
  return Array.from({ length: 1000 }).map((_, i) => {
    const key = i;
    return {
      id: key,
      name: `姓名-${key}`,
      age: `年纪-${key}`,
      phone: `手机号-${key}`,
      address: `地址-${key}`
    };
  });
}

// 表格列数据
const tableCols = [
  { key: 'name', title: '姓名', width: 100 },
  { key: 'age', title: '年纪', width: 100 },
  { key: 'phone', title: '年纪', width: 100 },
  { key: 'address', title: '地址', width: 100 }
];

// 树结构数据
const treeData = ref(null);
treeData.value = renderTreeData();
function renderTreeData(path = '0', level = 3) {
  return Array.from({ length: 10 }).map((_, i) => {
    const key = `${path}-${i}`;
    return {
      id: key,
      title: key,
      children: level > 0 ? renderTreeData(key, level - 1) : null
    };
  });
}
</script>
