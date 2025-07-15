// 开关
import { ref, computed } from 'vue';

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
  beforeChange: { type: Function, default: null }
};

// 使用开关
export const useSwitch = ({ modelChecked, props, emits }) => {
  // 根元素类名
  const rootClasses = computed(() => {
    return {
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
