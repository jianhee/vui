<template>
  <VSkeleton>
    <VSkeletonItem
      width="50%"
      center
    />
    <VSkeletonItem
      width="80%"
      height="10px"
      center
    />
    <VSkeletonItem
      aspect-ratio="16/9"
      devider
    />
    <VSkeletonItem
      v-for="n in 3"
      :key="n"
      :rows="4"
      :devider="n !== 3"
    />
  </VSkeleton>
</template>
