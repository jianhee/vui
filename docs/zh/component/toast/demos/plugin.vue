<template>
  <DemoConfig
    label="基础方法"
    code="toast()"
    label-position="top"
  >
    <DemoSpace flex>
      <VButton @click="$toast(renderMessage('默认'))">默认类型 + 字符串参数</VButton>
      <VButton @click="$toast({ message: renderMessage('primary'), type: 'primary' })">primary 类型 + 对象参数</VButton>
    </DemoSpace>
  </DemoConfig>
  <DemoConfig
    label="方法别名"
    code="toast?.[type]()"
    label-position="top"
  >
    <DemoSpace flex>
      <VButton @click="$toast(renderMessage('success'))">success 类型 + 字符串参数</VButton>
      <VButton @click="$toast({ message: renderMessage('warning'), type: 'warning' })">warning 类型 + 对象参数</VButton>
    </DemoSpace>
  </DemoConfig>
</template>

<script setup>
import { renderMessage } from '../composables';
</script>
