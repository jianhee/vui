// 多选框-选项组
import { computed } from 'vue';

// emits
export const checkboxGroupEmits = ['change'];

// v-model
export const checkboxGroupModel = {
  // 选中项的 `value`
  value: { type: [Array, Number, String], default: undefined }
};

// props
export const checkboxGroupProps = {
  // 选项数组 `Array[object|string|number]`
  // 1. `value` 选项值
  // 2. `label` 选项文本，为空时使用 `value` 的值
  // 3. `string|number` 类型的选项会格式化为 `{ value, label }`
  options: { type: Array, required: true },
  // 选项类型：button 按钮
  optionType: { type: String, default: undefined },
  // 选项是否为行内模式
  optionInline: { type: Boolean, default: false },
  // 选项是否为块级模式
  optionBlock: { type: Boolean, default: true }
};

// 使用选项组
export const useCheckboxGroup = ({ props }) => {
  // 格式化选项
  const formattedOptions = computed(() => {
    return props.options.map(option => {
      if (typeof option === 'object') {
        return { __vuiCheckboxOptionRawData__: option, ...option, label: option.label || option.value };
      } else {
        return { __vuiCheckboxOptionRawData__: option, label: option, value: option };
      }
    });
  });

  return { formattedOptions };
};
