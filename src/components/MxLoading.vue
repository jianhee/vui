<!-- loading -->
<template>
  <div class="mx-loading">
    <!-- 图标 -->
    <MxIconInside
      :icon="iconProps"
      class="mx-loading-icon"
    />
    <!-- 文本 -->
    <div
      v-if="labelRef"
      class="mx-loading-label"
    >
      {{ labelRef }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import MxIconInside from './MxIconInside.vue';
import IconLoading from '../icons/loading.vue';

const props = defineProps({
  // 图标：MxIcon 组件的 name/component/props
  icon: { type: [String, Object], default: null },
  // 文本：传入 false 不显示
  label: { type: [String, Boolean], default: null }
});

// 图标
const iconProps = computed(() => {
  if (props.icon) return props.icon;
  return {
    component: IconLoading,
    spin: true
  };
});

// 文本
const labelRef = computed(() => {
  if (props.label === false) return null;
  return props.label || 'Loading...';
});
</script>

<style lang="scss">
@use '../styles/vars';
.mx-loading {
  padding: 20px 0;
  text-align: center;
  &-icon {
    font-size: 16px;
    color: var(--mx-brand-color-default);
  }
  &-label {
    margin-top: 10px;
    font-size: 12px;
  }
}
</style>
