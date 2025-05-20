<template>
  <DemoRow
    flex
    flex-center
  >
    <VBtn
      v-for="btnType in ['default', 'primary', 'link']"
      :key="btnType"
      :type="btnType"
    >
      {{ btnType }}
    </VBtn>
  </DemoRow>
</template>
