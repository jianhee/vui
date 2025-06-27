<!-- 表单 -->
<template>
  <div
    ref="formElRef"
    :class="rootClasses"
    :style="rootStyles"
  >
    <!-- 显示内容，只能是 `<VFormItem>` 组件 -->
    <slot />
  </div>
</template>

<script setup>
import { useTemplateRef } from 'vue';
import { useForm, formProps } from './composables/form';

// 表单
const formElRef = useTemplateRef('formElRef');
const props = defineProps(formProps);

// 使用表单
const { rootClasses, rootStyles } = useForm({
  formElRef,
  props
});
</script>
