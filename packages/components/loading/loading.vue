<!-- loading -->
<template>
  <div class="vui-loading">
    <!-- 图标 -->
    <VIcon
      v-bind="iconProps"
      class="vui-loading-icon"
    />
    <!-- 文本 -->
    <div
      v-if="text"
      class="vui-loading-text"
    >
      {{ text }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useIcon } from '../icon/composables';
import IconLoadingLoop from '../../icons/loading-loop.vue';
import IconLoadingBubble from '../../icons/loading-bubble.vue';

// 参数
const props = defineProps({
  // 动画：`loop` 转圈、`bubble` 气泡
  animate: { type: String, default: 'loop' },
  // 图标：VIcon 组件的 name/component/props
  icon: { type: [String, Object], default: null },
  // 文本：传入 `null` 不显示文本
  text: { type: String, default: 'Loading...' }
});

// 图标 props
const iconProps = computed(() => {
  // 默认图标：图标本身带 spin 效果，不需要额外设置
  const defaultIcon = props.animate === 'bubble' ? IconLoadingBubble : IconLoadingLoop;
  const defaultProps = { component: defaultIcon, spin: false };

  // 没有自定义属性
  if (!props.icon) {
    return defaultProps;
  }

  // 有自定义属性
  const { iconProps } = useIcon(props.icon);
  if (iconProps.value.name || iconProps.value.component) {
    // 有图标：替换默认图标，并添加 spin 效果
    return { spin: true, ...iconProps.value };
  } else {
    // 没有图标：保留默认图标，并合并自定义属性
    return { ...defaultProps, ...iconProps.value };
  }
});
</script>
