<!-- 表单 -->
<template>
  <form
    ref="formElRef"
    :class="['vui-form', rootClasses]"
    :style="rootStyles"
  >
    <!-- 显示内容，只能是 `<VFormItem>` 组件 -->
    <slot />
  </form>
</template>

<script setup>
import { provide, useTemplateRef } from 'vue';
import { useForm, formProps, commonProps } from './composables/form';
import { useFormValid, formValidProps } from './composables/valid';

// 表单
const formElRef = useTemplateRef('formElRef');
const props = defineProps({ ...formProps, ...commonProps, ...formValidProps });

// 使用表单
const { rootClasses, rootStyles } = useForm({
  formElRef,
  props
});

// 校验表单
const { validate } = useFormValid({ props });

// 子组件使用
provide('formRoot', {
  props
});

// 外部使用
defineExpose({
  validate
});
</script>
