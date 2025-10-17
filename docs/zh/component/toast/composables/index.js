// 消息类型
export const typeItems = [
  { label: '默认', value: undefined },
  { label: 'primary', value: 'primary' },
  { label: 'success', value: 'success' },
  { label: 'warning', value: 'warning' },
  { label: 'error', value: 'error' },
  { label: 'info', value: 'info' }
];

// 消息内容
export const renderMessage = label => `这是一条 ${label} 类型的消息`;
