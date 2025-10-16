<template>
  <DemoSpace
    flex
    class="c-demo-tables"
  >
    <DemoConfig
      label="默认状态"
      label-position="top-center"
    >
      <VTable
        :col-items="colItems"
        loading
      />
    </DemoConfig>
    <DemoConfig
      label="使用属性自定义"
      label-position="top-center"
    >
      <VTable
        :col-items="colItems"
        loading
        :loading-props="{ icon: 'face', description: '自定义文案' }"
      />
    </DemoConfig>
    <DemoConfig
      label="使用插槽自定义"
      label-position="top-center"
    >
      <VTable
        :col-items="colItems"
        loading
      >
        <template #loading>
          <VIcon icon="face" />
          <span>自定义文案</span>
        </template>
      </VTable>
    </DemoConfig>
  </DemoSpace>
</template>

<script setup>
const colItems = [
  { key: 'id', title: 'ID' },
  { key: 'title', title: '标题' },
  { key: 'name', title: '姓名' }
];
</script>
