// 加载状态
import { computed } from 'vue';
import { useIconProps } from '../../../composables/use-icon-props';
import IconLoadingLoop from '../../../icons/loading-loop.vue';
import IconLoadingBubble from '../../../icons/loading-bubble.vue';

// props
export const loadingProps = {
  // 动画类型：`loop` 转圈、`bubble` 气泡
  animation: { type: String, default: 'loop' },
  // 自定义图标：会自动添加旋转动画，可选的值有 `<VIcon>` 组件的 `name` 属性值、`component` 属性值、完整的 `props` 对象
  icon: { type: [String, Object], default: null },
  // 自定义描述文本：空值表示不使用文本
  description: { type: String, default: 'Loading...' }
};

// 使用加载状态
export const useLoading = ({ props }) => {
  // 自定义图标
  const iconRef = computed(() => props.icon);

  // 格式化图标属性
  const iconProps = computed(() => {
    // 默认图标：本身带 spin
    const defaultIcon = props.animation === 'bubble' ? IconLoadingBubble : IconLoadingLoop;
    const defaultProps = { component: defaultIcon };
    if (!props.icon) return defaultProps;

    // 自定义图标：添加 spin
    const { iconProps } = useIconProps({ iconRef });
    const customIcon = iconProps.value.name || iconProps.value.component;
    return {
      ...defaultProps,
      ...iconProps.value,
      spin: !!customIcon
    };
  });

  return {
    iconProps
  };
};
