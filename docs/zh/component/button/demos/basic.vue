<template>
  <div class="c-demo-btns">
    <VButton
      v-for="btnType in btnTypes"
      :key="btnType.label"
      :type="btnType.value"
      v-bind="$attrs"
    >
      {{ btnType.label }}
    </VButton>
  </div>
</template>

<script setup>
defineOptions({ inheritAttrs: false });

// 按钮类型
const btnTypes = [
  { label: 'Primary Button', value: 'primary' },
  { label: 'Default Button', value: undefined },
  { label: 'Link Button', value: 'link' }
];
</script>

<style>
.c-demo-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.c-demo-btns > .vui-btn {
  flex: none;
}
</style>
