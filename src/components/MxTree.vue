<!-- 树组件：支持虚拟列表 -->
<template>
  <div
    v-bind="treeProps"
    class="mx-tree"
    :style="tableStyles"
  >
    <!-- 虚拟列表 -->
    <div
      v-bind="viewProps"
      class="mx-tree-view"
    >
      <!-- 行 -->
      <div
        v-for="{ data: node } in virtualList"
        :key="node.id"
        class="mx-tree-node"
        :class="{ 'is-current': node.id === currentId }"
        :style="{ paddingLeft: `${treeIndent + nodeIndent * node.level}px` }"
        @click="onNodeClick(node)"
        @contextmenu.prevent="onNodeContextmenu(node, $event)"
      >
        <!-- 折叠图标 -->
        <MxIcon
          :component="IconArrowDown"
          size="16"
          :rotate="expandedMap.get(node.id) ? null : -90"
          :class="{ 'mx-tree-hidden': !node.children?.length }"
          @click.stop="toggleExpand(node)"
        />
        <!-- 优先显示slot -->
        <slot
          v-if="slots.default"
          :node="node"
        />
        <span v-else>{{ node.title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, useSlots } from 'vue';
import { useVirtualList } from '@vueuse/core';
import IconArrowDown from '../assets/icons/arrow-down.vue';

const slots = useSlots();
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
  currentId: { type: [String, Number], default: null }
});

// 高度
const tableStyles = computed(() => ({
  'height': `${props.treeHeight}px`,
  '--mx-tree-node-height': `${props.nodeHeight}px`
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
    overscan: 5
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

// 切换展开状态
const toggleExpand = node => {
  const newState = !expandedMap.get(node.id);
  expandedMap.set(node.id, newState);
};

// 左键点击节点
function onNodeClick(node) {
  if (node.children?.length) {
    toggleExpand(node);
  }
  if (node.id !== props.currentId) {
    emits('node-click', node);
  }
}

// 右键点击节点
function onNodeContextmenu(node, event) {
  emits('node-contextmenu', node, event);
}
</script>

<style lang="scss">
@use '../assets/styles/vars';
.mx-tree {
  flex: auto;
  overflow: hidden;
  &-node {
    display: flex;
    gap: 5px;
    align-items: center;
    height: var(--mx-tree-node-height);
    padding-right: 10px;
    font-size: 12px;
    cursor: pointer;
    &:hover,
    &.is-current {
      background-color: var(--mx-tree-node-active-bg-color);
    }
  }
  &-hidden {
    visibility: hidden;
  }
}
</style>
