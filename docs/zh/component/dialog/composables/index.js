import { ref } from 'vue';
import { useRouteValid } from '@vp/composables';

// 使用弹窗
export const useDialog = () => {
  // 区分类型
  const isDialog = useRouteValid('dialog');
  const componentName = isDialog ? 'VDialog' : 'VDrawer';

  // 是否显示
  const isVisible = ref(false);

  return {
    isDialog,
    isVisible,
    componentName,
    openDialog: () => (isVisible.value = true),
    closeDialog: () => (isVisible.value = false)
  };
};
