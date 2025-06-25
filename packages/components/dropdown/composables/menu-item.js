// 菜单-项
import { computed } from 'vue';

// props
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

  // 点击菜单项
  const onClickMenuItem = () => {
    menuRoot.closeDropdown();
    doSelect();
    doSelectionChange();
  };

  // 点击事件
  function doSelect() {
    // 参数为 当前项、当前项的 key
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

    // 参数为 当前项、当前项的 key
    menuRoot.emits('selection-change', {
      item: menuItem.props.item,
      key: newKey,
      selectedKey: newKey
    });
  }

  return {
    formattedMenuItem,
    isSelected,
    onClickMenuItem
  };
};
