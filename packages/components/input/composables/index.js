// 输入框
import { ref, computed } from 'vue';
import { useElementHover, useFocus } from '@vueuse/core';

// emits
export const inputEmits = ['input', 'change', 'enter', 'clear'];

// v-model
export const inputModel = {
  // 输入框的值
  value: { type: String, default: null }
};

// props
export const inputProps = {
  // 是否显示清除按钮
  clearable: { type: Boolean, default: false },
  // 是否显示切换密码按钮（仅密码类型有效）
  showPassword: { type: Boolean, default: false },
  // 前置图标：可选的值有 `<VIcon>` 组件的 `name` 属性值、`component` 属性值、完整的 `props` 对象
  icon: { type: [String, Object], default: null },
  // 输入框尺寸：large, medium, small
  size: { type: String, default: 'medium' },
  // ---------- 原生属性 ----------
  autofocus: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  maxlength: { type: String, default: null },
  placeholder: { type: String, default: null },
  type: { type: String, default: 'text' }
};

// 使用输入框
export const useInput = ({ rootElRef, inputElRef, modelValue, props, emits }) => {
  // 状态
  const isHovered = useElementHover(rootElRef);
  const { focused } = useFocus(inputElRef);

  // 根元素类名
  const rootClasses = computed(() => {
    return [
      `vui-input--${props.size}`,
      {
        'is-focus': focused.value,
        'is-disabled': props.disabled
      }
    ];
  });

  // 点击根元素
  function onRootClick() {
    focused.value = true;
  }

  // 是否显示切换密码按钮
  const isShowPassword = computed(() => {
    return props.showPassword && props.type === 'password';
  });

  // 点击切换密码按钮
  const passwordVisible = ref(false);
  function onClickToggleIcon() {
    passwordVisible.value = !passwordVisible.value;
  }

  // 输入框类型
  const inputType = computed(() => {
    return passwordVisible.value ? 'text' : props.type;
  });

  // 是否显示清除按钮
  const isShowClear = computed(() => {
    return props.clearable && (isHovered.value || focused.value);
  });

  // 点击清除按钮
  function onClickClearIcon(e) {
    modelValue.value = '';
    focused.value = true;
    emits('clear', { event: e, value: '' });
  }

  // 输入值时
  // 参数为 事件对象、当前值，下同
  function onInput(e) {
    emits('input', { event: e, value: modelValue.value });
  }

  // 修改值时
  function onChange(e) {
    emits('change', { event: e, value: modelValue.value });
  }

  // 按下回车键时
  function onEnter(e) {
    emits('enter', { event: e, value: modelValue.value });
  }

  return {
    rootClasses,
    onRootClick,
    inputType,
    isShowPassword,
    onClickToggleIcon,
    isShowClear,
    onClickClearIcon,
    onInput,
    onChange,
    onEnter
  };
};
