// 下拉菜单
import { computed } from 'vue';

// emits
export const menuEmits = ['menu-click', 'menu-select-change'];

// 菜单的 props
export const menuProps = {
  // 菜单项：格式为 `[{ key, label|title, icon, divider }, 1, '1']`
  // 1. `Object.key` 唯一标识
  // 2. `Object.label|title` 文本
  // 3. `Object.icon` 前置图标
  // 4. `Object.divider` 是否添加分隔符
  // 5. `Number|String` 自动格式化为 `Object.label`
  menus: { type: Array, default: null },
  // 是否可以选中：设为 `true` 时菜单项的 `key` 必传
  selectable: { type: Boolean, default: false }
};

// 菜单的 props
export const itemProps = {
  item: { type: [Object, Number, String], required: true }
};

// 格式化选项
export function useMenu(props) {
  const formatItem = computed(() => {
    if (typeof props.item === 'object') {
      return { label: props.item.label || props.item.title, ...props.item };
    } else {
      return { label: props.item };
    }
  });

  return { formatItem };
}
