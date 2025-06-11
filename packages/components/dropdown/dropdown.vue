<!-- 下拉框 -->
<template>
  <!-- 触发器 -->
  <slot ref="triggerRef" />
  <!-- 为了获取 slots.default 根元素 -->
  <span
    v-if="$slots.default"
    ref="triggerNextRef"
    style="display: none"
  />

  <!-- 下拉框 -->
  <Teleport to="body">
    <Transition name="vui-dropdown">
      <div
        v-show="dropdownVisible"
        ref="dropdownRef"
        v-bind="$attrs"
        class="vui-dropdown"
        :style="dropdownStyles"
      >
        <!-- 使用菜单 -->
        <VMenu v-if="menus" />
        <!-- 使用自定义内容 -->
        <slot
          v-else
          name="dropdown"
        />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, provide, onMounted } from 'vue';
import { dropdownProps, dropdownEmits, useDropdown } from './composables/dropdown';
import { menuModel, menuProps, menuEmits } from './composables/menu';
import VMenu from './menu.vue';

// 处理数据
defineOptions({ inheritAttrs: false });
const props = defineProps({ ...dropdownProps, ...menuProps });
const emits = defineEmits([...dropdownEmits, ...menuEmits]);

// 当前选中的菜单键
const modelSelectedKey = defineModel('selectedKey', menuModel.selectedKey);

// 触发器和下拉框
const triggerRef = ref(null);
const triggerNextRef = ref(null);
const dropdownRef = ref(null);
onMounted(() => {
  triggerRef.value = triggerNextRef.value?.previousElementSibling;
});

// 下拉框
const { dropdownVisible, dropdownStyles, openDropdown, closeDropdown } = useDropdown({
  triggerRef,
  dropdownRef,
  props,
  emits
});

// 下拉方法
defineExpose({
  open: openDropdown
});

// 菜单共享数据
provide('menu', {
  modelSelectedKey,
  props,
  emits,
  closeDropdown
});
</script>
