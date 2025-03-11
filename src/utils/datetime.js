// 日期时间相关的方法
// 依赖 dayjs
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

// 按照本地语言格式化日期时间
export function getLocalDate(format, _date) {
  if (!_date) return '';
  const date = _date === 'now' ? new Date() : new Date(_date);
  let options = null;
  if (format === 'YYYY-MM-DD') {
    // 2023-01-06
    options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  } else if (format === 'YYYY-MM-DD HH:mm') {
    // 2023-01-06 20:50
    options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
  } else if (format === 'YYYY-MM-DD dddd') {
    // 2023年1月06日 星期五
    options = { year: 'numeric', month: 'long', day: '2-digit', weekday: 'long' };
  }
  return new Intl.DateTimeFormat(navigator.language, options).format(date);
}

/**
 * 获取当前UTC日期
 * @returns {string} 返回格式化的UTC日期字符串："2025-01-01"
 */
export function getUTCDate() {
  return dayjs.utc().format('YYYY-MM-DD');
}

/**
 * 获取相对时间描述
 * @param {string|Date} date  - 要比较的日期
 * @returns {string}            返回相对时间描述："5s ago" 或 "Jan 21"
 */
export function getTimeAgo(date) {
  if (!date) return '';
  const now = dayjs();
  const _date = dayjs(date);

  // 1分钟内："5s ago"
  const diffSeconds = now.diff(_date, 'second');
  if (diffSeconds < 60) {
    return `${diffSeconds}s ago`;
  }

  // 1小时内："5m ago"
  const diffMinutes = now.diff(_date, 'minute');
  if (diffMinutes < 60) {
    return `${diffMinutes}m ago`;
  }

  // 1天内："5h ago"
  const diffHours = now.diff(_date, 'hour');
  if (diffHours < 24) {
    return `${diffHours}h ago`;
  }

  // 7天内："5d ago"
  const diffDays = now.diff(_date, 'day');
  if (diffDays < 7) {
    return `${diffDays}d ago`;
  }

  // 1年内："Jan 21"
  const diffYears = now.diff(_date, 'year');
  if (diffYears <= 1) {
    return _date.format('MMM D');
  }

  // 1年以上："Jan 2023"
  return _date.format('MMM YYYY');
}
