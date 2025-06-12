// 图片
import { computed } from 'vue';
import { useImage as vueuseImage } from '@vueuse/core';
import { addUnit } from '../../../utils';
import defaultErrorImg from '../images/error.png';

// props
export const imageProps = {
  // 图片地址
  src: { type: String, required: true },
  // 加载中的图片地址：默认使用骨架屏
  loadingImg: { type: String, default: null },
  // 加载失败的图片地址
  errorImg: { type: String, default: defaultErrorImg },
  // ---------- 样式属性：缺省单位时默认 `px` ----------
  // 宽度
  width: { type: [Number, String], default: null },
  // 宽高比：设置后可能显示不全
  aspectRatio: { type: String, default: null },
  // 圆角尺寸
  radius: { type: [Number, String], default: null }
};

// 使用图片
export const useImage = props => {
  // 获取样式
  const rootStyles = computed(() => {
    return {
      'width': addUnit(props.width, 'px'),
      'aspect-ratio': props.aspectRatio,
      'border-radius': addUnit(props.radius, 'px')
    };
  });

  // 加载状态
  const { isLoading, error } = vueuseImage({ src: props.src });

  // 是否显示骨架屏
  const isShowSkeleton = computed(() => isLoading.value && !props.loadingImg);

  // 骨架屏长宽比
  const skeletonAspectRatio = computed(() => {
    return props.aspectRatio || '16/9';
  });

  // 图片地址
  const imgSrc = computed(() => {
    return isLoading.value ? props.loadingImg : error.value ? props.errorImg : props.src;
  });

  // 图片加载失败
  const dataSrc = computed(() => {
    return error.value ? props.src : null;
  });

  return {
    rootStyles,
    isShowSkeleton,
    skeletonAspectRatio,
    imgSrc,
    dataSrc
  };
};
