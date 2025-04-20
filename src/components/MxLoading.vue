<!-- loading -->
<template>
  <div class="mx-loading">
    <!-- 图标 -->
    <MxIcon
      v-bind="iconProps"
      class="mx-loading-icon"
    />
    <!-- 文本 -->
    <div
      v-if="showText"
      class="mx-loading-text"
    >
      {{ text }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { getIconProps } from '../composables';
import IconLoadingLoop from '../assets/icons/loading-loop.vue';
import IconLoadingBubble from '../assets/icons/loading-bubble.vue';

// 参数
const props = defineProps({
  // 动画：loop-转圈，bubble-气泡
  animate: { type: String, default: 'loop' },
  // 图标：MxIcon 组件的 name/component/props
  icon: { type: [String, Object], default: null },
  // 文本内容
  text: { type: String, default: 'Loading...' },
  // 是否显示文本
  showText: { type: Boolean, default: true }
});

// 图标 props
const iconProps = computed(() => {
  // 默认图标：图标本身带 spin 效果，不需要额外设置
  const defaultIcon = props.animate === 'bubble' ? IconLoadingBubble : IconLoadingLoop;
  const defaultProps = { component: defaultIcon, spin: false };

  // 没有自定义图标
  if (!props.icon) {
    return defaultProps;
  }

  // 有自定义图标：自动添加 spin 效果
  const customProps = getIconProps(props.icon);
  if (customProps.name || customProps.component) {
    return { spin: true, ...customProps };
  }

  // 有自定义 props
  return { ...defaultProps, ...customProps };
});
</script>

<style lang="scss">
@use '../assets/styles/vars';
.mx-loading {
  width: 100%;
  padding: 20px 0;
  text-align: center;
  &-icon {
    font-size: 16px;
    color: var(--mx-loading-icon-color);
  }
  &-text {
    margin-top: 10px;
    font-size: 12px;
    color: var(--mx-loading-text-color);
  }
}
</style>
