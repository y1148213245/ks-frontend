/*
 * @Author: yan.chaoming 
 * @Date: 2018-02-05 14:11:10 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-02-09 17:47:27
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
        raceStatus: 'raceStatus',//活动状态
        endDate:'PORTAL_ACTIVITY_END_TIMESTAMPNEW',
      },
      eventName_loadedDatas: 'eventName_loadedDatas',
      toUploadPagUrl: '',
    }
  }
};