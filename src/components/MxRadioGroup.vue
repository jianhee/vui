<!-- 单选框 -->
<template>
  <div
    class="mx-radio-group"
    :class="{ 'is-block': block }"
  >
    <label
      v-for="item in items"
      :key="item.value"
      class="mx-radio-item"
    >
      <input
        :value="item.value"
        :checked="item.value === valRef"
        type="radio"
        class="mx-radio-input"
        @change="onChange(item)"
      />
      <!-- 显示内容：slots 优先级高于 label -->
      <slot
        v-if="slots.default"
        :item="item"
      />
      <span v-else-if="item.label">{{ item.label }}</span>
    </label>
  </div>
</template>

<script setup>
import { useSlots } from 'vue';

const slots = useSlots();
const emits = defineEmits(['change']);

defineProps({
  // 数据 { value: '', label: ''}
  items: { type: Array, default: null },
  // 是否块级
  block: { type: Boolean, default: false }
});

// 当前值
const valRef = defineModel('value', { type: [String, Number], default: null });

// 修改值
function onChange(item) {
  valRef.value = item.value;
  emits('change', item);
}
</script>

<style lang="scss">
@use '../assets/styles/vars';
.mx-radio {
  &-item {
    display: inline-flex;
    gap: 8px;
    align-items: center;
    height: 32px;
    margin-right: 10px;
    font-size: 14px;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    &.is-checked {
      color: var(--mx-checkbox-active-color);
    }
  }
  &-group.is-block &-item {
    display: flex;
  }
}
</style>
