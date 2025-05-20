<template>
  <DemoRow
    v-for="btnType in ['default', 'primary']"
    :key="btnType"
    flex
  >
    <VBtn
      v-for="btnSize in ['small', 'medium', 'large']"
      :key="btnSize"
      :type="btnType"
      :size="btnSize"
    >
      {{ btnSize }}
    </VBtn>
  </DemoRow>
</template>
