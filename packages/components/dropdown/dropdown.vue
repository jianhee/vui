<!-- 下拉菜单 -->
<template>
  <VPopover
    ref="popoverRef"
    class="vui-dropdown"
    :style="rootStyles"
    :placement="placement"
  >
    <!-- 触发器：可省略 -->
    <template
      v-if="$slots.default"
      #default
    >
      <slot />
    </template>

    <!-- 下拉框：必填 -->
    <template #content>
      <VDropdownItem
        v-for="(formattedItem, index) in formattedItems"
        :key="index"
        :formatted-item="formattedItem"
      />
    </template>
  </VPopover>
</template>

<script setup>
import { ref, provide } from 'vue';
import { useDropdown, dropdownModel, dropdownProps, dropdownEmits } from '../dropdown/composables/dropdown';
import VPopover from '../popover/popover.vue';
import VDropdownItem from '../dropdown/dropdown-item.vue';

// 下拉菜单
const popoverRef = ref(null);
const modelSelectedKey = defineModel('selectedKey', dropdownModel.selectedKey);
const props = defineProps(dropdownProps);
const emits = defineEmits(dropdownEmits);

// 使用下拉菜单
const { formattedItems, rootStyles } = useDropdown({ props });

// 打开/关闭下拉菜单
const open = event => popoverRef.value.open(event);
const close = () => popoverRef.value.close();

// 子组件使用
provide('vuiDropdownRoot', {
  modelSelectedKey,
  props,
  emits,
  open,
  close
});

// 下拉菜单方法
defineExpose({ open, close });
</script>
