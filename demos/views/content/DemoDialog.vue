<!-- 弹窗/抽屉 -->
<template>
  <DemoCard title="基本用法">
    <template #desc>
      <ol>
        <li>
          <code>v-model:visible</code> 显示状态，当前为 <code>{{ isVisible }}</code>
        </li>
        <li><code>props.width</code> 宽度</li>
        <li><code>props.title</code> 标题，为空不显示顶栏</li>
        <li><code>props.showClose</code> 是否显示关闭按钮</li>
        <li><code>props.closeOnClickModal</code> 是否在点击 modal 时关闭</li>
        <li v-if="isDrawer"><code>props.placement</code> 出现位置</li>
        <li><code>slot.default</code> 中间内容，<code>slot.footer</code> 底栏内容</li>
        <li><code>@open</code> 和 <code>@close</code> 切换显示状态时触发</li>
      </ol>
    </template>
    <DemoRow flex>
      <MxRadioGroup
        v-if="isDrawer"
        v-model:value="placement"
        :items="placementItems"
      />
      <MxBtn @click="isVisible = true">打开弹窗</MxBtn>
    </DemoRow>
  </DemoCard>

  <component
    :is="isDrawer ? 'MxDrawer' : 'MxDialog'"
    v-model:visible="isVisible"
    :width="width"
    :title="showTitle ? '标题' : null"
    :show-close="showClose"
    :close-on-click-modal="closeOnClickModal"
    :placement="isDrawer ? placement : null"
    @open="writeLog('open')"
    @close="writeLog('close')"
  >
    <DemoRow>
      <MxCheckbox
        v-model:checked="showTitle"
        label="是否有标题"
        block
      />
      <MxCheckbox
        v-model:checked="showClose"
        label="是否显示关闭按钮"
        block
      />
      <MxCheckbox
        v-model:checked="closeOnClickModal"
        label="点击 modal 时是否可以关闭"
        block
      />
      <MxCheckbox
        v-model:checked="showFooter"
        label="是否显示底栏"
        block
      />
    </DemoRow>
    <MxRadioGroup
      v-model:value="width"
      :items="widthItems"
    />
    <template
      v-if="showFooter"
      #footer
    >
      <MxBtn
        type="primary"
        @click="isVisible = false"
      >
        确定
      </MxBtn>
      <MxBtn @click="isVisible = false">取消</MxBtn>
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

// 参数
const isVisible = ref(false);
const width = ref(undefined);
const widthItems = ['200px', '400px', '600px', '800px'].map(val => ({ value: val, label: `宽度${val}` }));
const placement = ref('left');
const placementItems = [
  { value: 'left', label: '左侧' },
  { value: 'right', label: '右侧' }
];
const showTitle = ref(true);
const showClose = ref(true);
const closeOnClickModal = ref(true);
const showFooter = ref(true);
</script>
