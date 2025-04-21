<!-- 开关 -->
<template>
  <div :class="switchClass">
    <div
      class="mx-switch-inner"
      @click="onClick"
    >
      <span class="mx-switch-action">
        <MxIcon
          v-if="isLoading"
          :component="IconLoadingLoop"
          size="12"
          spin
        />
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import IconLoadingLoop from '../assets/icons/loading-loop.vue';

const emits = defineEmits(['change']);

// 参数
const props = defineProps({
  // 切换前调用方法
  beforeChange: { type: Function, default: null }
});

// 获取类名
const switchClass = computed(() => {
  return [
    'mx-switch',
    {
      'is-checked': modelChecked.value,
      'is-disabled': isLoading.value
    }
  ];
});

// 选中状态
const modelChecked = defineModel('checked', { type: Boolean, default: false });

// 加载中
const isLoading = ref(false);

// 点击开关
async function onClick() {
  if (isLoading.value) return;
  // 直接切换
  if (!props.beforeChange) {
    changeState();
    return;
  }
  // 切换前调用方法
  isLoading.value = true;
  const isSuccess = await props.beforeChange();
  isLoading.value = false;
  if (isSuccess) {
    changeState();
  }
}

// 切换选中状态
function changeState() {
  const newState = !modelChecked.value;
  modelChecked.value = newState;
  emits('change', newState);
}
</script>

<style lang="scss">
@use '../assets/styles/vars';
@use '../assets/styles/mixins';
.mx-switch {
  display: inline-flex;
  align-items: center;
  height: 32px;
  &-inner {
    position: relative;
    width: 40px;
    height: 20px;
    cursor: pointer;
    background-color: var(--mx-switch-off-bg-color);
    border-radius: 10px;
    transition: background-color 0.3s ease;
  }
  &-action {
    position: absolute;
    top: 2px;
    left: 2px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    background-color: var(--mx-switch-action-bg-color);
    border-radius: 50%;
    transition: left 0.3s ease;
  }
  .mx-icon {
    color: var(--mx-switch-on-bg-color);
  }

  // 选中状态
  &.is-checked & {
    &-inner {
      background-color: var(--mx-switch-on-bg-color);
    }
    &-action {
      left: calc(100% - 18px);
    }
  }

  // 禁用状态
  &.is-disabled &-inner {
    @include mixins.mx-disabled;
  }
}
</style>
