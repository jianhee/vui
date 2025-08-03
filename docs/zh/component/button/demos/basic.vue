<template>
  <div class="demo-btns">
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
.demo-btns > .vui-btn {
  margin-right: 10px;
}
.demo-btns > .vui-btn--block {
  margin-right: 0;
  margin-bottom: 10px;
}
</style>
