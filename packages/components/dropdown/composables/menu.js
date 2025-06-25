// 菜单

// emits
export const menuEmits = ['select', 'selection-change'];

// v-model
export const menuModel = {
  // 选中项的 `key`
  selectedKey: { type: [String, Number], default: null }
};

// props
export const menuProps = {
  // 菜单项 `Array[object|string|number]`
  // 1. `key` 唯一标识
  // 2. `label|title` 文本
  // 3. `icon` 前置图标
  // 4. `divider` 是否添加分隔符
  // 5. `string|number` 类型的菜单项会格式化为 `{ label }`
  menus: { type: Array, default: null },
  // 菜单是否可选
  // 可选时会记录选中值，所以菜单项的 `key` 必传
  selectable: { type: Boolean, default: false }
};
