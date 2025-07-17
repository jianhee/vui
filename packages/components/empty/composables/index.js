// 空状态
import { computed } from 'vue';
import { useIconProps } from '../../../composables/use-icon-props';
import IconEmpty from '../../../icons/empty.vue';
import IconLoadingLoop from '../../../icons/loading-loop.vue';

// props
export const emptyProps = {
  // 自定义图标：可选的值有 `<VIcon>` 组件的 `name` 属性值、`component` 属性值、完整的 `props` 对象
  icon: { type: [String, Object], default: undefined },
  // 自定义图片：优先级高于 `icon` 属性
  image: { type: String, default: undefined },
  // 自定义描述文本：空值表示不使用文本
  description: { type: String, default: undefined }
};

// 使用空状态
export const useEmpty = ({ props, stateType }) => {
  // 区分类型
  const isLoading = stateType === 'loading';

  // 当前图标
  const stateIconProps = computed(() => {
    // 不使用图标
    if (props.image) return null;
    if (props.icon === null) return null;

    // 使用默认图标
    const defaultIcon = isLoading ? IconLoadingLoop : IconEmpty;
    const defaultProps = { spin: isLoading, component: defaultIcon };
    if (typeof props.icon === 'undefined') return defaultProps;

    // 使用自定义图标
    const { iconProps } = useIconProps({ iconRef: computed(() => props.icon) });
    if (iconProps.value.name || iconProps.value.component) {
      return { spin: isLoading, ...iconProps.value };
    } else {
      return { ...defaultProps, ...iconProps.value };
    }
  });

  // 文本
  const descText = computed(() => {
    // 不使用文本
    if (props.description === null) return null;

    // 使用默认文本
    if (typeof props.description === 'undefined') {
      return isLoading ? 'Loading...' : 'No Data';
    }

    // 使用自定义文本
    return props.description;
  });

  return {
    stateIconProps,
    descText
  };
};
