// 图标相关的方法
import { computed } from 'vue';

// 格式化 VBtn/VMenu 等组件的 `icon` 属性
export function useIcon(rawIcon) {
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
