/*
 * @Author: yan.chaoming 
 * @Date: 2018-02-07 10:48:04 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-02-11 15:49:47
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
        endDate:'endDate',
        resourceId:'resourceId',
        illustration:'illustration',
      },
      eventName_loadedDatas:'eventName_loadedDatas',
      toUploadPagUrl:'',
    }
  }
};
const prod = {
  activityDetail: {
    work_activitydetail_01: {
      url: BASE_URL + 'spc/cms/publish/detail.do',
      keys: {
        title:'PORTAL_ACTIVITY_SYS_TOPIC',
        pics:'pics',
        content:'PORTAL_ACTIVITY_DESCRIPTION',
        endDate:'PORTAL_ACTIVITY_END_TIMESTAMPNEW',
        resourceId:'pub_resource_id',
        illustration:'pub_illustration',
        requestUrlParam_pubId:'pubId',
        toUploadPageUrlParam_docId:'docId',
      },
      eventName_loadedDatas: 'eventName_loadedDatas',
      toUploadPagUrl:'./uploadproduction.html',
      
    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };