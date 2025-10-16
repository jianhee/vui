// 空状态
import { computed } from 'vue';
import { ssrBrowser } from '../../../utils/browser';
import { getFormattedIconProps, completeCSSUnit } from '../../@common';
import VIcon from '../../icon/icon.vue';
import IconEmpty from '../../../icons/empty.vue';
import IconLoading from '../../../icons/loading.vue';

// props
export const emptyProps = {
  // 自定义图标：null 不使用图标
  icon: VIcon.props.icon,
  iconProps: VIcon.props,
  // 自定义图片：优先级高于 `icon` 属性
  image: { type: String, default: undefined },
  imageStyles: { type: Object, default: undefined },
  // 自定义描述文本：null 不使用文本
  description: { type: String, default: undefined },
  // 布局方向：vertical | horizontal
  direction: { type: String, default: 'vertical' },
  // ---------- 样式属性 ----------
  // 间距
  padding: { type: [String, Number], default: undefined }
};

// 使用空状态
export const useEmpty = ({ props, stateType }) => {
  // 区分类型
  const isLoading = stateType === 'loading';

  // 根元素
  const rootProps = computed(() => ({
    class: {
      [`vui-${stateType}--${props.direction}`]: props.direction
    },
    style: {
      [`--vui-${stateType}-padding`]: completeCSSUnit(props.padding, 'px')
    }
  }));

  // 图标
  const _iconProps = computed(() => {
    // 优先使用图片
    if (props.image) return null;

    // 其次使用图标
    const defaultProps = {
      icon: isLoading ? IconLoading : IconEmpty,
      spin: isLoading
    };
    return getFormattedIconProps(props.icon, props.iconProps, defaultProps);
  });

  // 文本
  const descText = computed(() => {
    // 不使用文本
    if (props.description === null) return null;

    // 使用默认文本
    if (typeof props.description === 'undefined') {
      if (ssrBrowser.isZh) {
        return isLoading ? '加载中...' : '暂无数据';
      } else {
        return isLoading ? 'Loading...' : 'No Data';
      }
    }

    // 使用自定义文本
    return props.description;
  });

  return {
    rootProps,
    _iconProps,
    descText
  };
};
