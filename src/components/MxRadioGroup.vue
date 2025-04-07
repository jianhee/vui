<!-- 单选框 -->
<template>
  <div class="mx-radio-group">
    <label
      v-for="item in items"
      :key="item.value"
      class="mx-radio-item"
      :class="{
        'is-checked': item.value === valRef,
        'is-block': block
      }"
    >
      <input
        :value="item.value"
        :checked="item.value === valRef"
        type="radio"
        class="mx-radio-input"
        @change="onValueChange(item)"
      />
      <MxIcon
        :component="IconRadio"
        class="mx-radio-icon"
      />
      <!-- 优先显示slot -->
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
import IconRadio from '../assets/icons/radio.vue';

const slots = useSlots();
const emits = defineEmits(['change']);

// 参数
defineProps({
  // 数据 { value: '', label: ''}
  items: { type: Array, default: null },
  // 是否块级
  block: { type: Boolean, default: false }
});

// 当前值
const valRef = defineModel('value', { type: [String, Number], default: null });

// 修改值
function onValueChange(item) {
  valRef.value = item.value;
  emits('change', item);
}
</script>

<style lang="scss">
@use '../assets/styles/vars';
.mx-radio {
  &-item {
    position: relative;
    display: inline-flex;
    gap: 8px;
    align-items: center;
    height: 32px;
    margin-right: 10px;
    font-size: 14px;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    &.is-block {
      display: flex;
    }
    &.is-checked,
    &.is-checked .mx-radio-icon {
      color: var(--mx-checkbox-active-color);
    }
  }
  &-input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }
  &-icon {
    overflow: hidden;
    color: var(--mx-checkbox-default-color);
    border-radius: 2px;
    transition: color 0.3s ease;
  }
}
</style>
