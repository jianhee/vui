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
      <VIcon
        v-for="size in [null, '28', '32', '36']"
        v-bind="item.props"
        :key="size"
        :size="size"
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
