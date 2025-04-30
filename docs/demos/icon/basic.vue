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
        color="red"
      />
      <VIcon
        v-bind="item.props"
        clickable
      />
      <VIcon
        v-bind="item.props"
        disabled
      />
      <VIcon
        v-bind="item.props"
        rotate="45"
      />
      <VIcon
        v-bind="item.props"
        spin
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
