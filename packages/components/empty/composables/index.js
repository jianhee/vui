// 空状态
import { computed } from 'vue';
import { useIconProps } from '../../icon/composables/base';
import IconEmpty from '../../../icons/empty.vue';

// props
export const emptyProps = {
  // 自定义图标：可选的值有 `<VIcon>` 组件的 `name` 属性值、`component` 属性值、完整的 `props` 对象
  icon: { type: [String, Object], default: null },
  // 自定义图片：会替换掉图标
  image: { type: String, default: null },
  // 自定义描述文本：空值表示不使用文本
  description: { type: String, default: 'No Data' }
};

// 使用空状态
export const useEmpty = ({ props }) => {
  // 自定义图标
  const iconRef = computed(() => props.icon);

  // 格式化图标属性
  const iconProps = computed(() => {
    // 默认图标
    const defaultProps = { component: IconEmpty };
    if (!props.icon) return defaultProps;

    // 自定义图标
    const { iconProps } = useIconProps({ iconRef });
    return {
      ...defaultProps,
      ...iconProps.value
    };
  });

  return {
    iconProps
  };
};
