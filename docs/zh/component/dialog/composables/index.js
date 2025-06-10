import { ref } from 'vue';
import { useRoute } from 'vitepress';

export function useDialog() {
  // 区分类型
  const route = useRoute();
  const isDialog = /dialog/.test(route.path);
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
}
