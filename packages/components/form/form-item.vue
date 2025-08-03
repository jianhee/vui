<!-- 表单-项 -->
<template>
  <div
    :class="['vui-form-item', itemClasses]"
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
      <slot />
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { useFormItem, formItemProps } from './composables/form-item';
import { commonProps } from './composables/form';

// 表单
const formRoot = inject('formRoot', {});

// 表单项
const props = defineProps({ ...formItemProps, ...commonProps });

// 使用表单
const { itemClasses, itemStyles } = useFormItem({
  formRoot,
  formItem: { props }
});
</script>
