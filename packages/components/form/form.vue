<!-- 表单 -->
<template>
  <div
    ref="formEl"
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
const formEl = useTemplateRef('formEl');
const props = defineProps(formProps);

// 使用表单
const { rootClasses, rootStyles } = useForm({
  formEl,
  props
});
</script>
