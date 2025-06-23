// 菜单
import { computed } from 'vue';

// emits
export const menuEmits = ['select', 'selection-change'];

// 菜单的 v-model
export const menuModel = {
  selectedKey: { type: [String, Number], default: null }
};

// 菜单的 props
export const menuProps = {
  // 菜单项 `[Object|Number|String]`
  // 1. `Object.key` 唯一标识
  // 2. `Object.label|title` 文本
  // 3. `Object.icon` 前置图标
  // 4. `Object.divider` 是否添加分隔符
  // 5. `Number|String` 类型会格式化为 `Object.label`
  menus: { type: Array, default: null },
  // 是否可以选中：设为 `true` 时菜单项的 `key` 必传
  selectable: { type: Boolean, default: false }
};

// 菜单项的 props
export const menuItemProps = {
  item: { type: [Object, Number, String], required: true }
};

// 使用菜单项
export const useMenuItem = ({ menuRoot, menuItem }) => {
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
    if (!menuRoot.props.selectable) return false;

    return formattedMenuItem.value.key === menuRoot.modelSelectedKey.value;
  });

  // 点击菜单
  const onClickItem = () => {
    menuRoot.closeDropdown();
    doSelect();
    doSelectionChange();
  };

  // 选中事件
  function doSelect() {
    // 参数为当前项和当前项的 key
    menuRoot.emits('select', {
      item: menuItem.props.item,
      key: formattedMenuItem.value.key
    });
  }

  // 切换事件
  function doSelectionChange() {
    // 是否可选
    if (!menuRoot.props.selectable) return;

    // 是否同一项
    const newKey = formattedMenuItem.value.key;
    if (newKey === menuRoot.modelSelectedKey.value) return;

    // 切换
    menuRoot.modelSelectedKey.value = newKey;

    // 参数为当前项和 v-model:selectedKey 的值
    menuRoot.emits('selection-change', {
      item: menuItem.props.item,
      key: newKey
    });
  }

  return {
    formattedMenuItem,
    isSelected,
    onClickItem
  };
};
