// VBtn/VMenu 等组件使用
import { computed } from 'vue';

// 使用图标属性
export const useIconProps = rawIcon => {
  // 格式化后的 `icon` 属性
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

  return {
    iconProps
  };
};
