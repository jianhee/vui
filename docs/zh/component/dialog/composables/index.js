import { ref } from 'vue';
import { validateRoutePath } from '@vp/composables';

// 使用弹窗
export const useDemoDialog = () => {
  // 区分类型
  const isDialog = validateRoutePath('dialog');

  // 是否显示
  const isVisible = ref(false);

  return {
    isDialog,
    isVisible,
    openDialog: () => (isVisible.value = true),
    closeDialog: () => (isVisible.value = false)
  };
};
