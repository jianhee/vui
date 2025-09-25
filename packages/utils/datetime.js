/**
 * 日期时间工具
 * @description 基于dayjs的工具集 https://www.dayjs.com/docs/zh-CN/installation/installation
 * @i18n        国际化 https://www.dayjs.com/docs/zh-CN/i18n/loading-into-nodejs
 * @plugin      UTC模式 https://www.dayjs.com/docs/zh-CN/manipulate/utc
 * @plugin      相对时间 https://www.dayjs.com/docs/zh-CN/display/from-now
 */

// 资源
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ssrBrowser } from '../utils/browser';
import 'dayjs/locale/zh-cn';

// 语言
const lang = ssrBrowser.langShort === 'zh' ? 'zh-CN' : 'en';
dayjs.locale(lang);

// 插件
dayjs.extend(utc);
dayjs.extend(relativeTime);

// 工具函数
export const datetime = {
  /**
   * 将本地时间格式化为指定格式
   * @param {'now'|string|number|Date} value 需要解析的值
   *   - 字符串 'now'：表示使用当前时间
   *   - 任意一个可以解析为时间的值：表示使用指定时间，参考 https://day.js.org/docs/zh-CN/parse/parse
   * @param {string} formator 输出格式：参考 https://day.js.org/docs/zh-CN/display/format
   * @returns {string} 格式化后的时间字符串
   * @example
   * datetime.format('2003-04-05 6:7:8', 'YYYY/MM/DD HH:mm:ss') // '2003/04/05 06:07:08'
   */
  format(value, formator) {
    if (!value) return '';

    const value_ = this.fixTime(value);
    return dayjs(value_).format(formator);
  },
  /**
   * 将UTC时间格式化为指定格式
   * @params @returns 同format方法
   * @description 输入值被当作UTC时间，直接解析后输出
   * @example
   * datetime.formatUTC('2003-04-05 6:7:8', 'YYYY/MM/DD HH:mm:ss') // '2003/04/05 06:07:08'
   */
  formatUTC(value, formator) {
    if (!value) return '';

    const value_ = this.fixTime(value);
    return dayjs.utc(value_).format(formator);
  },
  /**
   * 将本地时间转换为UTC时间并格式化
   * @params @returns 同format方法
   * @description 输入值被当作本地时间，转换为UTC后输出
   * @example
   * datetime.format2UTC('2003-04-05 6:7:8', 'YYYY/MM/DD HH:mm:ss') // '2003/04/04 22:07:08'
   */
  format2UTC(value, formator) {
    if (!value) return '';

    const value_ = this.fixTime(value);
    return dayjs(value_).utc().format(formator);
  },
  /**
   * 将本地时间格式化为当前语言环境下的格式
   * @params @returns 同format方法
   * @description 参考 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
   * @example
   * datetime.format2Local('2003-04-05 6:7:8', 'YYYY/MMMM/DD hh:mm:ss')
   * // zh-CN "2003年4月05日 上午06:07:08"
   * // en-US "April 05, 2003 at 06:07:08 AM"
   */
  format2Local(value, formator) {
    if (!value) return '';

    const value_ = this.fixTime(value);
    const dateObj = value_ ? new Date(value_) : new Date();
    const options = this.dayjsFormator2IntlOptions(formator);
    return new Intl.DateTimeFormat('default', options).format(dateObj);
  },
  /**
   * 将 dayjs 格式化字符串转换为 Intl.DateTimeFormat 的 options 对象
   * @param {string} dayjsFormator  同format方法
   * @returns {Object}              适用于 Intl.DateTimeFormat 的选项对象
   */
  dayjsFormator2IntlOptions(dayjsFormator) {
    // 定义令牌映射规则：以 '2003-04-05 6:7:8' 为例展示中英文环境下的格式化结果
    const tokenMap = [
      // 年份
      { token: 'YYYY', option: { year: 'numeric' } }, // "2003年" | "2003"
      { token: 'YY', option: { year: '2-digit' } }, // "03年" | "03"
      // 月份
      { token: 'MMMM', option: { month: 'long' } }, // "四月" | "April"
      { token: 'MMM', option: { month: 'short' } }, // "4月" | "Apr"
      { token: 'MM', option: { month: '2-digit' } }, // "04月" | "04"
      { token: 'M', option: { month: 'numeric' } }, // "4月" | "4"
      // 日期
      { token: 'DD', option: { day: '2-digit' } }, // "05日" | "05"
      { token: 'D', option: { day: 'numeric' } }, // "5日" | "5"
      // 星期
      { token: 'dddd', option: { weekday: 'long' } }, // "星期六" | "Saturday"
      { token: 'ddd', option: { weekday: 'short' } }, // "周六" | "Sat"
      { token: 'dd', option: { weekday: 'narrow' } }, // "六" | "S"
      // 24小时制时间
      { token: 'HH', option: { hour: '2-digit', hour12: false } }, // "06时" | "06"
      { token: 'H', option: { hour: 'numeric', hour12: false } }, // "6时" | "06"
      // 12小时制时间 (AM/PM)
      { token: 'hh', option: { hour: '2-digit', hour12: true } }, // "上午06时" | "06 AM"
      { token: 'h', option: { hour: 'numeric', hour12: true } }, // "上午6时" | "6 AM"
      // 分钟
      { token: 'mm', option: { minute: '2-digit' } }, // "07" | "07"
      { token: 'm', option: { minute: 'numeric' } }, // "7" | "7"
      // 秒
      { token: 'ss', option: { second: '2-digit' } }, // "08" | "08"
      { token: 's', option: { second: 'numeric' } }, // "8" | "8"
      // 上午/下午标识
      { token: 'A', option: { hour12: true } }, // "上午" | "AM"
      { token: 'a', option: { hour12: true } }, // "上午" | "AM"
      // 时区相关
      { token: 'Z', option: { timeZoneName: 'short' } } // "2003/4/5 GMT+8" | "4/5/2003, GMT+8"
    ];

    // 遍历映射规则，检查格式化字符串中是否包含对应的令牌
    const options = {};
    tokenMap.reverse().forEach(({ token, option }) => {
      if (dayjsFormator.includes(token)) {
        Object.assign(options, option);
      }
    });

    return options;
  },
  /**
   * 获取相对时间
   * @param value  同format方法
   * @returns {string} 格式化后的相对时间字符串
   * @example
   * datetime.formatRelativeTime('2003-04-05 6:7:8') // '2003年4月'
   */
  formatRelativeTime(value) {
    if (!value) return '';

    // 时间
    const now = dayjs();
    const value_ = this.fixTime(value);
    const target = dayjs(value_);

    // 日期差
    const diffDays = now.diff(target, 'day');

    // 1分钟内/1小时内/1天内/7天内显示相对时间："5天前"
    if (diffDays < 7) {
      return target.fromNow();
    }

    // 1年内显示月份+日期："4月5日"
    if (diffDays < 365) {
      return this.format2Local(value_, 'MMM-D');
    }

    // 1年以上显示年份+月份："2003年4月"
    return this.format2Local(value_, 'YYYY-MMM');
  },
  // 处理输入的值
  fixTime(value) {
    // 1.当前时间
    if (value === 'now') {
      return undefined;
    }
    // 2.时间戳：转为13位（毫秒级）
    if (typeof value === 'number') {
      const str = value.toString();
      const len = str.length;
      if (len === 10) {
        // 10位（秒级）
        return value * 1000;
      } else if (len < 13) {
        // 少于13位补零
        return parseInt(str.padEnd(13, '0'));
      } else if (len > 13) {
        // 超过13位截取
        return parseInt(str.substring(0, 13));
      } else {
        // 正常13位
        return value;
      }
    }
    // 3.其它类型
    return value;
  }
};
