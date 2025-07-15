// 格式化 `icon` 属性
import { computed } from 'vue';

export const useIconProps = ({ iconRef }) => {
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
