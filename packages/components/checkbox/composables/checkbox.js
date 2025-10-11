// 多选框-单个选项
import { inject, computed } from 'vue';

// emits
export const checkboxEmits = ['change'];

// v-model
export const checkboxModel = {
  // 是否选中
  checked: { type: Boolean, default: false }
};

// 选项的 props
export const checkboxProps = {
  // ---------- 单个选项使用 ----------
  // 选项文本
  label: { type: [Number, String], default: null },
  // 选项类型：button 按钮
  type: { type: String, default: null },
  // 是否为行内模式
  inline: { type: Boolean, default: true },
  // 是否为块级模式
  block: { type: Boolean, default: false },
  // ---------- 选项组使用 ----------
  formattedOption: { type: Object, default: null }
};

// 选项和选项组都有的 props
export const commonProps = {
  // ---------- 原生属性 ----------
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false }
};

// 使用选项
export const useCheckbox = checkbox => {
  // 继承
  const formRoot = inject('vuiFormRoot', null);
  const checkboxType = inject('vuiCheckboxType', 'checkbox');
  const checkboxGroup = inject('vuiCheckboxGroup', null);

  // 区分类型
  const isCheckbox = checkboxType === 'checkbox';

  // 继承状态
  const isBtn = computed(() => checkbox.props.type === 'button' || checkboxGroup?.props.optionType === 'button');
  const isDisabled = computed(() => checkbox.props.disabled || checkboxGroup?.props?.disabled || formRoot?.props?.disabled);
  const isReadonly = computed(() => checkbox.props.readonly || checkboxGroup?.props?.readonly || formRoot?.props?.readonly);

  // 继承数据
  const optionLabel = computed(() => checkbox.props.label || checkbox.props.formattedOption.label);
  const optionValue = computed(() => checkbox.props.formattedOption.value);

  // 是否选中
  const isChecked = computed(() => {
    // 单个选项
    if (!checkboxGroup) {
      return checkbox.modelChecked.value;
    }
    // 选项组
    const checkedValue = checkboxGroup.modelValue.value;
    if (isCheckbox) {
      return checkedValue?.includes(optionValue.value);
    } else {
      return checkedValue === optionValue.value;
    }
  });

  // 切换选中状态
  function onCheckedChange(event) {
    // 单个选项
    if (!checkboxGroup) {
      onSingleChange(event);
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
  function onSingleChange(event) {
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
    const index = checkedValues.findIndex(value => value === optionValue.value);
    if (index === -1) {
      checkedValues.push(optionValue.value);
    } else {
      checkedValues.splice(index, 1);
    }
    onGroupChange(checkedValues);
  }

  // 切换单选框组
  function onRadioGroupChange() {
    const newValue = optionValue.value;
    onGroupChange(newValue);
  }

  // 切换选项组
  function onGroupChange(newValue) {
    checkboxGroup.modelValue.value = newValue;
    // 参数为 当前项、当前项的 value、选中项的 value
    checkboxGroup.emits('change', {
      option: checkbox.props.formattedOption.__rawData__,
      value: optionValue.value,
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
        'is-disabled': isDisabled.value
      }
    ];
  });

  return {
    isBtn,
    isDisabled,
    isReadonly,
    isChecked,
    optionLabel,
    rootClasses,
    onCheckedChange
  };
};
