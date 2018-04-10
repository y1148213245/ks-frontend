/*
 * @Author: yan.chaoming 
 * @Date: 2018-04-09 17:19:54 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-04-09 17:20:37
 */
export default {
  name: "newsdetail",
  informationDetail: {
    work_informationdetail_02: {
      getDetailUrl: CONFIG.BASE_URL + 'spc/prodb/detail.do',
      getPreAndNextUrl: CONFIG.BASE_URL + 'spc/prodb/activity/prevNextNews.do',
      collectUrl: CONFIG.BASE_URL + 'collection/addWorkCollect.do',
      attachUrl:CONFIG.BASE_URL + 'dynamicFile/file.do',
      show: ['time', 'collect', 'share', 'abstract', 'download'],/* 显示功能配置 */
      attachTypeCode:'original',/* 附件类型 */
      params:{
        getDetailRequestParam_doclibCode:'PORTAL_ACTIVITYNEWS'/* 库码 */
      },
      keys: {
        topic: 'SYS_TOPIC',
        time: 'SYS_CREATED',
        content: 'TEXTCONTENT',
        resourceType:'doclibCode',/* 资源库码字段名 */
        resourceId:'SYS_DOCUMENTID',/* 资源id */
        attachList :'ATTACH_LIST',/* 附件列表字段 */
        fileRecordID:'fileRecordID',/*  附件id字段名 */
        attachTypeCode:'attachTypeCode',/* 附件类型字段名 */
        isCollect:'isCollect',/* 是否被收藏字段名 */

        eventListenData_preNextConfig_activityId:'activityID',/* 事件传入的上一篇下一篇查询参数 活动id字段名 */
        eventListenData_preNextConfig_pageNo:'page',
        eventListenData_preNextConfig_pageSize:'pageSize',
        eventListenData_preNextConfig_orderBy:'orderBy',

        getDetailRequestParam_doclibCode: 'doclibCode',//库码字段名
        getDetailRequestParam_docID: 'docID',//资源字段名,
        getDetailRequestParam_loginName:'loginName',//登陆名

        getPreNextRequestParam_newsID:'newsID',/* 上一篇下一篇查询参数 新闻id字段名 */
        getPreNextRequestParam_activityId:'activityID',/* 上一篇下一篇查询参数 活动id字段名 */
        getPreNextRequestParam_pageNo:'page',/* 上一篇下一篇查询参数 页码字段名 */
        getPreNextRequestParam_pageSize:'pageSize',/* 上一篇下一篇查询参数 页容字段名 */
        getPreNextRequestParam_orderBy:'orderBy',/* 上一篇下一篇查询参数 排序字段名 */

        preNextData_preId:'prev',/* 上一篇下一篇数据 上一篇id字段名 */
        preNextData_nextId:'next',/* 上一篇下一篇数据 下一篇id字段名 */

        getAttachParam_recordID:'recordID',/* 获取附件链接参数:附件id参数名 */
      },
      /* 加载数据的方式，选一 */
      driveMode: {
        /* 事件驱动加载数据 */
        eventMode: {
          listenEventName: 'eventName_toNewsDetail',/* 监听时间名,加载数据 */
          /* 要获取数据中的字段名 */
          dataKeys: {
            docID: 'SYS_DOCUMENTID',
          }
        },
        /* 获取location参数加载数据 */
        // locationMode: {
        //   dataKeys: {
        //     docID: '',
        //   }
        // }
      },
      eventName_back: 'eventName_backNewsList',
    }
  },
};