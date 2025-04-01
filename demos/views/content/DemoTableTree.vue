<!-- 表格和树结构 -->
<template>
  <DemoCard title="表格">
    <template #desc>
      <div>1.虚拟列表、固定表头、拖拽调整列宽、多选</div>
      <div>2.表头显示值：每列的 title 字段</div>
      <div>3.每行显示值：优先显示 slot，其次显示 row[col.key]</div>
    </template>
    <MxTable
      height="300px"
      :rows="tableRows"
      :columns="tableCols"
      selectable
      storage-key="demo-table"
      @node-click="showLog('node-click', $event)"
      @node-contextmenu="showLog('node-contextmenu', $event)"
    />
  </DemoCard>
  <DemoCard title="树结构">
    <template #desc>
      <div>1.虚拟列表</div>
      <div>2.每行显示值：优先显示 slot，其次显示 title 字段</div>
    </template>
    <MxTree
      height="200px"
      :data="treeData"
      @node-click="showLog('node-click', $event)"
      @node-contextmenu="showLog('node-contextmenu', $event)"
    >
      <template #default="{ node }">
        {{ node.title }}
      </template>
    </MxTree>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { showLog } from '@/utils';

// 表格列数据
const tableCols = [
  { key: 'name', title: '姓名', width: 100 },
  { key: 'age', title: '年纪', width: 100 },
  { key: 'phone', title: '年纪', width: 100 },
  { key: 'address', title: '地址', width: 100 }
];

// 表格行数据
const tableRows = ref(null);
tableRows.value = renderTable();
function renderTable() {
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

// 树结构数据
const treeData = ref(null);
treeData.value = renderTree();
function renderTree(path = '0', level = 3) {
  return Array.from({ length: 10 }).map((_, i) => {
    const key = `${path}-${i}`;
    return {
      id: key,
      title: key,
      children: level > 0 ? renderTree(key, level - 1) : null
    };
  });
}
</script>
