<!-- 选择器 -->
<template>
  <div :class="wraperClasses">
    <!-- 显示文本 -->
    <span
      v-if="text"
      class="vui-select-inner"
    >
      {{ text }}
    </span>
    <!-- 显示下拉 -->
    <select
      v-else
      ref="target"
      v-model="modelValue"
      :disabled="disabled"
      class="vui-select-inner"
      @change="onValueChange"
    >
      <option
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        class="vui-select-option"
      >
        {{ item.label }}
      </option>
    </select>
    <!-- 图标 -->
    <VIcon
      class="vui-select-icon"
      :component="IconArrow"
    />
  </div>
</template>

<script setup>
import { shallowRef, computed } from 'vue';
import { useFocus } from '@vueuse/core';
import IconArrow from '../../icons/select-arrow.vue';

const emits = defineEmits(['change']);

// 参数
const props = defineProps({
  // 选项：{ value: '值', label: '文本' }
  items: { type: Array, default: null },
  // 原生属性
  disabled: { type: Boolean, default: false },
  // 尺寸：small, medium
  size: { type: String, default: 'medium' },
  // 作为文本显示
  text: { type: [String, Number], default: null }
});

// 是否获取焦点
const target = shallowRef();
const { focused } = useFocus(target);

// 获取容器类名
const wraperClasses = computed(() => {
  return [
    'vui-select',
    `vui-select-${props.size}`,
    {
      'is-disabled': props.disabled,
      'is-focus': focused.value
    }
  ];
});

// 当前值
const modelValue = defineModel('value', { type: [String, Number], default: null });

// 修改值
function onValueChange(item) {
  emits('change', item);
}
</script>
