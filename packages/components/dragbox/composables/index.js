// 拖拽框
import { computed } from 'vue';

// v-model
export const dragboxModel = { type: Number, default: null };

// props
export const dragboxProps = {
  // 是否可移动：可移动盒子会自动转成定位元素
  movable: { type: Boolean, default: false },
  // 是否可缩放
  resizable: { type: Boolean, default: false },
  // 可缩放手柄：默认启用所有手柄
  // 定位元素支持 `['left', 'right', 'top', 'bottom']` 四个轴
  // 非定位元素只支持 `['right', 'bottom']` 两个轴
  resizeHandles: { type: Array, default: () => ['left', 'right', 'top', 'bottom'] },
  // 最小尺寸
  minWidth: { type: Number, default: 0 },
  minHeight: { type: Number, default: 0 },
  // 是否禁用：禁用会清空状态和绑定样式，但不会清除已记录的数据，切换状态后可恢复
  disabled: { type: Boolean, default: false }
};

// use
export const useDragbox = ({ dragFlag, isMovable, isResizable, props, styles }) => {
  // 获取类名
  const rootClasses = computed(() => {
    return [
      'vui-dragbox',
      {
        'is-movable': isMovable.value,
        'is-moving': dragFlag.value === 'move',
        'is-resizable': isResizable.value,
        'is-resizing': dragFlag.value && dragFlag.value !== 'move'
      }
    ];
  });

  // 获取样式
  const rootStyles = computed(() => {
    if (props.disabled) return null;
    return {
      left: `${styles.boxLeft.value}px`,
      top: `${styles.boxTop.value}px`,
      width: `${styles.boxWidth.value}px`,
      height: `${styles.boxHeight.value}px`
    };
  });

  return {
    rootClasses,
    rootStyles
  };
};
