// 下拉菜单
import { computed, inject } from 'vue';
import { completeCSSUnit } from '../../@common';

// emits
export const dropdownEmits = ['click', 'select'];

// v-model
export const dropdownModel = {
  // 选中项的 `key`
  selectedKey: { type: [String, Number], default: undefined }
};

// props
export const dropdownProps = {
  // 菜单项 `Array[object|string|number]`
  // - `string|number` 类型的菜单项会格式化为 `{ label }`
  // - `key` 唯一标识
  // - `label|title` 文本
  // - `icon` 前置图标 VIcon.props.icon
  // - `iconProps` 前置图标的属性 VIcon.props
  // - `divider` 是否添加分隔符
  items: { type: Array, default: undefined },
  options: { type: Array, default: undefined },
  // 是否可选中
  // 可选时会记录选中值，所以菜单项的 `key` 必填
  selectable: { type: Boolean, default: false },
  // 是否在点击菜单项时关闭下拉菜单
  closeOnClickItem: { type: Boolean, default: true },
  // ---------- 样式属性 ----------
  maxWidth: { type: [String, Number], default: undefined },
  minWidth: { type: [String, Number], default: undefined },
  maxHeight: { type: [String, Number], default: undefined },
  // ---------- 继承  VPopover 属性 ----------,
  placement: { type: String, default: 'bottom' }
};

// 使用下拉菜单
export const useDropdown = ({ props }) => {
  // 格式化菜单项
  const formattedItems = computed(() => {
    const items = props.options || props.items || [];
    return items.map(item => {
      if (typeof item === 'object') {
        return { __vuiDropdownItemRawData__: item, ...item, label: item.label || item.title };
      } else {
        return { __vuiDropdownItemRawData__: item, label: item };
      }
    });
  });

  // 根元素样式
  const rootStyles = computed(() => ({
    '--vui-dropdown-max-width': completeCSSUnit(props.maxWidth, 'px'),
    '--vui-dropdown-min-width': completeCSSUnit(props.minWidth, 'px'),
    '--vui-dropdown-max-height': completeCSSUnit(props.maxHeight, 'px')
  }));

  return {
    formattedItems,
    rootStyles
  };
};

// 使用菜单项
export const useDropdownItem = ({ formattedItem }) => {
  // 父组件
  const dropdownRoot = inject('vuiDropdownRoot', null);

  // 当前项是否选中
  const isSelected = computed(() => {
    if (dropdownRoot.props.selectable) {
      return formattedItem.key === dropdownRoot.modelSelectedKey.value;
    } else {
      return false;
    }
  });

  // 当前项类名
  const itemClasses = computed(() => ({
    'is-active': isSelected.value
  }));

  // 点击当前项
  const onItemClick = () => {
    // 是否需要关闭
    if (dropdownRoot.props.closeOnClickItem) {
      dropdownRoot.close();
    }

    // 回调参数
    const newKey = formattedItem.key;
    const params = {
      item: formattedItem.__vuiDropdownItemRawData__,
      key: newKey
    };

    // 点击事件：参数为 当前项、当前项的 key
    dropdownRoot.emits('click', params);

    // 选中事件：参数为 当前项、当前项的 key、选中项的 key
    if (!dropdownRoot.props.selectable) return;
    if (newKey === dropdownRoot.modelSelectedKey.value) return;
    dropdownRoot.modelSelectedKey.value = newKey;
    dropdownRoot.emits('select', { ...params, selectedKey: newKey });
  };

  return {
    formattedItem,
    isSelected,
    itemClasses,
    onItemClick
  };
};
