<!-- 弹窗/抽屉 -->
<template>
  <DemoCard title="基础用法">
    <template #desc>
      <ol>
        <li>
          <code>v-model:visible</code> 显示状态，当前为 <code>{{ isVisible }}</code>
        </li>
        <li><code>props.width</code> 宽度</li>
        <li v-if="isDrawer"><code>props.placement</code> 出现位置</li>
        <li><code>props.title</code> 标题</li>
        <li><code>props.showClose</code> 是否显示关闭按钮</li>
        <li><code>props.closeOnClickModal</code> 是否在点击 modal 时关闭</li>
        <li><code>slot.default</code> 中间内容，<code>slot.footer</code> 底栏内容</li>
        <li><code>@open</code> 和 <code>@close</code> 切换显示状态时触发</li>
      </ol>
    </template>
    <DemoRow
      v-if="isDrawer"
      flex
    >
      <VBtn @click="openDialog('left')">左侧打开</VBtn>
      <VBtn @click="openDialog('right')">右侧打开</VBtn>
    </DemoRow>
    <VBtn
      v-else
      @click="openDialog()"
    >
      打开弹窗
    </VBtn>
  </DemoCard>

  <component
    :is="isDrawer ? 'VDrawer' : 'VDialog'"
    v-model:visible="isVisible"
    :width="width"
    title="标题"
    :show-close="showClose"
    :close-on-click-modal="closeOnClickModal"
    :placement="isDrawer ? placement : null"
    @open="writeLog('open')"
    @close="writeLog('close')"
  >
    <VCheckbox
      v-model:checked="showClose"
      label="是否显示关闭按钮"
      display="block"
    />
    <VCheckbox
      v-model:checked="showFooter"
      label="是否显示底栏"
      display="block"
    />
    <VCheckbox
      v-model:checked="closeOnClickModal"
      label="点击 modal 时是否可以关闭"
      display="block"
    />
    <VRadioGroup
      v-model:value="width"
      :items="widthItems"
    />
    <template
      v-if="showFooter"
      #footer
    >
      <VBtn
        type="primary"
        @click="isVisible = false"
      >
        确定
      </VBtn>
      <VBtn @click="isVisible = false">取消</VBtn>
    </template>
  </component>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { writeLog } from '@/utils';

// 区分页面
const route = useRoute();
const isDrawer = computed(() => route.path === '/drawer');

// 是否显示
const isVisible = ref(false);

// 宽度
const width = ref(undefined);
const widthItems = ['200px', '400px', '600px', '800px'].map(val => ({ value: val, label: `宽度${val}` }));

// 其它
const placement = ref('left');
const showClose = ref(true);
const showFooter = ref(true);
const closeOnClickModal = ref(true);

// 打开弹窗
function openDialog(val) {
  placement.value = val;
  isVisible.value = true;
}
</script>
