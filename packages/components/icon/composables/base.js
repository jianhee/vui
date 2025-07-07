// VBtn/VMenu 等组件使用
import { computed } from 'vue';

// 使用图标属性
export const useIconProps = ({ iconRef }) => {
  // 格式化后的 `icon` 属性
  const iconProps = computed(() => {
    // 空值
    if (!iconRef.value) return null;

    // :icon="name"
    if (typeof iconRef.value === 'string') {
      return { name: iconRef.value };
    }

    // :icon="component"
    if (iconRef.value.render) {
      return { component: iconRef.value };
    }

    // :icon="{ name: 'close', size: 20, ... }"
    return iconRef.value;
  });

  return {
    iconProps
  };
};
