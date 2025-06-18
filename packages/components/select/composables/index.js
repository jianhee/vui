// 选择器
import { computed } from 'vue';
import { useFocus } from '@vueuse/core';

// emits
export const selectEmits = ['change'];

// v-model
export const selectModel = {
  // 选择器的值
  value: { type: [String, Number], default: null }
};

// props
export const selectProps = {
  // 选项组 `[Object|Number|String]`
  // 1. `Object.value` 选项值
  // 2. `Object.label` 选项文本，为空时使用 `Object.value` 的值
  // 3. `Number|String` 类型会格式化为 `Object.value` 和 `Object.label`
  options: { type: Array, default: null },
  // 尺寸：medium, small
  size: { type: String, default: 'medium' },
  // 单独处理的原生属性
  disabled: { type: Boolean, default: false }
};

// use
export const useSelect = ({ selectRef, modelValue, props, emits }) => {
  // 是否获取焦点
  const { focused } = useFocus(selectRef);

  // 格式化选项
  const formattdOptions = computed(() => {
    return props.options.map(item => {
      if (typeof item === 'object') {
        return { ...item, label: item.label || item.value };
      } else {
        return { label: item, value: item };
      }
    });
  });

  // 获取类名
  const wraperClasses = computed(() => {
    return [
      'vui-select',
      `vui-select--${props.size}`,
      {
        'is-disabled': props.disabled,
        'is-focus': focused.value
      }
    ];
  });

  // 修改值
  function onValueChange() {
    const index = formattdOptions.value.findIndex(item => item.value === modelValue.value);
    emits('change', {
      value: modelValue.value,
      option: props.options[index]
    });
  }

  return {
    wraperClasses,
    formattdOptions,
    onValueChange
  };
};
