<!-- 表单-容器 -->
<template>
  <div
    ref="formRef"
    :class="rootClasses"
    :style="rootStyles"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useForm, formProps } from './composables';

// 处理数据
const formRef = ref(null);
const props = defineProps(formProps);
const { rootClasses, rootStyles } = useForm({ formRef, props });
</script>
