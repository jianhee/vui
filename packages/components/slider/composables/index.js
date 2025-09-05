// 滑块
import { ref, computed, inject } from 'vue';
import { useElementHover, useElementBounding } from '@vueuse/core';

// v-model
export const sliderModel = {
  // 滑块的值
  value: { type: Number, default: null }
};

// props
export const sliderProps = {
  // 最小值和最大值
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  // 提示框内容的格式化方法
  // 1.函数：参数为当前值，返回一个可以作为提示框内容的值
  // 2.空值：表示不显示提示框
  tipFormatter: { type: Function, default: value => value },
  // ---------- 原生属性 ----------
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false }
};

// 使用滑块
export const useSlider = ({ railElRef, handleElRef, modelValue, props }) => {
  // 继承
  const formRoot = inject('vuiFormRoot', null);

  // 根元素
  const isDisabled = computed(() => props.disabled || formRoot?.props?.disabled);
  const isReadonly = computed(() => props.readonly || formRoot?.props?.readonly);
  const rootClasses = computed(() => ({
    'is-disabled': isDisabled.value
  }));

  // 开始拖动
  const isDragging = ref(false);
  function onDragStart(e) {
    if (isDisabled.value || isReadonly.value) return;
    if (isDragging.value) return;

    isDragging.value = true;

    document.addEventListener('mousemove', onDragging);
    document.addEventListener('mouseup', onDragStop);
  }

  // 拖动中
  function onDragging(e) {
    if (isDisabled.value || isReadonly.value) return;
    if (!isDragging.value) return;

    updateValue(e);
  }

  // 停止拖动
  function onDragStop(e) {
    if (isDisabled.value || isReadonly.value) return;
    if (!isDragging.value) return;

    isDragging.value = false;

    document.removeEventListener('mousemove', onDragging);
    document.removeEventListener('mouseup', onDragStop);
  }

  // 点击轨道/填充
  function onRailClick(e) {
    if (isDisabled.value || isReadonly.value) return;
    if (isDragging.value) return;

    updateValue(e);
  }

  // 更新值
  function updateValue(e) {
    // 拖拽距离
    const railRect = railElRef.value.getBoundingClientRect();
    const detaX = e.clientX - railRect.left;

    // 差值
    const detaRatio = detaX / railRect.width;
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

  // 手柄
  const { x: handleX, y: handleY } = useElementBounding(handleElRef);
  const handleIsHovered = useElementHover(handleElRef);
  const handleProps = computed(() => ({
    class: { 'is-dragging': isDragging.value },
    style: { left: percentValue.value }
  }));

  // 填充
  const trackStyles = computed(() => ({
    width: percentValue.value
  }));

  // 提示框
  const isShowTip = computed(() => modelValue.value !== null && props.tipFormatter && (isDragging.value || handleIsHovered.value));
  const tipText = computed(() => props.tipFormatter(modelValue.value));
  const tipStyles = computed(() => ({
    left: `${handleX.value}px`,
    top: `${handleY.value}px`
  }));

  return {
    rootClasses,
    trackStyles,
    handleProps,
    tipStyles,
    tipText,
    isShowTip,
    onRailClick,
    onDragStart
  };
};
