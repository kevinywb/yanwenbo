'use strict';

const Controller = require('egg').Controller;

class MenuController extends Controller {
  async index() {
    this.ctx.body = await this.ctx.service.menus.all();
  }
  async show() {
    switch (this.ctx.params.id) {
      case 'nav':
        this.ctx.body = await this.ctx.service.menus.nav();
        return;
    }
    this.ctx.body = [];
  }
}

module.exports = MenuController;