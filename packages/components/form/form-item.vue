<!-- 表单-项 -->
<template>
  <div
    :class="['vui-form-item', itemClasses, validClasses]"
    :style="itemStyles"
  >
    <!-- 左侧文本 -->
    <label
      v-if="$slots.label || label"
      class="vui-form-label"
    >
      <!-- 优先使用插槽 -->
      <slot
        v-if="$slots.label"
        name="label"
      />
      <!-- 其次使用属性值 -->
      <template v-else>{{ label }}</template>
    </label>
    <!-- 右侧内容 -->
    <div class="vui-form-control">
      <!-- 表单字段 -->
      <slot />
      <!-- 错误信息 -->
      <Transition name="vui-form-error">
        <div
          v-if="errorMessage"
          class="vui-form-error"
        >
          {{ errorMessage }}
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { commonProps } from './composables/form';
import { useFormItem, formItemProps } from './composables/form-item';
import { useFormItemValid, formItemValidProps } from './composables/valid';

// 表单
const formRoot = inject('formRoot', {});

// 表单项
const props = defineProps({ ...formItemProps, ...commonProps, ...formItemValidProps });

// 使用表单
const { itemClasses, itemStyles } = useFormItem({
  formRoot,
  formItem: { props }
});

// 校验表单项
const { validClasses, errorMessage } = useFormItemValid({
  formRoot,
  formItem: { props }
});
</script>
