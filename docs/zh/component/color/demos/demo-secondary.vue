<template>
  <div class="c-demo-color-group">
    <ColorBox
      v-for="type in ['Success', 'Warning', 'Error', 'Info']"
      :key="type"
      :type="type"
    />
  </div>
</template>

<script setup>
import ColorBox from './demo-main.vue';
</script>
