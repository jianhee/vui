<!-- 按钮 -->
<template>
  <DemoCard title="类型">
    <template #desc><code>props.type</code></template>
    <DemoRow flex>
      <MxBtn
        v-for="type in btnTypes"
        :key="type"
        :type="type"
      >
        {{ type }}
      </MxBtn>
    </DemoRow>
  </DemoCard>
  <DemoCard title="禁用状态">
    <template #desc><code>props.disabled</code></template>
    <DemoRow flex>
      <MxBtn
        v-for="type in btnTypes"
        :key="type"
        :type="type"
        disabled
      >
        {{ type }}
      </MxBtn>
    </DemoRow>
  </DemoCard>
  <DemoCard title="链接按钮">
    <template #desc><code>props.link</code></template>
    <DemoRow flex>
      <MxBtn
        v-for="type in btnTypes"
        :key="type"
        :type="type"
        link
      >
        {{ type }}
      </MxBtn>
    </DemoRow>
  </DemoCard>
  <DemoCard title="图标按钮">
    <template #desc><code>props.icon</code> MxIcon 组件的 name/component/props</template>
    <DemoRow
      v-for="type in btnTypes"
      :key="type"
      flex
    >
      <MxBtn
        :type="type"
        icon="close"
      >
        传入 name
      </MxBtn>
      <MxBtn
        :type="type"
        :icon="IconClose"
      >
        传入 component
      </MxBtn>
      <MxBtn
        :type="type"
        :icon="{ name: 'close' }"
      >
        传入 { name }
      </MxBtn>
      <MxBtn
        :type="type"
        :icon="{ component: IconClose }"
      >
        传入 { component }
      </MxBtn>
    </DemoRow>
  </DemoCard>
  <DemoCard title="加载状态按钮">
    <template #desc><code>props.loading</code></template>
    <DemoRow flex>
      <MxBtn
        v-for="type in btnTypes"
        :key="type"
        :type="type"
        loading
      >
        {{ type }}
      </MxBtn>
    </DemoRow>
  </DemoCard>
  <DemoCard title="尺寸">
    <template #desc><code>props.size</code></template>
    <DemoRow
      v-for="type in btnTypes"
      :key="type"
      flex
    >
      <MxBtn
        v-for="size in ['small', 'medium', 'large']"
        :key="size"
        :type="type"
        :size="size"
      >
        {{ size }}
      </MxBtn>
    </DemoRow>
  </DemoCard>
  <DemoCard title="显示类型">
    <template #desc>
      <code>props.display</code> 默认
      <MxBtn
        type="primary"
        link
        @click="display = 'inline'"
      >
        inline
      </MxBtn>
      行内，
      <MxBtn
        type="primary"
        link
        @click="display = 'block'"
      >
        block
      </MxBtn>
      独占一行
    </template>
    <MxBtn
      v-for="type in btnTypes"
      :key="type"
      :type="type"
      :display="display"
      :class="{
        'mx-mr-10': display === 'inline',
        'mx-mb-10': display === 'block'
      }"
    >
      default
    </MxBtn>
  </DemoCard>
</template>

<script setup>
import { ref } from 'vue';
import IconClose from '@/assets/icons/close.svg?component';

const btnTypes = ['default', 'primary'];
const display = ref('block');
</script>
