<template>
  <component :is="StateComponent">
    <slot />
  </component>
</template>

<script setup>
import { useRouteValid } from '@vp/composables';

// 区分类型
const isEmpty = useRouteValid('empty');
const StateComponent = isEmpty ? 'VEmpty' : 'VLoading';
</script>
