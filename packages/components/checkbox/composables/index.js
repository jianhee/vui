// 多选框
import { computed, inject } from 'vue';

// emits
export const checkboxEmits = ['change'];
export const checkboxGroupEmits = ['change'];

// model
export const checkboxModel = { type: Boolean, default: false };
export const checkboxGroupModel = { type: [Array, Number, String], default: null };

// 多选框 props
export const checkboxProps = {
  // 选项文本
  label: { type: String, default: null },
  // 选项值：仅选项组有效
  option: { type: [Object, Number, String], default: null },
  // 选项类型：button 按钮
  type: { type: String, default: null },
  // 选项显示模式：行内模式（默认）、块级模式
  inline: { type: Boolean, default: true },
  block: { type: Boolean, default: false }
};

// 多选框组 props
export const checkboxGroupProps = {
  // 选项组：格式为 `[{ label, value }, 1, '1']`
  //  1. `Object.label` 选项文本
  //  2. `Object.value` 选项值
  //  3. `Number|String` 自动格式化为 `Object.label` 和 `Object.value`
  options: { type: Array, required: true },
  // 选项类型：button 按钮
  optionType: { type: String, default: null },
  // 选项显示模式：行内模式、块级模式（默认）
  optionInline: { type: Boolean, default: false },
  optionBlock: { type: Boolean, default: true }
};

// 选项方法
export function useCheckbox(checkbox) {
  const checkboxType = inject('checkboxType', 'checkbox');
  const checkboxGroup = inject('checkboxGroup', null);

  // 是否多选框
  const isCheckbox = checkboxType === 'checkbox';

  // 是否按钮
  const isBtn = computed(() => checkbox.props.type === 'button' || checkboxGroup.props?.optionType === 'button');

  // 是否块级
  const isBlock = computed(() => {
    if (isBtn.value) return false;
    if (!checkboxGroup) {
      return checkbox.props.block || !checkbox.props.inline;
    }
    return checkboxGroup.props.optionBlock && !checkboxGroup.props.optionInline;
  });

  // 获取类名
  const rootClasses = computed(() => {
    return [
      isBtn.value ? `vui-${checkboxType}-btn` : `vui-${checkboxType}`,
      {
        [`vui-${checkboxType}--block`]: isBlock.value,
        'is-checked': isChecked.value
      }
    ];
  });

  // 格式化选项
  const formatOption = computed(() => {
    // 单个选项
    if (!checkboxGroup) {
      return { label: checkbox.props.label };
    }
    // 选项组
    const option = checkbox.props.option;
    if (typeof option === 'object') {
      return option;
    } else {
      return { label: option, value: option };
    }
  });

  // 是否选中
  const isChecked = computed(() => {
    // 单个选项
    if (!checkboxGroup) {
      return checkbox.modelChecked.value;
    }
    // 选项组
    const checkedValue = checkboxGroup.modelValue.value;
    const optionValue = formatOption.value.value;
    if (isCheckbox) {
      return checkedValue?.includes(optionValue);
    } else {
      return checkedValue === optionValue;
    }
  });

  // 切换选中状态
  function onCheckedChange() {
    if (!checkboxGroup) {
      onCheckboxChange();
      return;
    }
    if (isCheckbox) {
      onCheckboxGroupChange();
    } else {
      onRadioGroupChange();
    }
  }

  // 切换单个选项
  function onCheckboxChange() {
    const newChecked = !isChecked.value;
    checkbox.modelChecked.value = newChecked;
    checkbox.emits('change', newChecked);
  }

  // 切换多选框组
  function onCheckboxGroupChange() {
    const checkedValues = checkboxGroup.modelValue.value || [];
    const optionValue = formatOption.value.value;
    const index = checkedValues.findIndex(value => value === optionValue);
    if (index === -1) {
      checkedValues.push(optionValue);
    } else {
      checkedValues.splice(index, 1);
    }
    onGroupChange(checkedValues);
  }

  // 切换单选框组
  function onRadioGroupChange() {
    const checkedValue = formatOption.value.value;
    onGroupChange(checkedValue);
  }

  // 切换选项组
  function onGroupChange(newValue) {
    checkbox.modelChecked.value = newValue;
    checkboxGroup.emits('change', {
      option: checkbox.props.option,
      value: newValue
    });
  }

  return {
    isCheckbox,
    isBtn,
    rootClasses,
    formatOption,
    isChecked,
    onCheckedChange
  };
}
