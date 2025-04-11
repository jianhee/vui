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
        name="demo"
        :table-height="300"
        :rows="tableRows"
        :columns="tableCols"
        selectable
        :keep-selected="keepSelected"
        @row-contextmenu="writeLog('row-contextmenu', $event)"
        @selection-change="writeLog('selection-change', $event)"
      />
    </DemoRow>
    <DemoRow flex>
      <MxBtn
        type="primary"
        size="small"
        @click="getTableData"
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
    <DemoRow flex>
      <MxTree
        :tree-height="200"
        :data="treeData"
        @node-click="writeLog('node-click', $event)"
        @node-contextmenu="writeLog('node-contextmenu', $event)"
      >
        <template #default="{ node }">
          {{ node.title }}
        </template>
      </MxTree>
    </DemoRow>
    <DemoRow flex>
      <MxBtn
        type="primary"
        size="small"
        @click="getTreeData"
      >
        刷新
      </MxBtn>
    </DemoRow>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@/utils';

// 刷新标识
let refreshTag = 0;

// 保留选中状态
const keepSelected = ref(false);

// 表格行数据
const tableRows = ref(null);
getTableData();
function getTableData() {
  refreshTag++;
  tableRows.value = renderData(1000);
}

// 表格列数据
const tableCols = [
  { key: 'id', title: 'ID', width: 100 },
  { key: 'title', title: '标题', width: 100 },
  { key: 'name', title: '姓名', width: 100 },
  { key: 'age', title: '年纪', width: 100 },
  { key: 'phone', title: '手机', width: 100 },
  { key: 'address', title: '地址', width: 100 }
];

// 树结构数据
const treeData = ref(null);
getTreeData();
function getTreeData() {
  refreshTag++;
  treeData.value = renderData(20, 2);
}

// 生成数据
function renderData(length, level = 0, _path = '0') {
  return Array.from({ length }).map((_, i) => {
    const path = `${_path}-${i}`;
    const key = `${path}(${refreshTag})`;
    return {
      id: path,
      title: key,
      name: `姓名-${key}`,
      age: `年纪-${key}`,
      phone: `手机号-${key}`,
      address: `地址-${key}`,
      children: level > 0 ? renderData(length, level - 1, path) : null
    };
  });
}
</script>
