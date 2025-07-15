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

  // 根元素类名
  const rootClasses = computed(() => ({
    'is-active': isSelected.value
  }));

  // 点击菜单项
  const onMenuItemClick = () => {
    // 回调参数
    const newKey = formattedMenuItem.value.key;
    const params = {
      item: menuItem.props.item,
      key: newKey
    };

    // 点击事件：参数为 当前项、当前项的 key
    menuRoot.emits('click', params);

    // 是否可以选中
    if (!menuRoot.props.selectable) return;
    if (newKey === menuRoot.modelSelectedKey.value) return;

    // 更新值
    menuRoot.modelSelectedKey.value = newKey;

    // 选中事件：参数为 当前项、当前项的 key、选中项的 key
    menuRoot.emits('select', { ...params, selectedKey: newKey });
  };

  return {
    formattedMenuItem,
    isSelected,
    rootClasses,
    onMenuItemClick
  };
};
