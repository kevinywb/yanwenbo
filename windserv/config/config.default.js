'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1545794196123_3327';

  // add your config here
  config.middleware = ['errorHandler'];

  // 只对 / 前缀的 url 路径生效
  config.errorHandler = {
    match: '/',
  }

  //启动配置
  config.cluster = {
    listen: {
      port: 2000,
      hostname: '127.0.0.1'
    }
  }
  return config;
};