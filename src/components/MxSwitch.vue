<!-- 开关 -->
<template>
  <div
    class="mx-switch"
    :class="{
      'is-checked': checked,
      'mx-state-disabled': isLoading
    }"
  >
    <div
      class="mx-switch-inner"
      @click="onChange"
    >
      <span class="mx-switch-action">
        <MxIcon
          v-if="isLoading"
          :component="IconLoading"
          size="12"
          spin
        />
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IconLoading from '../assets/icons/loading.vue';

const emits = defineEmits(['change']);

// 参数
const props = defineProps({
  // 切换前调用方法
  beforeChange: { type: Function, default: null }
});

// 选中状态
const checked = defineModel('checked', { type: Boolean, default: false });

// 切换状态
const isLoading = ref(false);
async function onChange() {
  if (isLoading.value) return;
  // 直接切换
  if (!props.beforeChange) {
    updateState();
    return;
  }
  // 切换前调用方法
  isLoading.value = true;
  const isSuccess = await props.beforeChange();
  isLoading.value = false;
  if (isSuccess) {
    updateState();
  }
}

// 更新状态
function updateState() {
  const newState = !checked.value;
  checked.value = newState;
  emits('change', newState);
}
</script>

<style lang="scss">
@use '../assets/styles/vars';
@use '../assets/styles/base';
.mx-switch {
  display: inline-flex;
  align-items: center;
  height: 32px;
  &-inner {
    position: relative;
    min-width: 40px;
    height: 20px;
    cursor: pointer;
    background-color: var(--mx-switch-off-bg-color);
    border-radius: 10px;
    transition: background-color 0.3s ease;
  }
  &.is-checked &-inner {
    background-color: var(--mx-switch-on-bg-color);
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
    color: var(--mx-switch-off-bg-color);
    background-color: var(--mx-switch-action-bg-color);
    border-radius: 50%;
    transition: left 0.3s ease;
  }
  &.is-checked &-action {
    left: calc(100% - 18px);
    color: var(--mx-switch-on-bg-color);
  }
}
</style>
