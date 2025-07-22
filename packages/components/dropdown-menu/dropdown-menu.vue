<!-- 下拉菜单 -->
<template>
  <Dropdown
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
      <Menu
        v-bind="componentsProps[1]"
        v-on="componentsEmits[1]"
      />
    </template>
  </Dropdown>
</template>

<script setup>
import { useTemplateRef } from 'vue';
import { useComponentsProps } from '../../composables/use-components-props';
import Dropdown from '../dropdown/dropdown.vue';
import Menu from '../menu/menu.vue';

// 继承属性
const props = defineProps({ ...Dropdown.props, ...Menu.props, closeOnClickDropdown: { type: Boolean, default: true } });
const emits = defineEmits([...Dropdown.emits, ...Menu.emits]);

// 组件属性
const { componentsProps, componentsEmits } = useComponentsProps({ props, emits, components: [Dropdown, Menu] });

// 下拉框方法
const dropdownRef = useTemplateRef('dropdownRef');
defineExpose({
  open: params => dropdownRef.value?.open(params),
  close: () => dropdownRef.value?.close()
});
</script>
