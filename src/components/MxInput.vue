<!-- 输入框 -->
<template>
  <input
    v-model="valRef"
    type="text"
    :placeholder="placeholder"
    :maxlength="maxlength"
    class="mx-input"
    @input="onValueInput"
    @change="onValueChange"
  />
</template>

<script setup>
const emits = defineEmits(['input', 'change']);

// 参数
defineProps({
  // 原生属性
  placeholder: { type: String, default: null },
  // 最大长度
  maxlength: { type: Number, default: null }
});

// 当前值
const valRef = defineModel('value', { type: String, default: null });

// 输入值
function onValueInput(event) {
  emits('input', event.target.value);
}

// 修改值
function onValueChange(event) {
  emits('change', event.target.value);
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
