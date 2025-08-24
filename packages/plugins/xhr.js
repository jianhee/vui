// 基于XMLHttpRequest的HTTP请求封装
// 模仿Axios的调用方式，提供 xhr.get 和 xhr.post 方法
export const xhr = {
  /**
   * 默认请求配置
   * @type {Object}
   * @property {string} baseURL - 基础请求URL前缀
   * @property {number} timeout - 请求超时时间(ms)，默认10秒
   * @property {Object} headers - 默认请求头
   */
  defaults: {
    baseURL: '',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' }
  },

  /**
   * 核心请求函数
   * @param {Object} config           - 请求配置对象
   * @param {string} config.method    - HTTP请求方法(GET/POST/PUT/DELETE等)
   * @param {string} config.url       - 请求路径
   * @param {Object} [config.params]  - URL查询参数
   * @param {Object} [config.data]    - 请求体数据
   * @param {number} [config.timeout] - 超时时间(ms)
   * @param {Object} [config.headers] - 请求头配置
   * @returns {Promise}               - 解析为响应数据或错误信息的Promise
   */
  request(config = {}) {
    // 合并默认配置与用户配置
    const finalConfig = { ...this.defaults };
    Object.keys(config).forEach(key => {
      if (key === 'headers') {
        finalConfig.headers = { ...finalConfig.headers, ...config.headers };
      } else {
        finalConfig[key] = config[key];
      }
    });
    const { method, baseURL, url, params, data, timeout, headers } = finalConfig;

    // 构建完整URL并拼接查询参数
    let fullURL = baseURL ? `${baseURL}${url}` : url;
    if (params) {
      const queryParams = new URLSearchParams();
      Object.keys(params).forEach(key => {
        queryParams.append(key, params[key]);
      });
      const queryString = queryParams.toString();
      const querySplit = fullURL.includes('?') ? '&' : '?';
      fullURL = `${fullURL}${querySplit}${queryString}`;
    }

    // 发起异步请求
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method.toUpperCase(), fullURL, true);

      // 设置超时
      xhr.timeout = timeout;

      // 设置请求头
      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key]);
      });

      // 响应处理
      xhr.onload = () => {
        let responseData;
        try {
          responseData = xhr.responseText ? JSON.parse(xhr.responseText) : null;
        } catch (e) {
          responseData = xhr.responseText;
        }

        const response = {
          data: responseData,
          status: xhr.status,
          statusText: xhr.statusText,
          headers: xhr.getAllResponseHeaders(),
          config: finalConfig
        };

        if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
          resolve(response);
        } else {
          reject(new Error(`Request failed with status code ${xhr.status}`, { cause: response }));
        }
      };

      // 错误处理
      xhr.onerror = () => {
        reject(new Error('Network Error', { cause: { config: finalConfig } }));
      };

      // 超时处理
      xhr.ontimeout = () => {
        reject(new Error(`Timeout of ${timeout}ms exceeded`, { cause: { config: finalConfig } }));
      };

      // 发送请求
      // const noData = ['get', 'head', 'options'].includes(method);
      const needData = ['post', 'put', 'patch', 'patch'].includes(method);
      if (needData && data) {
        if (data instanceof FormData) {
          // 如果是FormData类型，直接发送
          xhr.send(data);
        } else {
          // 否则发送JSON字符串
          xhr.send(JSON.stringify(data));
        }
      } else {
        xhr.send();
      }
    });
  },

  // 快捷方法 'get', 'post', 'put', 'delete', 'patch', 'head', 'options'
  // get等方法不需要请求体，第二个参数是config
  get(url, config = {}) {
    return this.request({ ...config, method: 'get', url });
  },
  // post等方法第二个参数是请求体，第三个参数是config
  post(url, data, config = {}) {
    return this.request({ ...config, method: 'post', url, data });
  }
};
