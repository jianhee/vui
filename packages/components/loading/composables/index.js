// loading
import { computed } from 'vue';
import { useIconProps } from '../../icon/composables/base';
import IconLoadingLoop from '../../../icons/loading-loop.vue';
import IconLoadingBubble from '../../../icons/loading-bubble.vue';

// props
export const loadingProps = {
  // 动画：`loop` 转圈、`bubble` 气泡
  animate: { type: String, default: 'loop' },
  // 图标：`<VIcon>` 组件的 `name|component|props`
  icon: { type: [String, Object], default: null },
  // 文本：传入 `null` 不显示文本
  text: { type: String, default: 'Loading...' }
};

// 使用加载
export const useLoading = props => {
  // 格式化图标属性
  const iconProps = computed(() => {
    // 默认图标：本身带 spin
    const defaultIcon = props.animate === 'bubble' ? IconLoadingBubble : IconLoadingLoop;
    const defaultProps = { component: defaultIcon };
    if (!props.icon) return defaultProps;

    // 自定义图标：添加 spin
    const { iconProps } = useIconProps(props.icon);
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
