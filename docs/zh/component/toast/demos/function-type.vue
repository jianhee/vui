<template>
  <DemoConfig
    v-for="paramItem in paramItems"
    :key="paramItem.label"
    :label="paramItem.label"
    :code="paramItem.code"
    label-position="top"
  >
    <DemoSpace flex>
      <VButton
        v-for="typeItem in typeItems.filter(item => !!item.value)"
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

const paramItems = [
  {
    label: '参数是字符串',
    code: 'toast?.[type](string)',
    onClick: item => toast[item.value](renderMessage(item.label))
  },
  {
    label: '参数是对象',
    code: 'toast?.[type](object)',
    onClick: item => toast[item.value]({ message: renderMessage(item.label) })
  }
];
</script>
