// 滑块
import { ref, computed } from 'vue';
import { useElementHover } from '@vueuse/core';

// v-model
export const sliderModel = {
  // 当前值
  value: { type: Number, default: null }
};

// props
export const sliderProps = {
  // 最小值和最大值
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  // 是否显示提示框
  showTip: { type: Boolean, default: true },
  // 提示框内容的格式化方法
  //  1. 示例 `value => value`
  //  2. 参数为 `v-model:value` 的值
  //  3. 返回一个可以作为提示框内容的值
  tipFormat: { type: Function, default: value => value }
};

// 使用滑块
export const useSlider = ({ railEl, handleEl, modelValue, props }) => {
  // 当前状态
  const isDragging = ref(false);
  const isHovered = useElementHover(handleEl);

  // 根元素类名
  const rootClasses = computed(() => {
    return [
      'vui-slider',
      {
        'is-dragging': isDragging.value,
        'is-hovered': isHovered.value
      }
    ];
  });

  // 提示文字
  const tipText = computed(() => props.tipFormat(modelValue.value));

  // 点击轨道/填充
  function onClickRail(e) {
    if (isDragging.value) return;

    updateValue(e);
  }

  // 开始拖动
  function onSliderDragStart(e) {
    isDragging.value = true;

    document.addEventListener('mousemove', onSliderDragging);
    document.addEventListener('mouseup', onSliderDragStop);
  }

  // 拖动中
  function onSliderDragging(e) {
    if (!isDragging.value) return;

    updateValue(e);
  }

  // 停止拖动
  function onSliderDragStop(e) {
    if (!isDragging.value) return;

    isDragging.value = false;

    document.removeEventListener('mousemove', onSliderDragging);
    document.removeEventListener('mouseup', onSliderDragStop);
  }

  // 更新值
  function updateValue(e) {
    // 拖拽距离
    const { left, width } = railEl.value.getBoundingClientRect();
    const detaX = e.clientX - left;

    // 差值
    const detaRatio = detaX / width;
    const detaValue = (props.max - props.min) * detaRatio + props.min;

    // 新值
    const limitValue = Math.max(props.min, Math.min(props.max, detaValue));

    // 取整
    modelValue.value = Math.round(limitValue);
  }

  // 计算位置
  const percentValue = computed(() => {
    const percent = ((modelValue.value - props.min) / (props.max - props.min)) * 100;
    const limitPercent = Math.max(0, Math.min(100, percent));
    return `${Math.round(limitPercent)}%`;
  });

  // 填充宽度
  const trackStyles = computed(() => {
    return { width: percentValue.value };
  });

  // 滑块定位
  const handleStyles = computed(() => {
    return { left: percentValue.value };
  });

  return {
    rootClasses,
    trackStyles,
    handleStyles,
    tipText,
    onClickRail,
    onSliderDragStart
  };
};
