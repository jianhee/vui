// 多选框-选项组

// emits
export const checkboxGroupEmits = ['change'];

// v-model
export const checkboxGroupModel = {
  // 选中项的 `value`
  value: { type: [Array, Number, String], default: null }
};

// props
export const checkboxGroupProps = {
  // 选项数组 `Array[object|string|number]`
  // 1. `value` 选项值
  // 2. `label` 选项文本，为空时使用 `value` 的值
  // 3. `string|number` 类型的选项会格式化为 `{ value, label }`
  options: { type: Array, required: true },
  // 选项类型：button 按钮
  optionType: { type: String, default: null },
  // 是否为行内模式
  optionInline: { type: Boolean, default: false },
  // 是否为块级模式
  optionBlock: { type: Boolean, default: true }
};
