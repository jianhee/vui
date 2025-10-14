<template>
  <div class="c-demo-popover-placement-group">
    <div
      v-for="group in placementGroup"
      :key="group.name"
      class="c-demo-popover-placement-items"
      :style="{ [group.name]: 0 }"
    >
      <VComponentMatchRoute
        v-for="item in group.items"
        :key="item.value"
        :placement="item.value"
        v-bind="props"
      >
        <VButton>{{ item.value }}{{ item.label || '' }} </VButton>
      </VComponentMatchRoute>
    </div>
  </div>
</template>

<script setup>
import { useDemo } from '../composables';

const { props } = useDemo();
const placementGroup = [
  {
    name: 'top',
    items: [{ value: 'top-start' }, { value: 'top', label: '（默认）' }, { value: 'top-end' }]
  },
  {
    name: 'right',
    items: [{ value: 'right-start' }, { value: 'right' }, { value: 'right-end' }]
  },
  {
    name: 'bottom',
    items: [{ value: 'bottom-start' }, { value: 'bottom' }, { value: 'bottom-end' }]
  },
  {
    name: 'left',
    items: [{ value: 'left-start' }, { value: 'left' }, { value: 'left-end' }]
  }
];
</script>

<style lang="scss">
.c-demo-popover-placement {
  &-group {
    position: relative;
    width: 500px;
    height: 260px;
    margin: 0 auto;
  }
  &-items {
    position: absolute;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    &:nth-child(2) {
      align-items: flex-end;
    }
    &:nth-child(2n + 1) {
      right: 70px;
      left: 70px;
    }
    &:nth-child(2n) {
      top: 70px;
      bottom: 70px;
      flex-direction: column;
    }
  }
}
</style>
