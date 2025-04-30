<template>
  <DemoRow
    v-for="type in ['default', 'primary']"
    :key="type"
    flex
  >
    <VBtn
      v-for="size in ['small', 'medium', 'large']"
      :key="size"
      :type="type"
      :size="size"
    >
      {{ size }}
    </VBtn>
  </DemoRow>
</template>
