/**
 * created by song 2017/12/19
 * 左侧分类导航栏组件的配置文件 放请求的url、params...
 */

import component from "../classification.vue";

const name = component.name;  // 组件标签名

const title = "分类导航组件";  // 组件title

const description = `图书分类导航`;  // 组件描述信息

const dev = {
  classification: {
    classification_01: {
      url: '../data/classification_01_classification.json'
    }
  }
};

const prod = {
  classification: {
    classification_01: {
      url: CONFIG.BASE_URL + "spc/prodb/tree-leve-one-code.do",
      params: {
        code: "BOOK",
      },
      broadcastName: 'queryClassificationList'
    }
  }
};

const platform = 'PC';
const pageType = ['list', 'channel'];
const resourceType = ['book'];

export {name, title, dev, prod, description, platform, pageType, resourceType};

