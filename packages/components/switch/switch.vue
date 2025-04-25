<!-- 开关 -->
<template>
  <div :class="switchClass">
    <!-- 轨道 -->
    <div
      class="vui-switch-inner"
      @click="onClick"
    >
      <!-- 滑块 -->
      <span class="vui-switch-action">
        <!-- loading -->
        <VIcon
          v-if="isLoading"
          :component="IconLoadingLoop"
          spin
        />
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import IconLoadingLoop from '../../icons/loading-loop.vue';

const emits = defineEmits(['change']);

// 参数
const props = defineProps({
  // 切换前调用方法
  beforeChange: { type: Function, default: null }
});

// 获取类名
const switchClass = computed(() => {
  return [
    'vui-switch',
    {
      'is-checked': modelChecked.value,
      'is-loading': isLoading.value
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
