<!-- 下拉菜单 -->
<template>
  <VDropdown
    ref="dropdownRef"
    v-bind="componentsProps[0]"
    v-on="componentsEmits[0]"
  >
    <!-- 触发器：可省略 -->
    <template
      v-if="$slots.default"
      #default
    >
      <slot />
    </template>

    <!-- 下拉框：必填 -->
    <template #dropdown>
      <VMenu
        v-bind="componentsProps[1]"
        v-on="componentsEmits[1]"
      />
    </template>
  </VDropdown>
</template>

<script setup>
import { useTemplateRef } from 'vue';
import { useComponentsProps } from '../../composables/use-components-props';
import VDropdown from '../dropdown/dropdown.vue';
import VMenu from '../menu/menu.vue';

// 继承属性
const props = defineProps({
  ...VDropdown.props,
  ...VMenu.props,
  closeOnClickDropdown: { type: Boolean, default: true }
});

// 继承事件
const emits = defineEmits([...VDropdown.emits, ...VMenu.emits]);

// 分配属性
const { componentsProps, componentsEmits } = useComponentsProps({
  props,
  emits,
  components: [VDropdown, VMenu]
});

// 下拉框方法
const dropdownRef = useTemplateRef('dropdownRef');
defineExpose({
  open: params => dropdownRef.value?.open(params),
  close: () => dropdownRef.value?.close()
});
</script>
