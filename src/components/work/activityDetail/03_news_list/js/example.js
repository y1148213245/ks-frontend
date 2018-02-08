/*
 * @Author: yan.chaoming 
 * @Date: 2018-02-07 16:27:52 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-02-07 17:09:44
 */

import component from '../newsList.vue'
const name = component.name;  // 组件标签名
const title = '活动详情组件';  // 组件title
const description = `活动详情组件`;  // 组件描述信息
const dev = {
  activityDetail: {
    work_activitydetail_03: {
      url: '/data/work_activitydetail_03.json',
      keys: {
        title: "title",
        picUrl: "picUrl",
        date: "date",
        abstract: "abstract"
      },
      eventName_listen:'',
      isDevelopment:true,//自动加载数据 不需要事件触发
    }
  }
};
const prod = {
  activityDetail: {
    work_activitydetail_03: {
      url: BASE_URL + 'spc/cms/publish/list.do',
      keys: {
        title: "title",
        picUrl: "picUrl",
        date: "date",
        abstract: "abstract"
      },
      eventName_listen:''
    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };