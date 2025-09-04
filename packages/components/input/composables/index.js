// 输入框
import { ref, computed, inject } from 'vue';
import { useElementHover, useFocus, useEventListener } from '@vueuse/core';
import VIcon from '../../icon/icon.vue';

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
  // 前置/后置图标
  prefixIcon: VIcon.props.icon,
  prefixIconProps: VIcon.props,
  suffixIcon: VIcon.props.icon,
  suffixIconProps: VIcon.props,
  // 前置/后置内容
  prefix: { type: [String, Number], default: null },
  suffix: { type: [String, Number], default: null },
  // 前置/后置标签
  prepend: { type: [String, Number], default: null },
  append: { type: [String, Number], default: null },
  // 输入框尺寸：large, medium, small
  size: { type: String, default: 'medium' },
  // ---------- 原生属性 ----------
  autofocus: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  maxlength: { type: String, default: null },
  placeholder: { type: String, default: null },
  type: { type: String, default: 'text' }
};

// 使用输入框
export const useInput = ({ wraperElRef, inputElRef, modelValue, props, emits }) => {
  // 继承
  const formRoot = inject('formRoot', null);

  // 状态
  const isDisabled = computed(() => props.disabled || formRoot?.props?.disabled);
  const isReadonly = computed(() => props.readonly || formRoot?.props?.readonly);

  // 根元素类名
  const rootClasses = computed(() => {
    return [`vui-input--${props.size}`, { 'is-disabled': isDisabled.value }];
  });

  // 中间元素状态
  const isHovered = useElementHover(wraperElRef);
  const { focused } = useFocus(inputElRef);
  useEventListener(wraperElRef, 'click', () => {
    focused.value = true;
  });

  // 中间元素类名
  const wraperClasses = computed(() => {
    return {
      'is-focus': focused.value
    };
  });

  // 是否显示切换密码按钮
  const isShowPassword = computed(() => {
    return props.type === 'password' && props.showPassword && modelValue.value && !isDisabled.value;
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
    return props.clearable && modelValue.value && !isDisabled.value && !isReadonly.value && (isHovered.value || focused.value);
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
    isDisabled,
    isReadonly,
    rootClasses,
    wraperClasses,
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
