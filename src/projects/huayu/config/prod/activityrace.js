/*
 * @Author: yan.chaoming 
 * @Date: 2018-02-05 14:11:10 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-02-11 15:49:45
 */
export default {
  name: "activityrace",
  activityDetail: {
    work_activitydetail_01: {
      url: BASE_URL + 'spc/cms/publish/detail.do',
      keys: {
        title: 'PORTAL_ACTIVITY_SYS_TOPIC',//标题
        pics: 'pics',//轮播图
        content: 'PORTAL_ACTIVITY_DESCRIPTION',//内容
        endDate: 'PORTAL_ACTIVITY_END_TIMESTAMPNEW',
        resourceId:'pub_resource_id',
        illustration:'pub_illustration',
        requestUrlParam_pubId:'pubId',
        toUploadPageUrlParam_docId:'docId',
      },
      eventName_loadedDatas: 'eventName_loadedDatas',
      toUploadPagUrl: './uploadproduction.html',
    },
    work_activitydetail_02: {
      module1: {
        url: BASE_URL + 'spc/prodb/getPublicize.do',
        topic: '奖项设置',
        keys: {
          topic: 'topic',
          content: 'content',
          eventName_listen_resourceId:'pub_resource_id',
          eventName_listen_resourceType:'pub_resource_type',
          requestUrlParam_docId:'docID',
          requestUrlParam_code:'code',
        },
        eventName_listen: "eventName_loadedDatas",
      }
    }
  }
};