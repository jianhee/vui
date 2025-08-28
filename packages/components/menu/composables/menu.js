// 菜单

// emits
export const menuEmits = ['click', 'select'];

// v-model
export const menuModel = {
  // 选中项的 `key`
  selectedKey: { type: [String, Number], default: null }
};

// props
export const menuProps = {
  // 菜单项 `Array[object|string|number]`
  // - `key` 唯一标识
  // - `label|title` 文本
  // - `icon` 前置图标 VIcon.props.icon
  // - `iconProps` 前置图标的属性 VIcon.props
  // - `divider` 是否添加分隔符
  // - `string|number` 类型的菜单项会格式化为 `{ label }`
  items: { type: Array, default: null },
  // 是否可选中
  // 可选时会记录选中值，所以菜单项的 `key` 必填
  selectable: { type: Boolean, default: false }
};
