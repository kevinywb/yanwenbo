import axios from 'axios';

axios.defaults.baseURL = "http://localhost:2000/2000";
axios.defaults.baseURL = "http://yanwenbo.cn/2000";

const service = axios.create({
  xsrfCookieName: 'xsrf-token'
});

service.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

service.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error)
});

export default service;
