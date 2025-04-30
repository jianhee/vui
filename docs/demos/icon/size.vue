<template>
  <template
    v-for="item in typeItems"
    :key="item.type"
  >
    <DemoRow>使用 {{ item.type }}</DemoRow>
    <DemoRow
      flex
      class="demo-icons"
    >
      <VIcon v-bind="item.props" />
      <VIcon
        v-bind="item.props"
        size="28"
      />
      <VIcon
        v-bind="item.props"
        size="32"
      />
      <VIcon
        v-bind="item.props"
        size="36"
      />
    </DemoRow>
  </template>
</template>

<script setup>
import IconClose from '@icons/close.svg?component';

const typeItems = [
  { type: 'name', props: { name: 'close' } },
  { type: 'component', props: { component: IconClose } }
];
</script>
