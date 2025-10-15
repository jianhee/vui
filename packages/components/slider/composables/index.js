// 滑块
import { ref, computed, inject, watch } from 'vue';
import { useElementHover, useEventListener } from '@vueuse/core';
import { getFormattedText } from '../../@common';

// v-model
export const sliderModel = {
  // 滑块的值
  value: { type: Number, default: undefined }
};

// props
export const sliderProps = {
  // 最小值和最大值
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  // 提示框内容
  // - `null` 不显示提示框
  // - `function` : `percentage => {}` 的返回值
  // - `any` : 直接显示
  tooltip: { type: [Function, String, Number, Object], default: undefined },
  // 轨道右侧内容：同上
  suffix: { type: [Function, String, Number, Object], default: null },
  // ---------- 原生属性 ----------
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false }
};

// 使用滑块
export const useSlider = ({ railElRef, handleElRef, tooltipRef, modelValue, props }) => {
  // 继承
  const formRoot = inject('vuiFormRoot', null);

  // 组件状态
  const isDisabled = computed(() => props.disabled || formRoot?.props?.disabled);
  const isReadonly = computed(() => props.readonly || formRoot?.props?.readonly);
  const isEnabled = computed(() => !isDisabled.value && !isReadonly.value);

  // 拖动状态
  const isDragging = ref(false);
  let railRect = null;
  let clearEvent1 = null;
  let clearEvent2 = null;

  // 开始拖动
  function onDragStart(e) {
    if (!isEnabled.value) return;
    if (isDragging.value) return;

    isDragging.value = true;
    railRect = railElRef.value.getBoundingClientRect();
    clearEvent1 = useEventListener('mousemove', onDragging);
    clearEvent2 = useEventListener('mouseup', onDragStop);
  }

  // 拖动中
  function onDragging(e) {
    if (!isEnabled.value) return;
    if (!isDragging.value) return;

    updateValue(e);
  }

  // 停止拖动
  function onDragStop(e) {
    if (!isEnabled.value) return;
    if (!isDragging.value) return;

    isDragging.value = false;
    clearEvent1?.();
    clearEvent2?.();
  }

  // 点击轨道/填充
  function onRailClick(e) {
    if (!isEnabled.value) return;
    if (isDragging.value) return;

    updateValue(e);
  }

  // 更新值
  function updateValue(e) {
    // 拖拽距离
    const detaX = e.clientX - railRect.x;

    // 差值
    const detaRatio = detaX / railRect.width;
    const detaValue = (props.max - props.min) * detaRatio + props.min;

    // 新值
    const limitValue = Math.max(props.min, Math.min(props.max, detaValue));

    // 取整
    modelValue.value = Math.round(limitValue);
  }

  // 计算百分比
  const percentValue = computed(() => {
    const percentage = ((modelValue.value - props.min) / (props.max - props.min)) * 100;
    const limitPercentage = Math.max(0, Math.min(100, percentage));
    return `${Math.round(limitPercentage)}%`;
  });

  // 拖拽手柄
  const handleIsHovered = useElementHover(handleElRef);
  const handleProps = computed(() => ({
    class: { 'is-dragging': isDragging.value },
    style: { left: percentValue.value }
  }));

  // 手柄上方的文字提示框
  const tooltipText = computed(() => getFormattedText(props.tooltip, modelValue.value));
  const isShowTooltip = computed(() => tooltipText.value && (isDragging.value || handleIsHovered.value));
  watch([isShowTooltip, modelValue], ([visible]) => {
    if (visible) {
      tooltipRef.value.update();
    } else {
      tooltipRef.value.close();
    }
  });

  // 轨道右侧内容
  const suffixText = computed(() => getFormattedText(props.suffix, modelValue.value));

  // 填充元素
  const trackStyles = computed(() => ({
    width: percentValue.value
  }));

  // 根元素
  const rootClasses = computed(() => ({
    'is-disabled': isDisabled.value
  }));

  return {
    rootClasses,
    trackStyles,
    handleProps,
    tooltipText,
    suffixText,
    onRailClick,
    onDragStart
  };
};
