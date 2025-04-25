<!-- 插件+方法 -->
<template>
  <DemoCard title="i18n">{{ t('hello') }}</DemoCard>
  <DemoCard title="toast">
    <DemoRow flex>
      <VBtn @click="toast.success('这是一个成功提示')">成功</VBtn>
      <VBtn @click="toast.error('这是一个失败提示')">失败</VBtn>
    </DemoRow>
  </DemoCard>
  <DemoCard title="字符串相关的方法">
    <VForm label-position="top">
      <VFormFiled label="生成UUID">
        当前结果：<code>{{ guid() }}</code>
      </VFormFiled>
      <VFormFiled label="字数统计测试文本">
        <div
          v-for="(text, index) in textArr"
          :key="text"
        >
          {{ index + 1 }}.
          {{ text }}
        </div>
      </VFormFiled>
      <VFormFiled label="字数统计结果">
        <div
          v-for="(text, index) in textArr"
          :key="text"
        >
          {{ index + 1 }}. 字符数量
          <code>{{ countText(text).charCount }}</code>
          不包含空格的字符数量
          <code>{{ countText(text).charCountWithoutSpace }}</code>
          单词数量
          <code>{{ countText(text).wordCount }}</code>
        </div>
      </VFormFiled>
    </VForm>
  </DemoCard>
  <DemoCard title="数字相关的方法">
    <VForm label-position="top">
      <VFormFiled label="生成随机整数">
        <div>
          默认范围 0-10000：<code>{{ randomIntNum() }}</code>
        </div>
        <div>
          指定范围 190-200：<code>{{ randomIntNum(190, 200) }}</code>
        </div>
      </VFormFiled>
    </VForm>
  </DemoCard>
  <DemoCard title="数组相关的方法">
    <VForm label-position="top">
      <VFormFiled label="测试数据">
        <div
          v-for="(item, index) in testArray"
          :key="index"
        >
          数组{{ index + 1 }}：<code>{{ item }}</code>
        </div>
      </VFormFiled>
      <VFormFiled label="检查/获取两个数组的重复项">
        <div>
          数字数组1和2：<code>{{ hasCommonItems(testArray[0], testArray[1]) }}</code> <code>{{ getCommonItems(testArray[0], testArray[1]) }}</code>
        </div>
        <div>
          数字数组1和3：<code>{{ hasCommonItems(testArray[0], testArray[2]) }}</code> <code>{{ getCommonItems(testArray[0], testArray[2]) }}</code>
        </div>
        <div>
          对象数组4和5：<code>{{ hasCommonItems(testArray[3], testArray[4], 'id') }}</code> <code>{{ getCommonItems(testArray[3], testArray[4], 'id') }}</code>
        </div>
        <div>
          对象数组4和6：<code>{{ hasCommonItems(testArray[3], testArray[5], 'id') }}</code> <code>{{ getCommonItems(testArray[3], testArray[5], 'id') }}</code>
        </div>
      </VFormFiled>
    </VForm>
  </DemoCard>
  <DemoCard title="校验相关的方法">
    <VForm label-position="top">
      <VFormFiled label="校验是否有效网址">
        <div
          v-for="url in testUrls"
          :key="url"
        >
          {{ url }}：<code>{{ isValidUrl(url) }}</code>
        </div>
      </VFormFiled>
    </VForm>
  </DemoCard>
  <DemoCard title="浏览器相关的方法">
    <VForm label-position="top">
      <VFormFiled label="获取设备类型">
        当前设备：<code>{{ getDeviceType() }}</code>
      </VFormFiled>
      <VFormFiled label="获取当前URL中的指定参数">
        test 参数：<code>{{ getUrlParams('test') }}</code>
      </VFormFiled>
      <VFormFiled label="复制文本"><VBtn @click="copyCurrentUrl">复制当前网址</VBtn></VFormFiled>
    </VForm>
  </DemoCard>
  <DemoCard title="日期时间相关的方法">
    <VForm label-position="top">
      <VFormFiled label="获取时间">
        <div>
          1.默认时间+默认格式：<code>{{ getDateTime() }}</code>
        </div>
        <div>
          2.指定时间+指定格式：<code>{{ getDateTime(time1, format1) }}</code>
        </div>
      </VFormFiled>
      <VFormFiled label="获取UTC时间">
        <div>
          1.默认时间+默认格式：<code>{{ getUTCDateTime() }}</code>
        </div>
        <div>
          2.指定时间+指定格式：<code>{{ getUTCDateTime(time1, format1) }}</code>
        </div>
      </VFormFiled>
      <VFormFiled label="获取语言环境的时间">
        <div>
          1.默认时间+默认格式+默认语言：<code>{{ getLocalDateTime() }}</code>
        </div>
        <div>
          2.指定时间+指定格式+默认语言：<code>{{ getLocalDateTime(time1, format2) }}</code>
        </div>
        <div>
          3.指定时间+指定格式+指定语言：<code>{{ getLocalDateTime(time1, format2, 'en-us') }}</code>
        </div>
      </VFormFiled>
      <VFormFiled label="获取相对时间">
        <div
          v-for="item in timeArray"
          :key="item"
        >
          {{ item.title }}：<code>{{ getTimeAgo(item.time) }}</code>
        </div>
      </VFormFiled>
    </VForm>
  </DemoCard>
</template>

<script setup>
import { t, toast } from 'vui/plugins';
import { guid, countText, randomIntNum, getCommonItems, hasCommonItems, isValidUrl, getDeviceType, getUrlParams, copyText, getDateTime, getUTCDateTime, getLocalDateTime, getTimeAgo } from 'vui/utils';

// 字符串
const textArr = [
  // 全英文
  'abcd efgh ijkl mnop',
  // 全中文
  '测试 测试 测试 测试',
  // 中英混合
  'abcd测试 efgh 测试 ijkl测试 mnop 测试'
];

// 数组
const testArray = [
  [1, 2, 3],
  [3, 4, 5],
  [5, 6, 7],
  [{ id: 1 }, { id: 2 }, { id: 3 }],
  [{ id: 3 }, { id: 4 }, { id: 5 }],
  [{ id: 5 }, { id: 6 }, { id: 7 }]
];

// 校验
const testUrls = ['https://123.com', 'https://123', '123.com', 'abcd01223456789'];

// 复制
async function copyCurrentUrl() {
  const isSuccess = await copyText(location.href);
  if (isSuccess) {
    toast.success('复制成功');
  } else {
    toast.error('复制失败');
  }
}

// 时间
const time1 = '2025';
const format1 = 'YYYY/MM/DD HH:mm:ss';
const format2 = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };

// 相对时间
const timeStamp = Date.now();
const timeArray = [
  { title: '1分钟内', time: new Date(timeStamp - 10 * 1000) },
  { title: '1小时内', time: new Date(timeStamp - 10 * 60 * 1000) },
  { title: '1天内', time: new Date(timeStamp - 10 * 60 * 60 * 1000) },
  { title: '7天内', time: new Date(timeStamp - 5 * 24 * 60 * 60 * 1000) },
  { title: '1年内', time: new Date(timeStamp - 10 * 24 * 60 * 60 * 1000) },
  { title: '1年以上', time: new Date(timeStamp - 380 * 24 * 60 * 60 * 1000) }
];
</script>
