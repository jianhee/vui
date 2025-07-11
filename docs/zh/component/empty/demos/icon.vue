<template>
  <DemoSpace flex>
    <DemoCard label="修改图标">
      <component
        :is="StateComponent"
        :icon="IconFace"
      />
    </DemoCard>
    <DemoCard label="修改颜色">
      <component
        :is="StateComponent"
        :icon="{ color: 'pink' }"
      />
    </DemoCard>
    <DemoCard label="修改尺寸">
      <component
        :is="StateComponent"
        :icon="{ size: 100 }"
      />
    </DemoCard>
    <DemoCard label="修改多项">
      <component
        :is="StateComponent"
        :icon="{ component: IconFace, color: 'pink', size: 100 }"
      />
    </DemoCard>
  </DemoSpace>
</template>

<script setup>
import { useRouteValid } from '@vp/composables';
import IconFace from '@vp/icons/face.svg?component';

// 区分类型
const isEmpty = useRouteValid('empty');
const StateComponent = isEmpty ? 'VEmpty' : 'VLoading';
</script>
