<template>
  <DemoRow
    flex
    flex-center
  >
    <VBtn
      v-for="type in ['default', 'primary', 'link']"
      :key="type"
      :type="type"
    >
      {{ type }}
    </VBtn>
  </DemoRow>
</template>
