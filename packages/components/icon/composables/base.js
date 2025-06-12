// VBtn/VMenu 等组件使用
// 格式化 `icon` 属性
import { computed } from 'vue';
export function useIconProps(rawIcon) {
  const iconProps = computed(() => {
    // 空值
    if (!rawIcon) return null;

    // :icon="name"
    if (typeof rawIcon === 'string') {
      return { name: rawIcon };
    }

    // :icon="component"
    if (rawIcon.render) {
      return { component: rawIcon };
    }

    // :icon="{ name: 'close', size: 20, ... }"
    return rawIcon;
  });

  return { iconProps };
}
