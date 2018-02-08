/*
 * @Author: yan.chaoming 
 * @Date: 2018-02-07 15:34:23 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-02-07 17:12:25
 */

import component from '../fuwen.vue'
const name = component.name;  // 组件标签名
const title = '辅文详情组件';  // 组件title
const description = `
  辅文详情组件,监听eventName_listen事件 接受第一个参数取出相关id`;  // 组件描述信息
const dev = {
  activityDetail: {
    work_activitydetail_02: {
      url: '/data/work_activitydetail_02.json',
      key: {
        content:'content' //辅文内容
      },
      eventName_listen:"loadSearchResult",
      isDevelopment:true,
    }
  }
};
const prod = {
  activityDetail: {
    work_activitydetail_02: {
      url: BASE_URL + 'spc/cms/publish/list.do',
      key: {
        content:'content'
      },
      eventName_listen: 'loadSearchResult',
    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };