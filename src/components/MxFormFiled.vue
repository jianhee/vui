<!-- 表单项 -->
<template>
  <div class="mx-form-filed">
    <label class="mx-form-label">{{ label }}</label>
    <div
      class="mx-form-control"
      :class="{ 'is-text': isText }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  // 表单项label
  label: { type: String, default: null },
  // 表单项的内容是否是文本
  isText: { type: Boolean, default: false }
});
</script>

<style lang="scss">
@use '../assets/styles/vars';
.mx-form {
  &-filed {
    display: flex;
    margin-bottom: 10px;
    font-size: 14px;
  }
  &-label {
    flex: none;
    color: var(--mx-form-label-text-color);
  }
  &-control {
    position: relative;
  }
  &-label,
  &-control.is-text {
    padding: 4px 0;
    line-height: 24px;
  }

  // 布局
  &.is-row &-filed {
    gap: 10px;
  }
  &.is-row &-label {
    width: var(--mx-form-lable-width);
  }
  &.is-column &-filed {
    flex-direction: column;
  }
}
</style>
