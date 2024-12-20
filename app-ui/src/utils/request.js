// src/utils/axios.js

import axios from 'axios';


const URL = import.meta.env.VITE_APP_BASE_API;

console.log('[URL]',URL)

// 创建一个 Axios 实例
const service = axios.create({
  baseURL: URL,  // 这里设置你的 API 基地址
  timeout: 30000,  // 请求超时设置
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 可以在此设置请求头，传递 token 等
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据进行处理
    if (response.data.code !== 200) {
      // 如果返回的 code 不为 200，抛出错误
      return Promise.reject(response.data.message || 'Error');
    }
    return response.data;  // 直接返回数据部分
  },
  (error) => {
    // 处理响应错误
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 处理未授权 (token 错误或过期)
          break;
        case 500:
          // 服务器错误
          break;
        default:
          break;
      }
    } else {
      console.error('请求超时或网络错误');
    }
    return Promise.reject(error);
  }
);

const request = {
  get(url, params) {
    return service.get(url, { params });
  },
  post(url, data) {
    return service.post(url, data);
  },
  put(url, data) {
    return service.put(url, data);
  },
  delete(url) {
    return service.delete(url);
  },
};


export default request;
