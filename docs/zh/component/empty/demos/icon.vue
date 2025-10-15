<template>
  <DemoSpace flex>
    <DemoConfig
      label="不使用图标"
      label-position="top-center"
    >
      <VComponentMatchRoute :icon="null" />
    </DemoConfig>
    <DemoConfig
      label="自定义图标"
      label-position="top-center"
    >
      <VComponentMatchRoute icon="face" />
    </DemoConfig>
    <DemoConfig
      label="自定义样式"
      label-position="top-center"
    >
      <VComponentMatchRoute :icon-props="{ color: 'pink', size: 100 }" />
    </DemoConfig>
    <DemoConfig
      label="自定义图标和样式"
      label-position="top-center"
    >
      <VComponentMatchRoute
        icon="face"
        :icon-props="{ color: 'pink', size: 100 }"
      />
    </DemoConfig>
  </DemoSpace>
</template>
