// 多选框/单选框
import { computed } from 'vue';

// emits
export const optionEmits = ['change'];
export const groupEmits = ['change'];

// 单个选项的 props
export const optionProps = {
  // 选项文本
  label: { type: String, default: null },
  // 选项值：仅选项组有效
  option: { type: [Object, Number, String], default: null },
  // 选项类型：button 按钮
  type: { type: String, default: undefined },
  // 显示模式：默认行内模式
  block: { type: Boolean, default: false },
  inline: { type: Boolean, default: true }
};

// 选项组的 props
export const groupProps = {
  // 选项组：格式为 `[{ label, value }, 1, '1']`
  //  1. `Object.label` 选项文本
  //  2. `Object.value` 选项值
  //  3. `Number|String` 自动格式化为 `Object.label` 和 `Object.value`
  options: { type: Array, required: true },
  // 选项类型：button 按钮
  optionType: { type: String, default: undefined },
  // 显示模式：子选项默认块级模式
  optionInline: { type: Boolean, default: false },
  optionBlock: { type: Boolean, default: true }
};

// 格式化选项
export function useOption(props) {
  const formatOption = computed(() => {
    // 单个选项
    if (props.label) {
      return { label: props.label };
    }
    // 选项组
    if (typeof props.option === 'object') {
      return props.option;
    } else {
      return { label: props.option, value: props.option };
    }
  });

  return { formatOption };
}
