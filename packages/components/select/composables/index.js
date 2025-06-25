// 选择器
import { computed } from 'vue';
import { useFocus } from '@vueuse/core';

// emits
export const selectEmits = ['change'];

// v-model
export const selectModel = {
  // 选中项的 `value`
  value: { type: [String, Number], default: null }
};

// props
export const selectProps = {
  // 选项数组 `Array[object|string|number]`
  // 1. `value` 选项值
  // 2. `label` 选项文本，为空时使用 `value` 的值
  // 3. `string|number` 类型的选项会格式化为 `{ value, label }`
  options: { type: Array, default: null },
  // 选项数组：medium, small
  size: { type: String, default: 'medium' },
  // 单独处理的原生属性
  disabled: { type: Boolean, default: false }
};

// 使用选择器
export const useSelect = ({ selectEl, modelValue, props, emits }) => {
  // 是否获取焦点
  const { focused } = useFocus(selectEl);

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

  // 修改值
  function onChange() {
    const index = formattdOptions.value.findIndex(item => item.value === modelValue.value);
    // 参数为 当前项、当前项的 value、选中项的 value
    emits('change', {
      option: props.options[index],
      value: formattdOptions.value[index].value,
      selectedValue: modelValue.value
    });
  }

  // 根元素类名
  const rootClasses = computed(() => {
    return [
      'vui-select',
      `vui-select--${props.size}`,
      {
        'is-disabled': props.disabled,
        'is-focus': focused.value
      }
    ];
  });

  return {
    formattdOptions,
    onChange,
    rootClasses
  };
};
