/*
 * @Author: yan.chaoming
 * @Date: 2018-02-05 14:11:10
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-04-23 15:31:33
 */
export default {
  name: "activityrace",
  common: {
    vote_03: {  // 投票组件
      url:  'spc/prodb/activity/vote.do?',
      params: {
        browserId: '', // 浏览器指纹
        docID: '',
      }
    }
  },
  activityDetail: {
    work_activitydetail_01: {
      url: '/data/work_activitydetail_01.json',
      keys: {
        title: 'title', //标题
        pics: 'pics', //轮播图
        content: 'content', //内容
        illustration: 'pub_illustration',
      },
      eventName_loadedDatas: 'eventName_loadedDatas',
      toUploadPagUrl: './uploadproduction.html',
    },
    work_activitydetail_02: {
      module1: {
        url: '/data/work_activitydetail_02.json',
        topic: '奖项设置',
        keys: {
          topic: 'topic',
          content: 'content',
          eventName_listen_resourceId: 'pub_resource_id',
          eventName_listen_resourceType: 'pub_resource_type',
          requestUrlParam_docId: 'docID',
          requestUrlParam_code: 'code',
        },
        eventName_listen: "eventName_loadedDatas",
      },
      module2: {
        url:  'spc/prodb/getPublicize.do',
        showType:'simple',/* simple 表示展示部分内容 附带展开收起按钮，不需要则不配置*/
        topic: '公告',
        keys: {
          topic: 'topic',
          content: 'content',
          eventName_listen_resourceId: 'pub_resource_id',
          eventName_listen_resourceType: 'pub_resource_type',
          requestUrlParam_docId: 'docID',
          requestUrlParam_code: 'code',
        },
        eventName_listen: "eventName_loadedDatas",
      }
    },
    work_activitydetail_03: {
      url: '/data/work_activitydetail_03.json',
      getPicUrl: 'dynamicFile/stream.do',
      params: {
        getListParam_pageNo: '1',
        getListParam_pageSize: '10',
        getListParam_orderBy: 'SYS_DOCUMENTID DESC',
      },
      keys: {
        title: "SYS_TOPIC",
        picId: "COVERID",
        date: "SYS_CREATED",
        abstract: "ABSTRACT",
        eventListenData_activityId: 'pub_resource_id',
        getPicParam_coverId:'recordID',
        getListParam_activityID: 'activityID',
        getListParam_pageNo: 'page',
        getListParam_pageSize: 'pageSize',
        getListParam_orderBy: 'orderBy',
      },
      toDetailMode: {/* 去详情页模式 ，选其一：'event'抛出事件传入参数，'href' href转跳 */
        event: {
          name: 'eventName_toNewsDetail',/* 事件名 */
        },
      },
      eventName_listen: 'eventName_loadedDatas'
    },
    work_activitydetail_04: {
      url:  'spc/prodb/detail.do',
      getSchoolUrl:  'spc/prodb/searchNL.do',
      params: {
        getPlaceRequest_doclibCode: 'PORTAL_ACTIVITY',//配库码
        getSchoolRequest_doclibCode: 'PORTAL_SCHOOL',//配库码
        getSchoolRequest_relations: '1,1',//1并且，2或者
        getSchoolRequest_cols: 'AREA,CLASS',//字段名
        getSchoolRequest_symbols: '1,1',//匹配模式，1包含，2等于，3不等于
      },
      keys: {
        output_place: 'place',
        output_school: 'school',
        output_group: 'group',
        output_searchText: 'searchText',
        school_name: 'SYS_TOPIC',
        eventData_docID: 'pub_resource_id',//事件接受参数数据，资源id
        getPlaceRequest_doclibCode: 'doclibCode',
        getPlaceRequest_docID: 'docID',//资源id
        getPlaceRequestBack_areas: 'AREALIMT',
        getPlaceRequestBack_classes: 'CLASSLIMT',
        getSchoolRequest_doclibCode: 'doclibCode',
        getSchoolRequest_relations: 'relations',
        getSchoolRequest_cols: 'cols',
        getSchoolRequest_symbols: 'symbols',
        getSchoolRequest_vals: 'vals',//值
      },
      eventName_search: 'eventName_search',
      eventName_listenLoadedData: 'eventName_loadedDatas',
    },
    work_activitydetail_05: {
      module1: {
        url: '/data/work_activitydetail_05.json',
        toProductDetailUrl: 'productiondetail.html',
        params: {
          getListParam_doclibCode: 'PORTAL_WORKS',
          getListParamOptions: {//扩展查询参数配置，扩展属性名应与“扩展查询参数”字段配置一致
            activityId: {
              getListParam_relations: '1',//配库字段
              getListParam_cols: 'ACTIVITYID',
              getListParam_symbols: '2',
              getListParam_memberType: '4',
            },
            'place': {
              getListParam_relations: '1',
              getListParam_cols: 'AREA',
              getListParam_symbols: '1',
              getListParam_memberType: '4',
            },
            'school': {
              getListParam_relations: '1',
              getListParam_cols: 'SCHOOL',
              getListParam_symbols: '1',
              getListParam_memberType: '4',
            },
            'group': {
              getListParam_relations: '1',
              getListParam_cols: 'CLASS',
              getListParam_symbols: '1',
              getListParam_memberType: '4',
            },
            'searchText': {
              getListParam_relations: '1',
              getListParam_cols: 'SYS_TOPIC',
              getListParam_symbols: '1',
              getListParam_memberType: '4',
            },
          },

          toProductDetailParam_resourceType: 'PORTAL_WORKS'
        },
        keys: {
          title: 'SYS_TOPIC',
          author: 'POTHUNTER_NAME',
          date: 'SYS_CREATED',
          abstract: 'DESCRIPTION',
          teacherCommentNum: 'DIS_COUNT_NUM',
          voteNum: 'VOTE_COUNT',
          resourceId: 'SYS_DOCUMENTID',
          resourceName: 'SYS_TOPIC',
          activityId: 'ACTIVITYID',
          voteDescription:'PORTAL_ACTIVITY_PRAISE_DESCRIPTION',

          eventListienLoadDatas_activityId: 'pub_resource_id',
          eventListienLoadDatas_voteSwitch:'PORTAL_ACTIVITY_PRAISE_SWITCH',
          eventListienLoadDatas_endDate:'PORTAL_ACTIVITY_END_TIMESTAMPNEW',
          eventListienLoadDatas_reviewDate:'PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW',
          eventListienLoadDatas_startDate:'PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW',

          eventListienSearchDatas: ['place', 'school', 'group', 'searchText'],//扩展查询参数
          getListParam_doclibCode: 'doclibCode',
          getListParam_relations: 'relations',
          getListParam_cols: 'cols',
          getListParam_symbols: 'symbols',
          getListParam_vals: 'vals',
          getListParam_memberType: 'memberType',
          toProductDetailParam_resourceType: 'resourceType',
          toProductDetailParam_resourceId: 'resourceId',
          toProductDetailParam_colId: 'colId',
          toProductDetailParam_resourceName: 'resourceName',
          toProductDetailParam_activityId: 'activityId',
        },
        eventName_listenLoadedData: 'eventName_loadedDatas',
        eventName_listenSearch: 'eventName_search',
        isDevelopment: false,
      },
      module2: {
        url:  'spc/prodb/getWorkList.do',
        toProductDetailUrl: 'productiondetail.html',
        params: {
          getListParam_doclibCode: 'PORTAL_WORKS',
          getListParamOptions: {//扩展查询参数配置，扩展属性名应与“扩展查询参数”字段配置一致
            activityId: {
              getListParam_relations: '1',
              getListParam_cols: 'ACTIVITYID',
              getListParam_symbols: '2',
              getListParam_memberType: '4',
            }
          },
          getListParamOptions_fixed:{/* 固定条件配置 */
            IS_EXCELLENTWORK:{//例
              getListParam_relations: '1',
              getListParam_cols: 'IS_EXCELLENTWORK',
              getListParam_symbols: '2',
              getListParam_memberType: '4',
              getListParam_vals:'是',
            },
          },
          toProductDetailParam_resourceType: 'PORTAL_WORKS'
        },
        keys: {
          title: 'SYS_TOPIC',
          author: 'POTHUNTER_NAME',
          date: 'SYS_CREATED',
          abstract: 'DESCRIPTION',
          teacherCommentNum: 'DIS_COUNT_NUM',
          voteNum: 'VOTE_COUNT',
          resourceId: 'SYS_DOCUMENTID',
          resourceName: 'SYS_TOPIC',
          activityId: 'ACTIVITYID',
          eventListienLoadDatas_activityId: 'pub_resource_id',
          eventListienSearchDatas: [],//扩展查询参数
          getListParam_doclibCode: 'doclibCode',
          getListParam_relations: 'relations',
          getListParam_cols: 'cols',
          getListParam_symbols: 'symbols',
          getListParam_vals: 'vals',
          getListParam_memberType: 'memberType',
          toProductDetailParam_resourceType: 'resourceType',
          toProductDetailParam_resourceId: 'resourceId',
          toProductDetailParam_colId: 'colId',
          toProductDetailParam_resourceName: 'resourceName',
          toProductDetailParam_activityId: 'activityId',
        },
        eventName_listenLoadedData: 'eventName_loadedDatas',
        eventName_listenSearch: '',
        isDevelopment: false,
      },
      'classification': {
        url: 'spc/prodb/getWorkList.do',
        toProductDetailUrl: 'productiondetail.html',
        classification:{/* 分类配置,无则不配置 */
          titles:['一等奖','二等奖','三等奖'],
          key:'AWARD',/* 对应数据的字段 */
        },
        params: {
          getListParam_doclibCode: 'PORTAL_WORKS',
          getListParamOptions:{//扩展查询参数配置，扩展属性名应与“扩展查询参数”字段配置一致
            activityId:{
              getListParam_relations: '1',
              getListParam_cols: 'ACTIVITYID',
              getListParam_symbols: '2',
              getListParam_memberType: '4',
            },
            'place':{//扩展属性名
              getListParam_relations: '1',
              getListParam_cols: 'AREA',
              getListParam_symbols: '1',
              getListParam_memberType: '4',
            },
            'school':{
              getListParam_relations: '1',
              getListParam_cols: 'SCHOOL',
              getListParam_symbols: '1',
              getListParam_memberType: '4',
            },
            'group':{
              getListParam_relations: '1',
              getListParam_cols: 'CLASS',
              getListParam_symbols: '1',
              getListParam_memberType: '4',
            },
            'searchText':{
              getListParam_relations: '1',
              getListParam_cols: 'SYS_TOPIC',
              getListParam_symbols: '1',
              getListParam_memberType: '4',
            },
          },
          toProductDetailParam_resourceType: 'PORTAL_WORKS'
        },
        keys: {
          title: 'SYS_TOPIC',
          author: 'POTHUNTER_NAME',
          date: 'SYS_CREATED',
          abstract: 'DESCRIPTION',
          teacherCommentNum: 'DIS_COUNT_NUM',
          voteNum: 'VOTE_COUNT',
          resourceId: 'SYS_DOCUMENTID',
          resourceName: 'SYS_TOPIC',
          activityId: 'ACTIVITYID',
          eventListienLoadDatas_activityId:'pub_resource_id',
          eventListienSearchDatas:['place','school','group','searchText'],//扩展查询参数
          getListParam_doclibCode:'doclibCode',
          getListParam_relations:'relations',
          getListParam_cols:'cols',
          getListParam_symbols:'symbols',
          getListParam_vals:'vals',
          getListParam_memberType:'memberType',
          toProductDetailParam_resourceType: 'resourceType',
          toProductDetailParam_resourceId: 'resourceId',
          toProductDetailParam_colId: 'colId',
          toProductDetailParam_resourceName: 'resourceName',
          toProductDetailParam_activityId: 'activityId',
        },
        eventName_listenLoadedData: 'eventName_loadedDatas',
        eventName_listenSearch: 'eventName_search',
        isDevelopment: false,
      }

    },
    work_activitydetail_06: {
      url: '/data/work_activitydetail_06.json',
      params: {
        paging_pageSizes: [15, 30, 50, 100],
        requestParam_memberType: '4',
        requestParam_pageNo: '1',
        requestParam_pageSize: '15'
      },
      keys: {
        name: 'userName',
        picUrl: 'picture',
        commentProduct: 'resourceName',
        commentContent: 'disContent',
        requestParam_activityId: 'activityId',
        requestParam_memberType: 'memberType',
        requestParam_pageNo: 'pageNo',
        requestParam_pageSize: 'pageSize',
      },
      eventName_listen: 'loadSearchResult',
    },
  },
  informationDetail: {
    work_informationdetail_02: {
      getDetailUrl:  'spc/prodb/detail.do',
      getPreAndNextUrl:  'spc/prodb/activity/prevNextNews.do',
      collectUrl:  'collection/addWorkCollect.do',
      attachUrl: 'dynamicFile/file.do',
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
  review: {
    queryreview: { // 查询评论组件
      url: '../data/activityreview_02_data.json'
  }
  },
  tabArr:['奖项设置','大赛新闻','参赛作品','名师指导']
};
