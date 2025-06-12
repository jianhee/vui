<!-- 开关 -->
<template>
  <div
    :class="rootClasses"
    @click="onClick"
  >
    <!-- 未选中 -->
    <span
      v-if="inactiveText"
      :class="inactiveClasses"
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
          :component="IconLoadingLoop"
          spin
        />
      </span>
    </div>
    <!-- 选中 -->
    <span
      v-if="activeText"
      :class="activeClasses"
    >
      {{ activeText }}
    </span>
  </div>
</template>

<script setup>
import { switchModel, switchProps, switchEmits, useSwitch } from './composables';
import IconLoadingLoop from '../../icons/loading-loop.vue';

// 处理数据
const modelChecked = defineModel('checked', switchModel.checked);
const props = defineProps(switchProps);
const emits = defineEmits(switchEmits);
const { rootClasses, activeClasses, inactiveClasses, isLoading, onClick } = useSwitch({ modelChecked, props, emits });
</script>
