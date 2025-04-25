<!-- 按钮 -->
<template>
  <DemoCard title="类型">
    <template #desc><code>props.type</code></template>
    <DemoRow
      flex
      flex-center
    >
      <VBtn
        v-for="type in btnTypes"
        :key="type"
        :type="type"
      >
        {{ type }}
      </VBtn>
      <VBtn type="link">link</VBtn>
    </DemoRow>
  </DemoCard>
  <DemoCard title="禁用状态">
    <template #desc><code>props.disabled</code></template>
    <DemoRow
      flex
      flex-center
    >
      <VBtn
        v-for="type in btnTypes"
        :key="type"
        :type="type"
        disabled
      >
        {{ type }}
      </VBtn>
      <VBtn
        type="link"
        disabled
      >
        link
      </VBtn>
    </DemoRow>
  </DemoCard>
  <DemoCard title="图标按钮">
    <template #desc><code>props.icon</code> VIcon 组件的 name/component/props</template>
    <DemoRow
      v-for="type in btnTypes"
      :key="type"
      flex
    >
      <VBtn
        :type="type"
        icon="close"
      >
        传入 name
      </VBtn>
      <VBtn
        :type="type"
        :icon="IconClose"
      >
        传入 component
      </VBtn>
      <VBtn
        :type="type"
        :icon="{ name: 'close' }"
      >
        传入 { name }
      </VBtn>
      <VBtn
        :type="type"
        :icon="{ component: IconClose }"
      >
        传入 { component }
      </VBtn>
    </DemoRow>
  </DemoCard>
  <DemoCard title="加载状态按钮">
    <template #desc><code>props.loading</code></template>
    <DemoRow flex>
      <VBtn
        v-for="type in btnTypes"
        :key="type"
        :type="type"
        loading
      >
        {{ type }}
      </VBtn>
    </DemoRow>
  </DemoCard>
  <DemoCard title="尺寸">
    <template #desc><code>props.size</code></template>
    <DemoRow
      v-for="type in btnTypes"
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
  </DemoCard>
  <DemoCard title="显示类型">
    <template #desc>
      <code>props.display</code> 默认
      <VBtn
        type="link"
        @click="display = 'inline'"
      >
        inline
      </VBtn>
      行内，
      <VBtn
        type="link"
        @click="display = 'block'"
      >
        block
      </VBtn>
      独占一行
    </template>
    <VBtn
      v-for="type in btnTypes"
      :key="type"
      :type="type"
      :display="display"
      :class="{
        'vui-mr-10': display === 'inline',
        'vui-mb-10': display === 'block'
      }"
    >
      default
    </VBtn>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import IconClose from '@/assets/icons/close.svg?component';

const btnTypes = ['default', 'primary'];
const display = ref('block');
</script>
