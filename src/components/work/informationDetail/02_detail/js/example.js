import component from '../newsDetail.vue'
const name = component.name;  // 组件标签名
const title = '新闻详情组件';  // 组件title
const description = `新闻详情组件`;  // 组件描述信息
const dev = {
  informationDetail: {
    work_informationdetail_02: {
      getDetailUrl: BASE_URL + '/spc/prodb/detail.do?doclibCode=PORTAL_ACTIVITY&docID=601948',
      show: ['time', 'collect', 'share', 'abstract', 'download'],
    }
  }
};
const prod = {
  informationDetail: {
    work_informationdetail_02: {
      getDetailUrl: BASE_URL + 'spc/prodb/detail.do',
      getPreAndNextUrl: BASE_URL + 'spc/prodb/activity/prevNextNews.do',
      collectUrl: BASE_URL + 'collection/addWorkCollect.do',
      attachUrl:BASE_URL + 'dynamicFile/file.do',
      show: ['time', 'collect', 'share', 'abstract', 'download'],/* 显示功能配置 */
      attachTypeCode:'original',/* 附件类型 */
      params: {
        getDetailRequestParam_doclibCode: 'PORTAL_ACTIVITYNEWS'/* 库码 */
      },
      keys: {
        topic: 'SYS_TOPIC',
        time: 'SYS_CREATED',
        content: 'TEXTCONTENT',
        resourceType:'doclibCode',/* 资源库码字段名 */
        resourceId:'SYS_DOCUMENTID',/* 资源id字段名 */
        attachList :'ATTACH_LIST',/* 附件列表字段 */
        fileRecordID:'fileRecordID',/*  附件id字段名 */
        attachTypeCode:'attachTypeCode',/* 附件类型字段名 */
        

        eventListenData_preNextConfig_activityId: 'activityID',/* 事件或href传入的上一篇下一篇查询参数 活动id字段名 */
        eventListenData_preNextConfig_pageNo: 'page',
        eventListenData_preNextConfig_pageSize: 'pageSize',
        eventListenData_preNextConfig_orderBy: 'orderBy',

        getDetailRequestParam_doclibCode: 'doclibCode',//库码字段名
        getDetailRequestParam_docID: 'docID',//资源字段名,

        getPreNextRequestParam_newsID: 'newsID',/* 上一篇下一篇查询参数 新闻id字段名 */
        getPreNextRequestParam_activityId: 'activityID',/* 上一篇下一篇查询参数 活动id字段名 */
        getPreNextRequestParam_pageNo: 'page',/* 上一篇下一篇查询参数 页码字段名 */
        getPreNextRequestParam_pageSize: 'pageSize',/* 上一篇下一篇查询参数 页容字段名 */
        getPreNextRequestParam_orderBy: 'orderBy',/* 上一篇下一篇查询参数 排序字段名 */

        preNextData_preId: 'prev',/* 上一篇下一篇数据 上一篇id字段名 */
        preNextData_nextId: 'next',/* 上一篇下一篇数据 下一篇id字段名 */

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
        locationMode: {
          dataKeys: {
            docID: 'docID',
          }
        }
      },
      eventName_back: 'eventName_backNewsList',
    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };