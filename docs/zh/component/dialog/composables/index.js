// 使用弹窗
import { ref } from 'vue';
import { useRoute } from 'vitepress';

export function useModal() {
  // 区分类型
  const route = useRoute();
  const isDialog = /dialog/.test(route.path);
  const ModalComponent = isDialog ? 'VDialog' : 'VDrawer';

  // 是否显示
  const isVisible = ref(false);

  return {
    isDialog,
    ModalComponent,
    isVisible,
    openModal: () => (isVisible.value = true),
    closeModal: () => (isVisible.value = false)
  };
}
