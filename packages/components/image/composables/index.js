// 图片
import { computed } from 'vue';
import { useImage as vueuseImage } from '@vueuse/core';
import { completeCSSUnit } from '../../@common';

// props
export const imageProps = {
  // 图片地址：加载中显示骨架屏，加载失败显示占位图
  src: { type: String, default: undefined },
  // ---------- 样式属性 ----------
  // 宽度：不带单位时默认 `px`
  width: { type: [String, Number], default: undefined },
  // 宽高比：占位图默认 `16/9`，设置后可能显示不全
  aspectRatio: { type: String, default: undefined },
  // 圆角尺寸：不带单位时默认 `px`
  radius: { type: [String, Number], default: undefined }
};

// 使用图片
export const useImage = ({ props }) => {
  // 加载状态
  const { isLoading, error } = vueuseImage({ src: props.src });

  // 长宽比：占位图默认 `16/9`
  const aspectRatio = computed(() => {
    if (isLoading.value || error.value) {
      return props.aspectRatio || '16/9';
    } else {
      return props.aspectRatio;
    }
  });

  // 根元素属性
  const rootProps = computed(() => ({
    // 样式
    'style': {
      '--vui-image-width': completeCSSUnit(props.width, 'px'),
      '--vui-image-aspect-ratio': aspectRatio.value,
      '--vui-image-radius': completeCSSUnit(props.radius, 'px')
    },
    // 数据
    'data-src': error.value ? props.src : null
  }));

  return {
    isLoading,
    error,
    rootProps
  };
};
