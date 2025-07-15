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
  // 前置图标：可选的值有 `<VIcon>` 组件的 `name` 属性值、`component` 属性值、完整的 `props` 对象
  icon: { type: [String, Object], default: null },
  // 输入框尺寸：medium, small
  size: { type: String, default: 'medium' }
};

// 使用输入框
export const useInput = ({ inputElRef, modelValue, props, emits }) => {
  // 是否获取焦点
  const { focused } = useFocus(inputElRef);

  // 点击根元素获取焦点
  function onRootClick() {
    focused.value = true;
  }

  // 根元素类名
  const rootClasses = computed(() => {
    return [
      `vui-input--${props.size}`,
      {
        'is-focus': focused.value
      }
    ];
  });

  // 输入值时
  function onInput(e) {
    // 参数为 事件对象、当前值，下同
    emits('input', { event: e, value: modelValue.value });
  }

  // 修改值时
  function onChange(e) {
    emits('change', { event: e, value: modelValue.value });
  }

  // 按下回车键时
  function onEnter(e) {
    focused.value = false;
    emits('enter', { event: e, value: modelValue.value });
  }

  // 清空输入框
  function clearValue(e) {
    modelValue.value = '';
    emits('clear', { event: e, value: '' });
  }

  return {
    rootClasses,
    onRootClick,
    onInput,
    onChange,
    onEnter,
    clearValue
  };
};
