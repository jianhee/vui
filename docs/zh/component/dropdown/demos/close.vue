<template>
  <DemoUsage>
    <template #render>
      <VDropdown
        :items="items"
        :close-on-click-item="closeOnClickItem"
      >
        <VButton>hover 触发元素</VButton>
      </VDropdown>
    </template>

    <template #config>
      <DemoConfig
        label="是否在点击菜单项时关闭下拉菜单"
        code="closeOnClickItem"
      >
        <VSwitch v-model:checked="closeOnClickItem" />
      </DemoConfig>
    </template>
  </DemoUsage>
</template>

<script setup>
import { ref } from 'vue';
import { renderItems } from '../composables';

const items = renderItems();
const closeOnClickItem = ref(false);
</script>
