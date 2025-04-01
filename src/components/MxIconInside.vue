<!-- 组件内图标 -->
<!-- 本组件用于处理参数，然后将符合规范的参数传给 MxIcon -->
<!-- 这里是为了在 MxBtn 等其它组件中使用时更方便的传参 -->
<template>
  <MxIcon v-bind="iconProps" />
</template>

<script setup>
import { computed } from 'vue';
import MxIcon from './MxIcon.vue';

// 参数
const props = defineProps({
  // MxIcon 组件的 name/component/props
  icon: { type: [String, Object], default: null }
});

//  传给icon组件的参数
const iconProps = computed(() => {
  // 当做 name 使用
  // icon="close"
  // icon="{ default: 'close', hover: 'close-hover' }"
  if (typeof props.icon === 'string' || typeof props.icon.default === 'string') {
    return { name: props.icon };
  }

  // 当做 component 使用
  if (props.icon.render || props.icon.default?.render) {
    return { component: props.icon };
  }

  // 当做 props 使用
  // icon="{ name: 'close' }"
  // icon="{ name: { default: 'close', hover: 'close-hover' } }"
  return props.icon;
});
</script>
