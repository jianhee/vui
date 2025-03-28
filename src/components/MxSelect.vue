<!-- 选择器 -->
<template>
  <select
    v-model="valRef"
    class="mx-select"
    @change="onChange"
  >
    <option
      v-for="item in items"
      :key="item.value"
      :value="item.value"
    >
      {{ item.label }}
    </option>
  </select>
</template>

<script setup>
const emits = defineEmits(['change']);

defineProps({
  // 数据 { value: '', label: ''}
  items: { type: Array, default: null }
});

// 当前值
const valRef = defineModel('value', { type: [String, Number], default: null });

// 修改值
function onChange(item) {
  emits('change', item);
}
</script>

<style lang="scss">
.mx-select {
  width: 240px;
  height: 32px;
  padding-right: 26px;
  padding-left: 8px;
  font-size: 14px;
  appearance: none;
  cursor: pointer;
  outline: 0;
  background-image: url('../images/mx-select-arrow.svg');
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 10px;
  border: 1px solid var(--mx-border-color);
  border-radius: 4px;
  &:hover,
  &:focus {
    border-color: var(--mx-brand-color-default);
  }
}
</style>
