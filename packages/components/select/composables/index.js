// 选择器
import { ref, computed, inject } from 'vue';
import { useFocus, useElementBounding, useElementHover } from '@vueuse/core';

// emits
export const selectEmits = ['change', 'clear'];

// v-model
export const selectModel = {
  // 选中项的 `value`
  value: { type: [String, Number], default: undefined }
};

// props
export const selectProps = {
  // 选项数组 `Array[object|string|number]`
  // 1. `value` 选项值
  // 2. `label` 选项文本，为空时使用 `value` 的值
  // 3. `string|number` 类型的选项会格式化为 `{ value, label }`
  options: { type: Array, default: undefined },
  // 是否显示清除按钮
  clearable: { type: Boolean, default: false },
  // 选择器尺寸：large, medium, small
  size: { type: String, default: 'medium' },
  // ---------- 原生属性 ----------
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  placeholder: { type: String, default: undefined }
};

// 使用选择器
export const useSelect = ({ triggerElRef, modelValue, props, emits }) => {
  // 继承
  const formRoot = inject('vuiFormRoot', null);

  // 组件状态
  const isDisabled = computed(() => props.disabled || formRoot?.props?.disabled);
  const isReadonly = computed(() => props.readonly || formRoot?.props?.readonly);
  const isEnabled = computed(() => !isDisabled.value && !isReadonly.value);

  // 触发元素
  const { focused: isFocused } = useFocus(triggerElRef);
  const isHovered = useElementHover(triggerElRef);
  const triggerClasses = computed(() => [
    `vui-select--${props.size}`,
    {
      'vui-select--placeholder': !selectedOptionLabel.value,
      'is-disabled': isDisabled.value,
      'is-focus': isFocused.value && isEnabled.value
    }
  ]);

  // 箭头图标
  const expandIconRotate = computed(() => (isDropdownVisible.value ? '180deg' : undefined));

  // 清除按钮
  const isShowClearIcon = computed(() => props.clearable && modelValue.value && isEnabled.value && (isFocused.value || isHovered.value));
  function onClickClearIcon(e) {
    modelValue.value = undefined;
    isFocused.value = true;
    emits('clear', { event: e, value: undefined });
  }

  // 打开/关闭下拉菜单
  const isDropdownVisible = ref(false);
  const onVisibleChange = visible => (isDropdownVisible.value = visible);

  // 下拉菜单宽度
  const { width: triggerWidth } = useElementBounding(triggerElRef);
  const dropdownStyles = computed(() => ({
    width: `${triggerWidth.value}px`
  }));

  // 格式化选项
  const formattedOptions = computed(() => {
    return props.options?.map(item => {
      if (typeof item === 'object') {
        return { __vuiSelectOptionRawData__: item, ...item, label: item.label || item.value, key: item.key || item.value };
      } else {
        return { __vuiSelectOptionRawData__: item, label: item, value: item, key: item };
      }
    });
  });

  // 选中项文本
  const selectedOptionLabel = computed(() => {
    const selectedItem = formattedOptions.value?.find(item => item.value === modelValue.value);
    return selectedItem?.label;
  });

  // 选中选项
  function onSelectOption({ item }) {
    const value = item.value;
    modelValue.value = value;
    isFocused.value = true;

    // 参数为 当前项、当前项的 value、选中项的 value
    emits('change', {
      option: item.__vuiSelectOptionRawData__,
      value,
      selectedValue: value
    });
  }

  return {
    triggerClasses,
    isEnabled,
    expandIconRotate,
    isShowClearIcon,
    dropdownStyles,
    formattedOptions,
    selectedOptionLabel,
    onClickClearIcon,
    onVisibleChange,
    onSelectOption
  };
};
