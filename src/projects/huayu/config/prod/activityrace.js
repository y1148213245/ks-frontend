/*
 * @Author: yan.chaoming 
 * @Date: 2018-02-05 14:11:10 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-02-07 14:12:30
 */
export default {
  name: "activityrace",
  activityDetail: {
    work_activitydetail_01: {
      url: BASE_URL + 'spc/cms/publish/list.do',
      keys: {
        title:'title',
        pics:'pics',
        content:'content',
        raceStatus:'raceStatus',
      },
      eventName_loadedDatas: 'eventName_loadedDatas',
    }
  }
};