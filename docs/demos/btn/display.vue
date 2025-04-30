<template>
  <DemoRow
    v-for="type in ['default', 'primary']"
    :key="type"
  >
    <VBtn
      :type="type"
      display="block"
    >
      {{ type }}
    </VBtn>
  </DemoRow>
</template>
