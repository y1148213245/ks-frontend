/*
 * @Author: yan.chaoming 
 * @Date: 2018-02-07 10:48:04 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-02-09 17:47:28
 */


import component from '../activityDetail.vue'
const name = component.name;  // 组件标签名
const title = '活动详情组件';  // 组件title
const description = `
  获取到数据后会触发eventName_loadedDatas事件，第一个参数为获取的数据`;  // 组件描述信息
const dev = {
  activityDetail: {
    work_activitydetail_01: {
      url: '/data/work_activitydetail_01.json',
      keys: {
        title:'title',//标题
        pics:'pics',//轮播图
        content:'content',//内容
        raceStatus:'raceStatus',//活动状态
        endDate:'endDate',
      },
      eventName_loadedDatas:'eventName_loadedDatas',
      toUploadPagUrl:'',
    }
  }
};
const prod = {
  activityDetail: {
    work_activitydetail_01: {
      url: BASE_URL + 'spc/cms/publish/list.do',
      keys: {
        title:'PORTAL_ACTIVITY_SYS_TOPIC',
        pics:'pics',
        content:'PORTAL_ACTIVITY_DESCRIPTION',
        raceStatus:'raceStatus',
        endDate:'PORTAL_ACTIVITY_END_TIMESTAMPNEW'
      },
      eventName_loadedDatas: 'eventName_loadedDatas',
      toUploadPagUrl:'',
      
    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };