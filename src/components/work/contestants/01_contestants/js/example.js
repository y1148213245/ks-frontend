/*
 *参赛组件
 */

import component from "../contestants.vue";

const name = component.name;  // 组件标签名

const title = "参赛组件";  // 组件title

const description = `参赛`;  // 组件描述信息

const dev = {
  contestants: {
    contestants_01: {
      url: '../data/work_contestants_01_data.json',
    }
  }
};

const prod = {
  contestants: {
    contestants_01: {
      url: BASE_URL + '',
      params: {}
    }
  }
};

export {name, title, dev, prod, description};