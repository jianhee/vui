<!-- loading -->
<template>
  <div class="mx-loading">
    <!-- 图标 -->
    <MxIconInside
      :icon="iconProps"
      :default-props="{ spin: true }"
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
import MxIconInside from './MxIconInside.vue';
import IconLoading from '../assets/icons/loading.vue';

// 参数
const props = defineProps({
  // 图标：MxIcon 组件的 name/component/props
  icon: { type: [String, Object], default: null },
  // 文本
  text: { type: String, default: 'Loading...' },
  // 是否显示文本
  showText: { type: Boolean, default: true }
});

// 图标
const iconProps = computed(() => {
  if (props.icon) return props.icon;
  return { component: IconLoading };
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
    color: var(--mx-brand-color-default);
  }
  &-text {
    margin-top: 10px;
    font-size: 12px;
  }
}
</style>
