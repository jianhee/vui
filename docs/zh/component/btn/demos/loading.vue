<template>
  <DemoRow flex>
    <VBtn
      v-for="btnType in ['default', 'primary']"
      :key="btnType"
      :type="btnType"
      loading
    >
      {{ btnType }}
    </VBtn>
  </DemoRow>
</template>
