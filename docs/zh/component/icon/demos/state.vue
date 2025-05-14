<template>
  <template
    v-for="type in iconTypes"
    :key="type.name"
  >
    <DemoRow>使用 {{ type.name }}</DemoRow>
    <DemoRow
      flex
      class="demo-icons"
    >
      <VIcon
        v-bind="type.singleIcon"
        class="demo-icon-hover"
      />
      <VIcon v-bind="type.multiIcon" />
    </DemoRow>
  </template>
</template>

<script setup>
import IconClose from '@icons/close.svg?component';
import IconToggleLight from '@icons/toggle-light.svg?component';
import IconToggleLightHover from '@icons/toggle-light-hover.svg?component';
import IconToggleDark from '@icons/toggle-dark.svg?component';
import IconToggleDarkHover from '@icons/toggle-dark-hover.svg?component';

// 图标类型
const iconTypes = [
  {
    name: 'name',
    singleIcon: { name: 'close' },
    multiIcon: {
      name: {
        default: 'toggle-light',
        hover: 'toggle-light-hover',
        dark: 'toggle-dark',
        darkHover: 'toggle-dark-hover'
      }
    }
  },
  {
    name: 'component',
    singleIcon: { component: IconClose },
    multiIcon: {
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
