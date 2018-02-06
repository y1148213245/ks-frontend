/**
 * created by song 2018/2/1
 * 活动资讯
 */

import component from "../activityInfo.vue";

const name = component.name;  // 组件标签名

const title = "资讯组件";  // 组件title

const description = `活动资讯组件`;  // 组件描述信息

const dev = {
  list_word: {
    list_word_01: {
      url: '/data/activty_info_01_data.json'
    }
  }
};

const prod = {
  list_word: {
    list_word_01: {
      url: BASE_URL,
      params: {
      },
      picLinkUrl: ''
    }
  }
};

const platform = 'PC';
const pageType = ['channel'];
const resourceType = ['information'];

export {name, title, dev, prod, description, platform, pageType, resourceType};

