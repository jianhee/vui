// 图标相关的方法

/**
 * 获取图标组件的 props
 * @param {Object|String} iconProp  - 图标组件的 name/component/props
 * @returns {Object}                - 图标组件的 props
 */
export function getIconProps(iconProp) {
  if (!iconProp) return null;

  // 传入 name
  // icon="close"
  // icon="{ default: 'close', hover: 'close-hover' }"
  if (typeof iconProp === 'string' || typeof iconProp.default === 'string') {
    return { name: iconProp };
  }

  // 传入 component
  if (iconProp.render || iconProp.default?.render) {
    return { component: iconProp };
  }

  // 传入 props
  // icon="{ name: 'close' }"
  // icon="{ name: { default: 'close', hover: 'close-hover' } }"
  return iconProp;
}
