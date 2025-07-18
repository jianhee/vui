<!-- 开关 -->
<template>
  <div
    :class="['vui-switch', rootClasses]"
    @click="onClick"
  >
    <!-- 未选中 -->
    <span
      v-if="inactiveText"
      :class="['vui-switch-label', inactiveClasses]"
    >
      {{ inactiveText }}
    </span>
    <!-- 轨道 -->
    <div class="vui-switch-inner">
      <!-- 滑块 -->
      <span class="vui-switch-action">
        <!-- loading -->
        <VIcon
          v-if="isLoading"
          :component="IconLoading"
          :spin="true"
        />
      </span>
    </div>
    <!-- 选中 -->
    <span
      v-if="activeText"
      :class="['vui-switch-label', activeClasses]"
    >
      {{ activeText }}
    </span>
  </div>
</template>

<script setup>
import { useSwitch, switchModel, switchProps, switchEmits } from './composables';
import IconLoading from '../../icons/loading.vue';

// 开关
const modelChecked = defineModel('checked', switchModel.checked);
const props = defineProps(switchProps);
const emits = defineEmits(switchEmits);

// 使用开关
const { rootClasses, activeClasses, inactiveClasses, isLoading, onClick } = useSwitch({
  modelChecked,
  props,
  emits
});
</script>
