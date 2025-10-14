<template>
  <DemoSpace flex>
    <DemoConfig
      label="只修改图标"
      label-position="top-center"
    >
      <VComponentMatchRoute icon="face" />
    </DemoConfig>
    <DemoConfig
      label="只修改样式"
      label-position="top-center"
    >
      <VComponentMatchRoute :icon-props="{ color: 'pink', size: 100 }" />
    </DemoConfig>
    <DemoConfig
      label="修改图标和样式"
      label-position="top-center"
    >
      <VComponentMatchRoute
        icon="face"
        :icon-props="{ color: 'pink', size: 100 }"
      />
    </DemoConfig>
    <DemoConfig
      label="不使用图标"
      label-position="top-center"
    >
      <VComponentMatchRoute :icon="null" />
    </DemoConfig>
  </DemoSpace>
</template>
