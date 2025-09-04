// 开关
import { ref, computed, inject } from 'vue';

// emits
export const switchEmits = ['change'];

// v-model
export const switchModel = {
  // 是否选中
  checked: { type: Boolean, default: false }
};

// props
export const switchProps = {
  // 文字描述
  activeText: { type: String, default: null },
  inactiveText: { type: String, default: null },
  // 切换前执行的方法
  // 1. 示例 `async checked => Promise<boolean>`
  // 2. 参数为当前值，返回 `true`表示可以切换
  beforeChange: { type: Function, default: null },
  // ---------- 原生属性 ----------
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false }
};

// 使用开关
export const useSwitch = ({ modelChecked, props, emits }) => {
  // 继承
  const formRoot = inject('formRoot', null);

  // 根元素
  const isDisabled = computed(() => props.disabled || formRoot?.props?.disabled);
  const isReadonly = computed(() => props.readonly || formRoot?.props?.readonly);
  const rootClasses = computed(() => {
    return {
      'is-disabled': isDisabled.value,
      'is-checked': modelChecked.value,
      'is-loading': isLoading.value
    };
  });

  // 打开状态文本类名
  const activeClasses = computed(() => {
    return { 'is-active': modelChecked.value };
  });

  // 关闭状态文本类名
  const inactiveClasses = computed(() => {
    return { 'is-active': !modelChecked.value };
  });

  // 加载状态
  const isLoading = ref(false);

  // 点击开关
  async function onClick() {
    if (isDisabled.value || isReadonly.value) return;
    if (isLoading.value) return;

    // 直接切换
    if (!props.beforeChange) {
      changeState();
      return;
    }

    // 切换前执行的方法
    isLoading.value = true;
    const isSuccess = await props.beforeChange(modelChecked.value);
    isLoading.value = false;
    if (isSuccess) {
      changeState();
    }
  }

  // 切换选中状态
  function changeState() {
    // 新值
    const newState = !modelChecked.value;
    // 更新值
    modelChecked.value = newState;
    // 参数为 是否选中
    emits('change', {
      checked: newState
    });
  }

  return {
    rootClasses,
    activeClasses,
    inactiveClasses,
    isLoading,
    onClick
  };
};
