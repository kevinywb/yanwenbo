'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;

  //用端口命名服务前缀
  const prefix = '/' + app.config.cluster.listen.port;

  //接口列表
  const list = [
    ['menus', '/menus', app.controller.menus]
  ];

  list.forEach(api => {
    app.router.resources(api[0], prefix + api[1], api[2]);
  });
};