// 下拉菜单
import { inject, computed } from 'vue';

// emits
export const menuEmits = ['menu-click', 'select-change'];

// 菜单的 v-model
export const menuModel = {
  selectedKey: { type: [String, Number], default: null }
};

// 菜单的 props
export const menuProps = {
  // 菜单项：兼容 `Number|String` 类型，格式化为 `Object.label`
  // 1. `Object.key` 唯一标识
  // 2. `Object.label|title` 文本
  // 3. `Object.icon` 前置图标
  // 4. `Object.divider` 是否添加分隔符
  menus: { type: Array, default: null },
  // 是否可以选中：设为 `true` 时菜单项的 `key` 必传
  selectable: { type: Boolean, default: false }
};

// 菜单项的 props
export const menuItemProps = {
  item: { type: [Object, Number, String], required: true }
};

// 使用菜单项
export function useMenuItem(menuItem) {
  // 菜单
  const menu = inject('menu');

  // 格式化菜单项
  const formattedMenuItem = computed(() => {
    const item = menuItem.props.item;
    if (typeof item === 'object') {
      return { ...item, label: item.label || item.title };
    } else {
      return { label: item };
    }
  });

  // 是否选中
  const isSelected = computed(() => {
    if (!menu.props.selectable) return false;

    return formattedMenuItem.value.key === menu.modelSelectedKey.value;
  });

  // 点击一项
  const onClickItem = () => {
    // 关闭下拉框
    menu.closeDropdown();

    // 处理数据
    const selectedKey = formattedMenuItem.value.key;
    const params = { item: menuItem.props.item, key: selectedKey };

    // 点击事件
    menu.emits('menu-click', params);

    // 切换选中事件
    if (!menu.props.selectable) return;
    if (!isSelected.value) {
      menu.modelSelectedKey.value = selectedKey;
      menu.emits('select-change', params);
    }
  };

  return {
    formattedMenuItem,
    isSelected,
    onClickItem
  };
}
