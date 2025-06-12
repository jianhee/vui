// 多选框
import { computed, inject } from 'vue';
import IconCheckbox from '../../../icons/checkbox.vue';
import IconRadio from '../../../icons/radio.vue';

// emits
export const checkboxEmits = ['change'];
export const checkboxGroupEmits = ['change'];

// 多选框 v-model
export const checkboxModel = {
  // 是否选中
  checked: { type: Boolean, default: false }
};

// 多选框组 v-model
export const checkboxGroupModel = {
  // 选中值
  value: { type: [Array, Number, String], default: null }
};

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
  // 选项组：支持 `[Object|Number|String]` 类型
  // 1. `Object.label` 选项文本，为空时使用 `value` 的值
  // 2. `Object.value` 选项值
  // 3. `Number|String` 格式化为 `Object.label` 和 `Object.value`
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

  // 区分类型
  const isCheckbox = checkboxType === 'checkbox';
  const IconComponent = isCheckbox ? IconCheckbox : IconRadio;

  // 是否按钮
  const isBtn = computed(() => checkbox.props.type === 'button' || checkboxGroup?.props.optionType === 'button');

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
  const formattedOption = computed(() => {
    // 单个选项
    if (!checkboxGroup) {
      return { label: checkbox.props.label };
    }
    // 选项组
    const option = checkbox.props.option;
    if (typeof option === 'object') {
      return { ...option, label: option.label || option.value };
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
    const optionValue = formattedOption.value.value;
    if (isCheckbox) {
      return checkedValue?.includes(optionValue);
    } else {
      return checkedValue === optionValue;
    }
  });

  // 切换选中状态
  function onCheckedChange() {
    // 单个选项
    if (!checkboxGroup) {
      onCheckboxChange();
      return;
    }
    // 选项组
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
    const optionValue = formattedOption.value.value;
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
    const checkedValue = formattedOption.value.value;
    onGroupChange(checkedValue);
  }

  // 切换选项组
  function onGroupChange(newValue) {
    checkboxGroup.modelValue.value = newValue;
    checkboxGroup.emits('change', {
      option: checkbox.props.option,
      value: newValue
    });
  }

  return {
    checkboxType,
    IconComponent,
    isBtn,
    rootClasses,
    formattedOption,
    isChecked,
    onCheckedChange
  };
}
