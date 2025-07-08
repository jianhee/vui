// 图片
import { computed } from 'vue';
import { useImage as vueuseImage } from '@vueuse/core';
import { addUnit } from '../../../utils';

// props
export const imageProps = {
  // 图片地址：加载中显示骨架屏，加载失败显示占位图
  src: { type: String, default: null },
  // ---------- 样式属性 ----------
  // 宽度：不带单位时默认 `px`
  width: { type: [String, Number], default: null },
  // 宽高比：加载成功前默认 `16/9`，设置后可能显示不全
  aspectRatio: { type: String, default: null },
  // 圆角尺寸：不带单位时默认 `px`
  radius: { type: [String, Number], default: null }
};

// 使用图片
export const useImage = ({ props }) => {
  // 加载状态
  const { isLoading, error } = vueuseImage({ src: props.src });

  // 长宽比
  const aspectRatio = computed(() => {
    if (isLoading.value || error.value) {
      // 加载成功前默认 `16/9`
      return props.aspectRatio || '16/9';
    } else {
      return props.aspectRatio;
    }
  });

  // 根元素属性
  const rootProps = computed(() => ({
    // 样式
    'style': {
      '--vui-image-width': addUnit(props.width, 'px'),
      '--vui-image-aspect-ratio': aspectRatio.value,
      '--vui-image-radius': addUnit(props.radius, 'px')
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
