<!-- 输入框 -->
<template>
  <input
    v-model="valRef"
    type="text"
    class="mx-input"
    @input="onInput"
    @change="onChange"
  />
</template>

<script setup>
const emits = defineEmits(['input', 'change']);

// 当前值
const valRef = defineModel('value', { type: String, default: null });

// 输入
function onInput(event) {
  emits('input', event.tarent.value);
}

// 修改值
function onChange(event) {
  emits('change', event.tarent.value);
}
</script>

<style lang="scss">
.mx-input {
  width: 240px;
  height: 32px;
  padding: 0 8px;
  font-size: 14px;
  outline: 0;
  border: 1px solid var(--mx-border-color);
  border-radius: 4px;
  &:hover,
  &:focus {
    border-color: var(--mx-brand-color-default);
  }
}
</style>
