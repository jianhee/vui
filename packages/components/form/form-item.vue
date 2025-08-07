<!-- 表单-项 -->
<template>
  <div
    :class="['vui-form-item', itemClasses, validateClasses]"
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
      <template v-else>{{ label }} </template>
    </label>
    <!-- 右侧内容 -->
    <div class="vui-form-control">
      <!-- 表单字段 -->
      <slot />
      <!-- 错误信息 -->
      <Transition name="vui-form-error">
        <div
          v-if="errorMsg"
          class="vui-form-error"
        >
          {{ errorMsg }}
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { commonProps } from './composables/form';
import { useFormItem, formItemProps } from './composables/form-item';
import { useFormItemValidate, formItemValidateProps } from './composables/validate';

// 表单
const formRoot = inject('formRoot', {});

// 表单项
const props = defineProps({ ...formItemProps, ...commonProps, ...formItemValidateProps });

// 使用表单
const { itemClasses, itemStyles } = useFormItem({
  formRoot,
  formItem: { props }
});

// 校验表单项
const { validateClasses, errorMsg } = useFormItemValidate({
  formRoot,
  formItem: { props }
});
</script>
