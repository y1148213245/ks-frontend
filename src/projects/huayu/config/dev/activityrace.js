/*
 * @Author: yan.chaoming 
 * @Date: 2018-02-05 14:11:10 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-02-07 17:13:16
 */
export default {
  name: "activityrace",
  activityDetail: {
    work_activitydetail_01: {
      url: '/data/work_activitydetail_01.json',
      keys: {
        title:'title',//标题
        pics:'pics',//轮播图
        content:'content',//内容
        raceStatus:'raceStatus',//活动状态
      },
      eventName_loadedDatas:'eventName_loadedDatas',
      toUploadPagUrl:'',
    },
    work_activitydetail_02: {
      url: '/data/work_activitydetail_02.json',
      keys: {
        content:'content'
      },
      eventName_listen:"eventName_loadedDatas",
      isDevelopment:true,
    },
    work_activitydetail_03: {
      url: '/data/work_activitydetail_03.json',
      keys: {
        title: "title",
        picUrl: "picUrl",
        date: "date",
        abstract: "abstract"
      },
      isDevelopment:true,
      eventName_listen:"eventName_loadedDatas",
    }
  }
};