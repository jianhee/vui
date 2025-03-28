<!-- 表单项 -->
<template>
  <div class="mx-form-filed">
    <label
      class="mx-form-label"
      :style="{ width: labelWidth }"
    >
      {{ label }}
    </label>
    <div class="mx-form-control">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  // 表单项label
  label: { type: String, default: '' },
  // 表单项label宽度
  labelWidth: { type: String, default: null }
});
</script>

<style lang="scss">
.mx-form {
  &-filed {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    font-size: 14px;
  }
  &-label {
    flex: none;
    width: var(--mx-form-lable-width);
    height: 32px;
    font-size: 14px;
    line-height: 32px;
  }
  &-control {
    position: relative;
  }
}
</style>
