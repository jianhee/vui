// 树
import { reactive, computed } from 'vue';

// emits
export const treeEmits = ['node-click', 'node-contextmenu'];

// props
export const treeProps = {
  // ---------- 树属性 ----------
  // 树数据 `Array[Object]`
  //  1. `id` 节点唯一标识，必填
  //  2. `title` 节点标题，默认使用 `title` 的值渲染单元格
  data: { type: Array, default: null },
  // 树高度：不带单位时默认 `px`
  // 必须使用此属性或 CSS 限制高度，否则会渲染全部数据
  treeHeight: { type: [String, Number], default: null },
  // 树整体缩进
  treeIndent: { type: Number, default: 0 },
  // ---------- 节点属性 ----------
  // 节点高度：用于计算虚拟列表的显示内容
  nodeHeight: { type: Number, default: 30 },
  // 节点缩进
  nodeIndent: { type: Number, default: 15 },
  // 当前节点 `id`，用于高亮当前节点
  currentNodeId: { type: [String, Number], default: null },
  // 默认展开的节点 `id`
  expandNodeIds: { type: Array, default: null }
};

// 使用表格
export const useTree = ({ props, treeDataRef }) => {
  // 展开的节点
  const expandIdArr = props.expandNodeIds?.map(id => [id, true]);
  const expandIdMap = reactive(new Map(expandIdArr));

  // 扁平化的树数据
  const flattenedTree = computed(() => flattenTree(treeDataRef.value));
  function flattenTree(nodes, level = 0) {
    const result = [];
    nodes?.forEach(node => {
      // 当前节点
      const formatted = {
        ...node,
        level,
        isExpanded: expandIdMap.get(node.id)
      };
      result.push(formatted);

      // 子节点
      if (formatted.children && formatted.isExpanded) {
        const children = flattenTree(formatted.children, level + 1);
        result.push(...children);
      }
    });
    return result;
  }

  // 根元素样式
  const treeRootStyles = computed(() => ({
    'height': `${props.treeHeight}px`,
    '--vui-tree-node-height': `${props.nodeHeight}px`
  }));

  return {
    expandIdMap,
    flattenedTree,
    treeRootStyles
  };
};
