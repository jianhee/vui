<template>
  <DemoSpace flex>
    <DemoViewTopCenter label="只修改图标">
      <component
        :is="StateComponent"
        icon="face"
      />
    </DemoViewTopCenter>
    <DemoViewTopCenter label="只修改样式">
      <component
        :is="StateComponent"
        :icon="{ color: 'pink', size: 100 }"
      />
    </DemoViewTopCenter>
    <DemoViewTopCenter label="修改图标和样式">
      <component
        :is="StateComponent"
        :icon="{ name: 'face', color: 'pink', size: 100 }"
      />
    </DemoViewTopCenter>
    <DemoViewTopCenter label="不使用图标">
      <component
        :is="StateComponent"
        :icon="null"
      />
    </DemoViewTopCenter>
  </DemoSpace>
</template>

<script setup>
import { useRouteValid } from '@vp/composables';

// 区分类型
const isEmpty = useRouteValid('empty');
const StateComponent = isEmpty ? 'VEmpty' : 'VLoading';
</script>
