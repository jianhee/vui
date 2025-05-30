<!-- 多选框-选项组 -->
<template>
  <div class="vui-checkbox-group">
    <VCheckbox
      v-for="option in options"
      :key="option.value"
      :option="option"
    >
      <slot :option="option" />
    </VCheckbox>
  </div>
</template>

<script setup>
import { provide } from 'vue';
import { groupProps, groupEmits, useGroup } from './base/composable';

// 参数
const emits = defineEmits(groupEmits);
const props = defineProps(groupProps);
const modelValue = defineModel('value', { type: Array, default: null });
const { options } = useGroup(props);

// 共享数据
provide('parentGroup', {
  emits,
  props,
  modelValue
});
</script>
