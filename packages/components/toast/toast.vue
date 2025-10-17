<!-- 消息提示 -->
<template>
  <Transition
    name="vui-toast"
    @after-leave="emits('closed')"
  >
    <div
      v-show="isVisible"
      ref="toastElRef"
      :class="['vui-toast', rootClasses]"
    >
      <!-- 图标 -->
      <VIcon
        v-if="iconComponent"
        :icon="iconComponent"
        class="vui-toast-icon"
      />
      <!-- 消息 -->
      <span class="vui-toast-message">{{ message }}</span>
    </div>
  </Transition>
</template>

<script setup>
import { useTemplateRef } from 'vue';
import { useToast, toastProps, toastEmits } from './composables';
import VIcon from '../icon/icon.vue';

// 消息提示
const toastElRef = useTemplateRef('toastElRef');
const props = defineProps(toastProps);
const emits = defineEmits(toastEmits);

// 使用消息提示
const { rootClasses, iconComponent, isVisible, open } = useToast({
  toastElRef,
  props
});

// 暴漏方法
defineExpose({
  open
});
</script>
