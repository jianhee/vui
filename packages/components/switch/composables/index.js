// 开关
import { ref, computed } from 'vue';

// emits
export const switchEmits = ['change'];

// v-model
export const switchModel = {
  checked: { type: Boolean, default: false }
};

// props
export const switchProps = {
  // 文字描述
  activeText: { type: String, default: null },
  inactiveText: { type: String, default: null },
  // 切换前执行的方法：async checked => true|false
  // 1. 参数为 `v-model:checked` 的值
  // 2. 异步返回 `true`（允许切换）或 `false`（停止切换）
  beforeChange: { type: Function, default: null }
};

// use
export const useSwitch = ({ modelChecked, props, emits }) => {
  // 加载中
  const isLoading = ref(false);

  // 点击开关
  async function onClick() {
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
    const newState = !modelChecked.value;
    modelChecked.value = newState;
    // 参数为 v-model:checked 的值
    emits('change', newState);
  }

  // 获取根组件类名
  const rootClasses = computed(() => {
    return [
      'vui-switch',
      {
        'is-checked': modelChecked.value,
        'is-loading': isLoading.value
      }
    ];
  });

  // 获取文本类名
  const activeClasses = computed(() => {
    return ['vui-switch-label', { 'is-active': modelChecked.value }];
  });
  const inactiveClasses = computed(() => {
    return ['vui-switch-label', { 'is-active': !modelChecked.value }];
  });

  return {
    rootClasses,
    activeClasses,
    inactiveClasses,
    isLoading,
    onClick
  };
};
