<template>
  <DemoSpace flex>
    <DemoViewTopCenter label="只修改图标">
      <DemoBase icon="face" />
    </DemoViewTopCenter>
    <DemoViewTopCenter label="只修改样式">
      <DemoBase :icon-props="{ color: 'pink', size: 100 }" />
    </DemoViewTopCenter>
    <DemoViewTopCenter label="修改图标和样式">
      <DemoBase
        icon="face"
        :icon-props="{ color: 'pink', size: 100 }"
      />
    </DemoViewTopCenter>
    <DemoViewTopCenter label="不使用图标">
      <DemoBase :icon="null" />
    </DemoViewTopCenter>
  </DemoSpace>
</template>

<script setup>
import DemoBase from './basic.vue';
</script>
