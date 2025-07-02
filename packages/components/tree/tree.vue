<!-- 树 -->
<template>
  <div
    :class="['vui-tree', dragSortRootClasses]"
    :style="treeRootStyles"
    v-bind="rootProps"
  >
    <!-- 虚拟列表 -->
    <div
      class="vui-tree-view"
      v-bind="viewProps"
    >
      <!-- 节点 -->
      <VTreeNode
        v-for="{ data: node } in virtualList"
        :key="node.id"
        :node-data="node"
      >
        <!-- 优先显示 slot -->
        <slot
          v-if="$slots.default"
          :node="node"
        />
        <!-- 其次显示 title -->
        <span v-else>{{ node.title }}</span>
      </VTreeNode>
    </div>
  </div>
</template>

<script setup>
import { provide, ref, watch } from 'vue';
import { useVirtualList } from '@vueuse/core';
import { useTree, treeProps, treeEmits } from './composables/tree';
import { useDragSort, dragSortProps, dragSortEmist } from '../table/composables/drag-sort';
import VTreeNode from './tree-node.vue';

// 树
const props = defineProps({ ...treeProps, ...dragSortProps });
const emits = defineEmits([...treeEmits, ...dragSortEmist]);

// 全局拖拽状态
const dragFlagRef = ref(null);

// 原始数据
const treeDataRef = ref(props.data);
watch(
  () => props.data,
  val => (treeDataRef.value = val)
);

// 使用树
const { expandIdMap, flattenedTree, treeRootStyles } = useTree({
  props,
  treeDataRef
});

// 使用虚拟列表
const {
  list: virtualList,
  containerProps: rootProps,
  wrapperProps: viewProps
} = useVirtualList(flattenedTree, {
  itemHeight: props.nodeHeight,
  overscan: 20
});

// 使用排序
const { dragSortRootClasses } = useDragSort({
  dragFlagRef,
  dragSortGroup: props.dragSortGroup
});

// 子组件使用
provide('treeRoot', {
  props,
  emits,
  expandIdMap,
  dragFlagRef
});
</script>
