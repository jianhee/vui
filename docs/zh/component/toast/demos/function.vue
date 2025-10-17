<template>
  <DemoConfig
    v-for="(paramItem, index) in paramItems"
    :key="paramItem.label"
    :label="paramItem.label"
    :code="paramItem.code"
    label-position="top"
  >
    <DemoSpace flex>
      <VButton
        v-for="typeItem in getTypeItems(index)"
        :key="typeItem.label"
        @click="paramItem.onClick(typeItem)"
      >
        {{ typeItem.label }}
      </VButton>
    </DemoSpace>
  </DemoConfig>
</template>

<script setup>
import { toast } from 'vui/plugins';
import { typeItems, renderMessage } from '../composables';

// 消息类型
const getTypeItems = index => {
  if (index === 0) {
    return typeItems.filter(item => !item.value);
  } else {
    return typeItems;
  }
};

// 参数类型
const paramItems = [
  {
    label: '参数是字符串',
    code: 'toast(string)',
    onClick: item => toast(renderMessage(item.label))
  },
  {
    label: '参数是对象',
    code: 'toast(object)',
    onClick: item => toast({ message: renderMessage(item.label), type: item.value })
  }
];
</script>
