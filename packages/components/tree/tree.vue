<!-- 树 -->
<template>
  <div
    :class="['vui-tree', dragSortRootClasses]"
    :style="treeRootStyles"
    v-bind="rootProps"
  >
    <!-- 加载状态 -->
    <VLoading v-if="loading" />
    <!-- 空状态 -->
    <template v-else-if="!treeDataRef?.length">
      <!-- 优先插槽 -->
      <slot
        v-if="$slots.empty"
        name="empty"
      />
      <!-- 其次文案 -->
      <VEmpty
        v-else
        :icon="null"
        :description="emptyText"
      />
    </template>
    <!-- 虚拟列表 -->
    <div
      v-else
      class="vui-tree-view"
      v-bind="viewProps"
    >
      <!-- 节点 -->
      <VTreeNode
        v-for="{ data: node } in virtualList"
        :key="node.data.id"
        :node-data="node"
        :item-data="node.data"
      >
        <template
          v-if="$slots.default"
          #default
        >
          <slot
            :node="node"
            :item="node.data"
          />
        </template>
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
const { nodeMap, flattenedNodes, loadChildren, treeRootStyles } = useTree({
  props,
  treeDataRef
});

// 使用虚拟列表
const {
  list: virtualList,
  containerProps: rootProps,
  wrapperProps: viewProps
} = useVirtualList(flattenedNodes, {
  itemHeight: props.nodeHeight,
  overscan: 20
});

// 使用排序
const { dragSortRootClasses } = useDragSort({
  dragFlagRef,
  dragSortGroup: props.dragSortGroup
});

// 子组件使用
provide('vuiTreeRoot', {
  props,
  emits,
  nodeMap,
  loadChildren,
  dragFlagRef
});
</script>
