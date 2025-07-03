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
  expandedNodeIds: { type: Array, default: null },
  // 校验是否是叶子节点
  // 1. 示例：item => boolean
  // 2. 参数为当前项，返回 `true` 表示是叶子节点
  isLeaf: { type: Function, default: null },
  // 加载子节点的方法
  // 1. 示例：({ node, item }) => Promise<boolean>
  // 2. 参数为当前节点和当前项，返回 `true` 表示加载成功
  loadNode: { type: Function, default: null }
};

// 使用表格
export const useTree = ({ props, treeDataRef }) => {
  // 节点状态管理
  const nodeMap = reactive(new Map());

  // 处理后的节点
  const flattenedNodes = computed(() => flattenTree());

  // 原始数据 => 扁平化数据（包含状态）
  function flattenTree() {
    const result = [];
    traverseItems(treeDataRef.value);
    function traverseItems(rawItems, level = 0) {
      rawItems?.forEach(rawItem => {
        // 处理当前节点
        const oldNode = nodeMap.get(rawItem.id);
        const newNode = {
          data: rawItem,
          level,
          isExpanded: oldNode ? oldNode.isExpanded : props.expandedNodeIds?.includes(rawItem.id),
          isLeaf: props.isLeaf?.(rawItem) || false,
          isLoading: oldNode?.isLoading || false,
          isLoaded: oldNode?.isLoaded || false
        };
        result.push(newNode);
        nodeMap.set(rawItem.id, newNode);

        // 处理子节点
        if (newNode.isExpanded) {
          if (newNode.isLeaf && !newNode.isLoaded) {
            loadChildren(newNode);
          } else if (rawItem.children) {
            traverseItems(rawItem.children, level + 1);
          }
        }
      });
    }

    return result;
  }

  // 加载子集
  async function loadChildren(node) {
    const { data, isLoading, isLoaded } = node;
    if (isLoading || isLoaded) return;

    // 更新加载状态
    nodeMap.set(data.id, { ...node, isLoading: true });

    // 加载数据
    const isSuccess = await props.loadNode?.({
      node,
      item: node.data
    });

    // 区分加载结果
    nodeMap.set(data.id, {
      ...node,
      isExpanded: isSuccess,
      isLoading: false,
      isLoaded: isSuccess
    });
  }

  // 根元素样式
  const treeRootStyles = computed(() => ({
    'height': `${props.treeHeight}px`,
    '--vui-tree-node-height': `${props.nodeHeight}px`
  }));

  return {
    nodeMap,
    flattenedNodes,
    loadChildren,
    treeRootStyles
  };
};
