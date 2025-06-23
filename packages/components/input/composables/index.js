// 输入框
import { computed } from 'vue';
import { useFocus } from '@vueuse/core';

// emits
export const inputEmits = ['input', 'change', 'enter', 'clear'];

// v-model
export const inputModel = {
  // 输入框的值
  value: { type: String, default: null }
};

// props
export const inputProps = {
  // 前置图标：`<VIcon>` 组件的 `name|component|props`
  icon: { type: [String, Object], default: null },
  // 尺寸：medium, small
  size: { type: String, default: 'medium' },
  // 单独处理的原生属性
  disabled: { type: Boolean, default: false }
};

// 使用输入框
export const useInput = ({ inputEl, modelValue, props, emits }) => {
  // 是否获取焦点
  const { focused } = useFocus(inputEl);

  // 是否显示清除按钮
  const isShowClearIcon = computed(() => {
    return !!modelValue.value && !props.disabled;
  });

  // 获取类名
  const wraperClasses = computed(() => {
    return [
      'vui-input',
      `vui-input--${props.size}`,
      {
        'is-disabled': props.disabled,
        'is-focus': focused.value
      }
    ];
  });

  // 输入值
  function onValueInput() {
    emits('input', modelValue.value);
  }

  // 修改值
  function onValueChange() {
    emits('change', modelValue.value);
  }

  // 按下 `Enter` 键
  function onKeyupEnter() {
    focused.value = false;
    emits('enter', modelValue.value);
  }

  // 清空值
  function onClearValue() {
    modelValue.value = '';
    emits('clear', '');
  }

  return {
    focused,
    wraperClasses,
    isShowClearIcon,
    onValueInput,
    onValueChange,
    onKeyupEnter,
    onClearValue
  };
};
