<!-- 树 -->
<!-- 1.虚拟列表+扁平化数据 -->
<!-- 2.刷新保持展开状态 -->
<template>
  <div
    v-bind="treeProps"
    class="vui-tree"
    :style="treeStyles"
  >
    <!-- 虚拟列表 -->
    <div
      v-bind="viewProps"
      class="vui-tree-view"
    >
      <!-- 节点 -->
      <VTreeNode
        v-for="{ data: node } in virtualList"
        :key="node.id"
        :node="node"
      >
        <!-- 优先显示slot -->
        <slot
          v-if="$slots.default"
          :node="node"
        />
        <span v-else>{{ node.title }}</span>
      </VTreeNode>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, provide } from 'vue';
import { useVirtualList } from '@vueuse/core';
import VTreeNode from './tree-node.vue';

const emits = defineEmits(['node-click', 'node-contextmenu']);

// 参数
const props = defineProps({
  // 样式
  treeHeight: { type: Number, default: null },
  treeIndent: { type: Number, default: 10 },
  nodeHeight: { type: Number, default: 30 },
  nodeIndent: { type: Number, default: 15 },
  // 树数据
  data: { type: Array, default: () => [] },
  // 当前 ID
  currentNodeId: { type: [String, Number], default: null }
});

// 获取样式
const treeStyles = computed(() => ({
  'height': `${props.treeHeight}px`,
  '--vui-tree-node-height': `${props.nodeHeight}px`
}));

// 展开状态
const expandedMap = reactive(new Map());

// 虚拟列表
const {
  list: virtualList,
  containerProps: treeProps,
  wrapperProps: viewProps
} = useVirtualList(
  computed(() => flattenTree(props.data)),
  {
    itemHeight: props.nodeHeight,
    overscan: 20
  }
);

// 扁平化方法
function flattenTree(nodes, level = 0) {
  const result = [];
  nodes?.forEach(node => {
    // 当前节点
    const formatted = { ...node, level };
    result.push(formatted);

    // 子集
    const isExpanded = expandedMap.get(node.id);
    if (formatted.children && isExpanded) {
      const children = flattenTree(formatted.children, level + 1, formatted);
      result.push(...children);
    }
  });
  return result;
}

// 共享数据
provide('parentTree', {
  emits,
  props,
  expandedMap
});
</script>
