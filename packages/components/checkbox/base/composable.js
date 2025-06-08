// 多选框/单选框

// emits
export const optionEmits = ['change'];
export const groupEmits = ['change'];

// 单个选项的 props
export const optionProps = {
  // 选项文本
  label: { type: String, default: null },
  // 选项值：仅选项组有效
  option: { type: Object, default: null },
  // 选项类型：button 按钮
  type: { type: String, default: undefined },
  // 显示模式：默认行内模式
  block: { type: Boolean, default: false },
  inline: { type: Boolean, default: true }
};

// 选项组的 props
export const groupProps = {
  // 选项组：数组项的格式为 `Object|Number|String`
  //  1. 选项的文本和值不同 `[{ label: '文本', value: '值' }]`
  //  2. 选项的文本和值相同 `[1, 2, 3, 4]`
  options: { type: Array, required: true },
  // 选项类型：button 按钮
  optionType: { type: String, default: undefined },
  // 显示模式：子选项默认块级模式
  optionInline: { type: Boolean, default: false },
  optionBlock: { type: Boolean, default: true }
};
