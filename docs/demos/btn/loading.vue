<template>
  <DemoRow flex>
    <VBtn
      v-for="type in ['default', 'primary']"
      :key="type"
      :type="type"
      loading
    >
      {{ type }}
    </VBtn>
  </DemoRow>
</template>
