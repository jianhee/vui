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
  showPasswordToggle: { type: Boolean, default: false },
  // 是否显示统计字数（仅限制输入长度时有效）
  showWordLimit: { type: Boolean, default: false },
  // 前置/后置装饰
  prepend: { type: [String, Number], default: null },
  append: { type: [String, Number], default: null },
  // 前置/后置内容
  prefix: { type: [String, Number], default: null },
  suffix: { type: [String, Number], default: null },
  // 前置/后置图标
  prefixIcon: VIcon.props.icon,
  prefixIconProps: VIcon.props,
  suffixIcon: VIcon.props.icon,
  suffixIconProps: VIcon.props,
  // 输入框尺寸：large, medium, small
  size: { type: String, default: 'medium' },
  // ---------- 原生属性 ----------
  autofocus: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  maxlength: { type: [String, Number], default: null },
  placeholder: { type: String, default: null },
  type: { type: String, default: 'text' }
};

// 使用输入框
export const useInput = ({ wraperElRef, inputElRef, modelValue, props, emits }) => {
  // 继承
  const formRoot = inject('vuiFormRoot', null);

  // 组件状态
  const isDisabled = computed(() => props.disabled || formRoot?.props?.disabled);
  const isReadonly = computed(() => props.readonly || formRoot?.props?.readonly);
  const isEnabled = computed(() => !isDisabled.value && !isReadonly.value);

  // 元素状态
  const { focused: isInputFocused } = useFocus(inputElRef);
  const isHovered = useElementHover(wraperElRef);
  const wraperClasses = computed(() => ({
    'is-disabled': isDisabled.value,
    'is-focus': isInputFocused.value && isEnabled.value
  }));
  const rootClasses = computed(() => `vui-input--${props.size}`);

  // 点击中间元素时，聚焦输入框
  useEventListener(wraperElRef, 'click', () => (isInputFocused.value = true));

  // 是否显示密码明文内容
  const isShowPasswordValue = ref(false);
  const inputType = computed(() => (isShowPasswordValue.value ? 'text' : props.type));

  // 是否显示切换密码按钮
  const isShowPasswordToggle = computed(() => props.type === 'password' && props.showPasswordToggle && modelValue.value && isEnabled.value);
  const onClickPasswordIcon = () => (isShowPasswordValue.value = !isShowPasswordValue.value);

  // 是否显示清除按钮
  const isShowClearIcon = computed(() => props.clearable && modelValue.value && isEnabled.value && (isHovered.value || isInputFocused.value));
  const onClickClearIcon = e => {
    modelValue.value = '';
    isInputFocused.value = true;
    emits('clear', { event: e, value: '' });
  };

  // 输入值时：参数为 事件对象、当前值，下同
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
    inputType,
    wraperClasses,
    rootClasses,
    isDisabled,
    isReadonly,
    isShowPasswordToggle,
    isShowClearIcon,
    onClickPasswordIcon,
    onClickClearIcon,
    onInput,
    onChange,
    onEnter
  };
};
