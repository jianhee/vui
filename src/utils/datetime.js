// 日期时间相关
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

// 获取UTC日期
export function getUTCDate() {
  return dayjs.utc().format('YYYY-MM-DD');
}

// 获取格式化时间
export function getTimeAgo(date) {
  if (!date) return '';
  const now = dayjs();
  const _date = dayjs(date);

  // 1分钟内：xxs ago
  const diffSeconds = now.diff(_date, 'second');
  if (diffSeconds < 60) {
    return `${diffSeconds}s ago`;
  }

  // 1小时内：xxm ago
  const diffMinutes = now.diff(_date, 'minute');
  if (diffMinutes < 60) {
    return `${diffMinutes}m ago`;
  }

  // 1天内：xxh ago
  const diffHours = now.diff(_date, 'hour');
  if (diffHours < 24) {
    return `${diffHours}h ago`;
  }

  // 7天内：xxd ago
  const diffDays = now.diff(_date, 'day');
  if (diffDays < 7) {
    return `${diffDays}d ago`;
  }

  // 1年内：Jan 21
  const diffYears = now.diff(_date, 'year');
  if (diffYears <= 1) {
    return _date.format('MMM D');
  }

  // 1年以上：Jan 2023
  return _date.format('MMM YYYY');
}
