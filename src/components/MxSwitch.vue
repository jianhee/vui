<!-- 开关 -->
<template>
  <div
    class="mx-switch"
    :class="{
      'is-checked': isChecked,
      'is-disabled': isLoading
    }"
  >
    <div
      class="mx-switch-inner"
      @click="onClick"
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

// 是否选中
const isChecked = defineModel('checked', { type: Boolean, default: false });

// 是否加载中
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
  const newState = !isChecked.value;
  isChecked.value = newState;
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
  &.is-disabled &-inner {
    cursor: not-allowed;
    opacity: var(--mx-disabled-opcity);
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
