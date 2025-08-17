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
  label: { type: [Number, String], default: null },
  // 选项类型：button 按钮
  type: { type: String, default: null },
  // 是否为行内模式
  inline: { type: Boolean, default: true },
  // 是否为块级模式
  block: { type: Boolean, default: false },
  // ---------- 原生属性 ----------
  disabled: { type: Boolean, default: false },
  // ---------- 选项组内部使用 ----------
  value: { type: [Number, String], default: null },
  option: { type: [Object, Number, String], default: null }
};

// 使用选项
export const useCheckbox = ({ checkboxType, checkboxGroup, checkbox }) => {
  // 区分类型
  const isCheckbox = checkboxType === 'checkbox';
  const optionValue = computed(() => checkbox.props.value);

  // 是否按钮
  const isBtn = computed(() => {
    return checkbox.props.type === 'button' || checkboxGroup?.props.optionType === 'button';
  });

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
      option: checkbox.props.option,
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
        'is-disabled': checkbox.props.disabled
      }
    ];
  });

  // 图标属性
  const iconComponent = isCheckbox ? IconCheckbox : IconRadio;

  return {
    isBtn,
    isChecked,
    onCheckedChange,
    rootClasses,
    iconComponent
  };
};
