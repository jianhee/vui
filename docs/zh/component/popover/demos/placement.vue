<template>
  <div class="demo-popover-placement-group">
    <div
      v-for="group in placementGroup"
      :key="group.name"
      class="demo-popover-placement-items"
      :style="{ [group.name]: 0 }"
    >
      <VPopover
        v-for="item in group.items"
        :key="item.value"
        :placement="item.value"
        content="弹出框内容弹出框内容弹出框内容弹出框内容"
      >
        <VButton>{{ item.value }}{{ item.label || '' }} </VButton>
      </VPopover>
    </div>
  </div>
</template>

<script setup>
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
.demo-popover-placement {
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
