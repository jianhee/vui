// 触发元素
import { cloneVNode, Fragment, Comment, Text, defineComponent } from 'vue';
export default defineComponent({
  setup(_, { slots, attrs }) {
    return () => {
      const defaultSlot = slots.default?.(attrs);

      // 触发元素有且只能有一个子元素
      if (!defaultSlot) return null;
      if (defaultSlot.length > 1) return null;

      // 获取触发元素
      const firstLegitNode = findFirstLegitChild(defaultSlot);
      if (!firstLegitNode) return null;

      // 渲染触发元素
      return cloneVNode(firstLegitNode, attrs);
    };
  }
});

// 获取触发元素
function findFirstLegitChild(node) {
  // 空
  if (!node) return null;

  // 遍历子节点
  const children = node;
  for (const child of children) {
    // 子节点是对象
    if (typeof child === 'object') {
      switch (child.type) {
        // 注释节点：忽略
        case Comment:
          continue;
        // 文本节点
        // SVG 节点：包装一个span标签
        case Text:
        case 'svg':
          return wrapTextContent(child);
        // 片段节点：递归查找
        case Fragment:
          return findFirstLegitChild(child.children);
        default:
          // 元素节点：直接返回
          return child;
      }
    }

    // 其它类型：包装一个span标签
    return wrapTextContent(child);
  }

  // 没有合法子节点
  return null;
}

// 包装文本内容：添加一个span标签
function wrapTextContent(s) {
  return `<span>${s}</span>`;
}
