<!-- 树组件：支持虚拟列表 -->
<template>
  <div
    class="mx-tree"
    :style="{ height: height }"
  >
    <!-- 滚动区域 -->
    <div
      class="mx-tree-scrollbar"
      v-bind="scrollbarProps"
    >
      <!-- 虚拟列表区域 -->
      <div
        class="mx-tree-body"
        v-bind="bodyProps"
      >
        <!-- 行 -->
        <div
          v-for="{ data: node } in virtualList"
          :key="node.id"
          class="mx-tree-node"
          :class="{ 'is-current': node.id === currentId }"
          :style="{ paddingLeft: `${props.treeIndent + node.level * nodeIndent}px` }"
          @click.stop="onNodeClick(node)"
          @contextmenu.prevent="onNodeContextmenu(node, $event)"
        >
          <!-- 折叠图标 -->
          <MxIcon
            :component="IconArrowDown"
            size="16"
            :rotate="node.isExpanded ? null : -90"
            :class="{ 'mx-tree-hidden': !node.childrenFilter?.length }"
            @click.stop="onNodeToggle(node)"
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
  </div>
</template>

<script setup>
import { ref, watch, useSlots } from 'vue';
import { useVirtualList } from '@vueuse/core';
import IconArrowDown from '../assets/icons/arrow-down.vue';

const slots = useSlots();
const emits = defineEmits(['node-click', 'node-contextmenu']);

// 参数
const props = defineProps({
  // 高度
  height: { type: String, default: null },
  // 全量树数据
  data: { type: Array, default: () => [] },
  // 当前 ID
  currentId: { type: [String, Number], default: null },
  // 缩进
  treeIndent: { type: Number, default: 10 },
  nodeIndent: { type: Number, default: 15 }
});

// 保存展开状态
const expandedMap = ref(new Map());

// 扁平化树结构
const flattenedNodes = ref([]);
const flattenTree = (nodes, level = 0) => {
  const result = [];
  nodes?.forEach(node => {
    // 当前节点
    const formatted = {
      ...node,
      level,
      isExpanded: expandedMap.value.get(node.id),
      // children是原始子集，childrenFilter是父组件中过滤后的子集
      childrenFilter: node.childrenFilter || node.children
    };
    result.push(formatted);

    // 子集
    if (formatted.isExpanded && formatted.childrenFilter) {
      const childrenFilter = flattenTree(formatted.childrenFilter, level + 1, formatted);
      result.push(...childrenFilter);
    }
  });
  return result;
};

// 数据变化时重新处理数据
watch(
  () => props.data,
  newData => {
    flattenedNodes.value = flattenTree(newData);
  },
  { immediate: true }
);

// 虚拟列表
const {
  list: virtualList,
  containerProps: scrollbarProps,
  wrapperProps: bodyProps
} = useVirtualList(flattenedNodes, {
  itemHeight: 30,
  overscan: 5
});

// 展开/折叠节点
const onNodeToggle = node => {
  const newState = !node.isExpanded;
  expandedMap.value.set(node.id, newState);
  flattenedNodes.value = flattenTree(props.data);
};

// 左键点击节点
function onNodeClick(node) {
  if (node.childrenFilter?.length) {
    onNodeToggle(node);
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
  display: flex;
  flex: auto;
  flex-direction: column;
  overflow: hidden;
  &-scrollbar {
    flex: auto;
  }
  &-node {
    display: flex;
    gap: 5px;
    align-items: center;
    height: 30px;
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
