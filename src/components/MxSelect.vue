<!-- 选择器 -->
<template>
  <div class="mx-select">
    <!-- 显示文本 -->
    <span
      v-if="text"
      class="mx-select-inner"
    >
      {{ text }}
    </span>
    <!-- 显示下拉 -->
    <select
      v-else
      v-model="valRef"
      class="mx-select-inner"
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
  </div>
</template>

<script setup>
const emits = defineEmits(['change']);
defineProps({
  // 数据 { value: '', label: ''}
  items: { type: Array, default: null },
  // 作为文本显示
  text: { type: [String, Number], default: null }
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
  overflow: hidden;
  font-size: 14px;
  line-height: 30px;
  cursor: pointer;
  &-inner {
    display: block;
    width: 100%;
    height: 100%;
    padding-right: 26px;
    padding-left: 8px;
    appearance: none;
    outline: 0;
    background-image: url('../assets/images/mx-select-arrow.svg');
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
}
</style>
