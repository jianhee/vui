<!-- 表单 -->
<template>
  <div
    class="mx-form"
    :style="{ '--mx-form-lable-width': labelWidth }"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  // 表单项label宽度
  labelWidth: { type: String, default: '5em' }
});
</script>
