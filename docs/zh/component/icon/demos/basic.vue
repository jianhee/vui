<template>
  <div class="demo-icons">
    <DemoViewTop label="使用名称">
      <VIcon
        v-for="iconName in iconNames"
        :key="iconName"
        :name="iconName"
        v-bind="$attrs"
      />
    </DemoViewTop>
    <DemoViewTop label="使用组件">
      <VIcon
        v-for="iconComponent in iconComponents"
        :key="iconComponent"
        :component="iconComponent"
        v-bind="$attrs"
      />
    </DemoViewTop>
    <DemoViewTop label="使用插槽">
      <VIcon
        v-for="iconComponent in iconComponents"
        :key="iconComponent"
        v-bind="$attrs"
      >
        <component :is="iconComponent" />
      </VIcon>
    </DemoViewTop>
  </div>
</template>

<script setup>
import IconFace from '@vp/icons/face.svg?component';
import IconLike from '@vp/icons/like.svg?component';
import IconSearch from '@vp/icons/search.svg?component';
import IconSetting from '@vp/icons/setting.svg?component';
import IconClose from '@vp/icons/close.svg?component';
import IconLoading from '@vp/icons/loading.svg?component';

defineOptions({ inheritAttrs: false });
const iconNames = ['face', 'like', 'search', 'setting', 'close', 'loading'];
const iconComponents = [IconFace, IconLike, IconSearch, IconSetting, IconClose, IconLoading];
</script>

<style lang="scss">
.demo-icons .vui-icon {
  margin-right: 10px;
  font-size: 24px;
}
</style>
