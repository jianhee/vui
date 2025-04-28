<!-- 树结构 -->
<template>
  <div>虚拟列表+扁平化数据、刷新保持展开状态</div>
  <DemoCard title="基础用法">
    <template #desc>
      <ol>
        <li><code>props.data</code> 节点数据</li>
        <ol>
          <li><code>node.id</code> 节点唯一标识</li>
          <li><code>node.title</code> 节点默认文本，优先显示自定义 <code>slot.default</code></li>
          <li><code>node.xxx</code> 节点自定义字段</li>
        </ol>
        <li><code>props.treeHeight</code> 树高度</li>
        <li><code>props.nodeHeight</code> 节点高度</li>
        <li><code>props.treeIndent</code> 树整体缩进</li>
        <li><code>props.nodeIndent</code> 节点缩进</li>
        <li><code>props.currentNodeId</code> 当前节点</li>
        <li><code>emits.rowClick</code> 左键点击节点时触发，返回点击的节点数据和点击事件</li>
        <li><code>emits.rowContextmenu</code> 右键点击节点时触发，返回点击的节点数据和点击事件</li>
      </ol>
    </template>
    <VTree
      :data="treeData"
      :tree-height="200"
      :tree-indent="10"
      :node-height="40"
      :node-indent="10"
      :current-node-id="currentNodeId"
      @node-click="writeLog('node-click', $event)"
      @node-contextmenu="writeLog('node-contextmenu', $event)"
    />
    <DemoRow flex>
      <VBtn
        type="primary"
        size="small"
        @click="getTreeData"
      >
        刷新
      </VBtn>
      <VBtn
        type="primary"
        size="small"
        @click="currentNodeId = treeData[0].id"
      >
        将第一行设置为当前节点
      </VBtn>
    </DemoRow>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import { writeLog } from '@/utils';

// 当前节点
const currentNodeId = ref(null);

// 刷新标识
let refreshTag = 0;

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
    const key = `${path}-${refreshTag}`;
    return {
      id: path,
      title: key,
      children: level > 0 ? renderData(length, level - 1, path) : null
    };
  });
}
</script>
