<!-- 表单 -->
<template>
  <div
    ref="formElRef"
    :class="['vui-form', rootClasses]"
    :style="rootStyles"
  >
    <!-- 显示内容，只能是 `<VFormItem>` 组件 -->
    <slot />
  </div>
</template>

<script setup>
import { provide, useTemplateRef } from 'vue';
import { useForm, formProps, commonProps } from './composables/form';

// 表单
const formElRef = useTemplateRef('formElRef');
const props = defineProps({ ...formProps, ...commonProps });

// 使用表单
const { rootClasses, rootStyles } = useForm({
  formElRef,
  props
});

// 子组件使用
provide('formRoot', {
  props
});
</script>
