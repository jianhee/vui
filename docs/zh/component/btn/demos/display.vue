<template>
  <VBtn
    v-for="btnType in ['default', 'primary']"
    :key="btnType"
    :type="btnType"
    display="block"
    class="vui-mb-10"
  >
    {{ btnType }}
  </VBtn>
</template>
