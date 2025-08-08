// 多选框-单个选项
import { computed } from 'vue';
import IconCheckbox from '../../../icons/checkbox.vue';
import IconRadio from '../../../icons/radio.vue';

// emits
export const checkboxEmits = ['change'];

// v-model
export const checkboxModel = {
  // 是否选中
  checked: { type: Boolean, default: false }
};

// props
export const checkboxProps = {
  // 选项文本
  label: { type: String, default: null },
  // 选项值（仅选项组有效）
  option: { type: [Object, Number, String], default: null },
  // 选项类型：button 按钮
  type: { type: String, default: null },
  // 是否为行内模式
  inline: { type: Boolean, default: true },
  // 是否为块级模式
  block: { type: Boolean, default: false },
  // ---------- 原生属性 ----------
  disabled: { type: Boolean, default: false }
};

// 使用选项
export const useCheckbox = ({ checkboxType, checkboxGroup, checkbox }) => {
  // 区分类型
  const isCheckbox = checkboxType === 'checkbox';

  // 是否按钮
  const isBtn = computed(() => {
    return checkbox.props.type === 'button' || checkboxGroup?.props.optionType === 'button';
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
  function onCheckedChange(event) {
    // 单个选项
    if (!checkboxGroup) {
      onCheckboxChange(event);
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
  function onCheckboxChange(event) {
    // 新值
    const newChecked = !isChecked.value;
    // 更新值
    checkbox.modelChecked.value = newChecked;
    // 参数为 事件对象、是否选中
    checkbox.emits('change', { event, checked: newChecked });
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
    // 参数为 当前项、当前项的 value、选中项的 value
    checkboxGroup.emits('change', {
      option: checkbox.props.option,
      value: formattedOption.value.value,
      checkedValue: newValue
    });
  }

  // 是否使用块级样式
  const isUseBlock = computed(() => {
    if (isBtn.value) return false;
    if (!checkboxGroup) {
      return checkbox.props.block || !checkbox.props.inline;
    }
    return checkboxGroup.props.optionBlock && !checkboxGroup.props.optionInline;
  });

  // 根元素类名
  const rootClasses = computed(() => {
    return [
      isBtn.value ? `vui-${checkboxType}-btn` : `vui-${checkboxType}-default`,
      {
        [`vui-${checkboxType}--block`]: isUseBlock.value,
        'is-checked': isChecked.value,
        'is-disabled': checkbox.props.disabled
      }
    ];
  });

  // 图标属性
  const iconComponent = isCheckbox ? IconCheckbox : IconRadio;

  // 显示文本
  const labelText = computed(() => formattedOption.value.label);

  return {
    isBtn,
    isChecked,
    onCheckedChange,
    rootClasses,
    iconComponent,
    labelText
  };
};
