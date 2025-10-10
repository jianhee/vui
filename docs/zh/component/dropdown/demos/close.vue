<template>
  <DemoView>
    <template #content>
      <VDropdown
        :items="items"
        :close-on-click-item="closeOnClickItem"
      >
        <VButton>hover 触发元素</VButton>
      </VDropdown>
    </template>

    <template #props>
      <DemoViewBoolean
        label="是否在点击菜单项时关闭下拉菜单"
        code="closeOnClickItem"
      >
        <VSwitch v-model:checked="closeOnClickItem" />
      </DemoViewBoolean>
    </template>
  </DemoView>
</template>

<script setup>
import { ref } from 'vue';
import { renderItems } from '../composables';

const items = renderItems();
const closeOnClickItem = ref(false);
</script>
