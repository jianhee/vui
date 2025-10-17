<template>
  <VToast
    v-for="item in typeItems"
    :key="item.value"
    :type="item.value"
    :message="renderMessage(item.label)"
    class="vui-mt-10"
  />
</template>

<script setup>
import { typeItems, renderMessage } from '../composables';
</script>
