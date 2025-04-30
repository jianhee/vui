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
        v-bind="item.props1"
        class="demo-icon-hover"
      />
      <VIcon v-bind="item.props2" />
    </DemoRow>
  </template>
</template>

<script setup>
import IconClose from '@icons/close.svg?component';
import IconToggleLight from '@icons/toggle-light.svg?component';
import IconToggleLightHover from '@icons/toggle-light-hover.svg?component';
import IconToggleDark from '@icons/toggle-dark.svg?component';
import IconToggleDarkHover from '@icons/toggle-dark-hover.svg?component';

const typeItems = [
  {
    type: 'name',
    props1: { name: 'close' },
    props2: {
      name: {
        default: 'toggle-light',
        hover: 'toggle-light-hover',
        dark: 'toggle-dark',
        darkHover: 'toggle-dark-hover'
      }
    }
  },
  {
    type: 'component',
    props1: { component: IconClose },
    props2: {
      component: {
        default: IconToggleLight,
        hover: IconToggleLightHover,
        dark: IconToggleDark,
        darkHover: IconToggleDarkHover
      }
    }
  }
];
</script>

<style>
.demo-icon-hover:hover {
  color: red;
}
</style>
