// 选择器
import { ref, computed, inject } from 'vue';
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
  // 当前文本：优先级高于选中项的 `label`
  // 自定义选项时无法在组件内部获取选中项，必须指定一个文本
  label: { type: String, default: null },
  // 选择器尺寸：large, medium, small
  size: { type: String, default: 'medium' },
  // ---------- 原生属性 ----------
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  placeholder: { type: String, default: null }
};

// 使用选择器
export const useSelect = ({ triggerElRef, dropdownElRef, modelValue, props, emits }) => {
  // 继承
  const formRoot = inject('formRoot', null);

  // 状态
  const isDisabled = computed(() => props.disabled || formRoot?.props?.disabled);
  const isReadonly = computed(() => props.readonly || formRoot?.props?.readonly);

  // 触发器是否获取焦点
  const triggerIsFocused = ref(false);

  // 触发器类名
  const triggerClasses = computed(() => {
    return [
      `vui-select--${props.size}`,
      {
        'is-focus': triggerIsFocused.value,
        'is-readonly': isReadonly.value,
        'is-disabled': isDisabled.value
      }
    ];
  });

  // 点击触发器
  function onTriggerClick() {
    if (isDisabled.value || isReadonly.value) return;
    dropdownElRef.value?.open({ el: triggerElRef.value });
  }

  // 显示内容
  const innerText = computed(() => {
    if (props.label) {
      return props.label;
    } else {
      const selectedItem = formattedOptions.value?.find(item => item.value === modelValue.value);
      return selectedItem?.label;
    }
  });

  // 文本类名
  const innerClasses = computed(() => ({
    'vui-select-placeholder': !innerText.value
  }));

  // 图标属性
  const iconProps = computed(() => ({
    rotate: triggerIsFocused.value ? '180deg' : null
  }));

  // 打开/关闭下拉框时切换焦点
  function onDropdownToggle(visible) {
    triggerIsFocused.value = visible;
  }

  // 下拉框样式
  const { width: dropdownWidth } = useElementBounding(triggerElRef);
  const dropdownStyles = computed(() => ({
    width: `${dropdownWidth.value}px`
  }));

  // 格式化选项
  const formattedOptions = computed(() => {
    return props.options?.map(item => {
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

  // 选中选项
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
    triggerClasses,
    onTriggerClick,
    innerText,
    innerClasses,
    iconProps,
    onDropdownToggle,
    dropdownStyles,
    formattedOptions,
    onSelectOption
  };
};
