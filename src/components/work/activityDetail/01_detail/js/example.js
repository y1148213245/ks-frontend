/*
 * @Author: yan.chaoming
 * @Date: 2018-02-07 10:48:04
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-08-14 14:51:38
 */


import component from '../activityDetail.vue'
const name = component.name;  // 组件标签名
const title = '活动详情组件';  // 组件title
const description = `
  1.获取到数据后会触发eventName_loadedDatas事件，第一个参数为获取的数据
  2.新增showItem配置,类型为字符串数组,包括"upload(上传按钮)"

  `;  // 组件描述信息

const dev = {
  activityDetail: {
    work_activitydetail_01: {
      url: '/data/work_activitydetail_01.json',
      keys: {
        title:'title',//标题字段
        content:'content',//内容字段
        endDate:'endDate',//结束日期字段
        resourceId:'resourceId',//资源id字段
        illustration:'illustration',//轮播图字段
        reviewDate:'reviewDate',//评奖时间,
        illustrationLinks:'links'
      },
      eventName_loadedDatas:'eventName_loadedDatas',//详情数据加载后触发的事件
      toUploadPagUrl:'',//上传页链接
      staticText: {
        uploadWork: "上传作品",
        notBegin: "未开始",
        contributeClosed: "截止投稿",
        haveEnded: "已结束"
      },
    }
  }
};
const prod = {
  activityDetail: {
    work_activitydetail_01: {
      url:  'spc/cms/publish/detail.do',
      keys: {
        title:'PORTAL_ACTIVITY_SYS_TOPIC',//标题字段
        content:'PORTAL_ACTIVITY_DESCRIPTION',//内容字段
        startDate: "PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW",// 活动开始时间字段
        endDate:'PORTAL_ACTIVITY_END_TIMESTAMPNEW',//结束日期字段
        resourceId:'pub_resource_id',//资源id字段
        illustration:'pub_illustration',//轮播图字段
        reviewDate:'PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW',//评奖时间
        illustrationLinks:'PORTAL_ACTIVITY_ACTIVITY_LINKS',//轮播图链接
        requestUrlParam_pubId:'pubId',//请求活动详情参数：活动发布id字段
        toUploadPageUrlParam_docId:'docId',//去上传页面参数：活动资源id字段
      },
      eventName_loadedDatas: 'eventName_loadedDatas',//详情数据加载后触发的事件
      toUploadPagUrl:'./uploadproduction.html',//上传页链接
      // showItem:['upload']
      staticText: {
        uploadWork: "上传作品",
        notBegin: "未开始",
        contributeClosed: "截止投稿",
        haveEnded: "已结束"
    }
    }
  }
};
const platform = 'PC';
const pageType = ['detail'];
const resourceType = ['activity'];
const childComponents = ['work_activitydetail_01','ui_swiper_06'];
export { name, title, dev, prod, description, platform, pageType, resourceType, childComponents};
