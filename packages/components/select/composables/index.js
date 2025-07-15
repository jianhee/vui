// 选择器
import { ref, computed } from 'vue';
import { useElementBounding } from '@vueuse/core';

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
  // 选择器尺寸：medium, small
  size: { type: String, default: 'medium' },
  // ---------- 原生属性 ----------
  disabled: { type: Boolean, default: false },
  placeholder: { type: String, default: null }
};

// 使用选择器
export const useSelect = ({ rootElRef, dropdownElRef, modelValue, props, emits }) => {
  // 是否获取焦点
  const focused = ref(false);

  // 根元素类名
  const rootClasses = computed(() => {
    return [
      `vui-select--${props.size}`,
      {
        'is-focus': focused.value,
        'is-disabled': props.disabled
      }
    ];
  });

  // 点击根元素打开下拉框
  function onRootClick() {
    if (props.disabled) return;
    dropdownElRef.value.open({ el: rootElRef.value });
  }

  // 图标角度
  const iconRotate = computed(() => (focused.value ? '180deg' : null));

  // 打开/关闭下拉框时切换焦点
  function onVisibleChange(visible) {
    focused.value = visible;
  }

  // 下拉框样式
  const { width: dropdownWidth } = useElementBounding(rootElRef);
  const dropdownStyles = computed(() => ({
    width: `${dropdownWidth.value}px`
  }));

  // 格式化选项
  const formattedOptions = computed(() => {
    return props.options.map(item => {
      // 对象格式
      if (typeof item === 'object') {
        return {
          ...item,
          label: item.label || item.value,
          key: item.key || item.value,
          rawItem: item
        };
      }
      // 其它格式
      return {
        label: item,
        value: item,
        key: item,
        rawItem: item
      };
    });
  });

  // 选中项
  const selectedOption = computed(() => {
    return formattedOptions.value.find(item => item.value === modelValue.value);
  });

  // 点击选项
  function onSelectOption({ item }) {
    const value = item.value;

    // 更新值
    modelValue.value = value;

    // 参数为 当前项、当前项的 value、选中项的 value
    emits('change', {
      option: item.rawItem,
      value,
      selectedValue: value
    });
  }

  return {
    rootClasses,
    onRootClick,
    iconRotate,
    onVisibleChange,
    dropdownStyles,
    formattedOptions,
    selectedOption,
    onSelectOption
  };
};
