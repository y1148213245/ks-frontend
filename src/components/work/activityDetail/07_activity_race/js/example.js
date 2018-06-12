/**
 * created by song 2017/12/19
 * 左侧分类导航栏组件的配置文件 放请求的url、params...
 */

import component from "../tab.vue";

const name = component.name;  // 组件标签名

const title = "华育活动竞赛项目组件";  // 组件title

const description = `华育活动竞赛项目组件`;  // 组件描述信息

const dev = {
  common: {
    vote_03: {  // 投票组件
      url: 'spc/prodb/activity/vote.do?',
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
        topic: '详情',
        keys: {
          topic: 'topic',
          content: 'content'
        },
        eventName_listen: "eventName_loadedDatas",
        isDevelopment: true,
      }
    },
    work_activitydetail_03: {
      url: '/data/work_activitydetail_03.json',
      keys: {
        title: "title",
        picUrl: "picUrl",
        date: "date",
        abstract: "abstract"
      },
      isDevelopment: true,
      eventName_listen: "eventName_loadedDatas",
    },
    work_activitydetail_04: {
      keys: {
        place: 'place',
        school: 'school',
        group: 'group',
        searchText: 'searchText',
      },
      eventName_search: 'eventName_search',
      isDevelopment: true,
    },
    work_activitydetail_05: {
      url: '/data/work_activitydetail_05.json',
      keys: {
        title: 'title',
        author: 'author',
        date: 'date',
        abstract: 'abstract',
        teacherCommentNum: 'teacherCommentNum',
        voteNum: 'voteNum'
      },
      eventName_listenSearch: 'eventName_search',
      eventName_listenLoadedData: 'eventName_loadedDatas',
      isDevelopment: true,
    },
    work_activitydetail_06: {
      url: '/data/work_activitydetail_06.json',
      keys: {
        name: 'name',
        picUrl: 'picUrl',
        comment: 'comment',
        abstract: 'abstract',
      },
      toDetailHref: '',
      isDevelopment: true,
      eventName_listen: 'eventName_loadedDatas'
    },
    work_acitivityrace_07: {
      tabArr: [
        {
          tag:'activityInstructions',
          title:'活动说明'
        },
        {
          tag:'activityPlan',
          title:'活动方案'
        },
        {
          tag:'activityNews',
          title:'活动新闻'
        },
        {
          tag:'activityProduct',
          title:'参赛作品'
        },
        {
          tag:'activityProductWinning',
          title:'获奖作品'
        },
        {
          tag:'activityTeather',
          title:'名师指导'
        }]
    }

  },
  review: {
    queryreview: { // 查询评论组件
      url: '../data/activityreview_02_data.json'
    }
  }
};

const prod = {
  common: {
    vote_03: {  // 投票组件
      url: 'spc/prodb/activity/vote.do?',
      params: {
        browserId: '', // 浏览器指纹
        docID: '',
      }
    }
  },
  activityDetail: {
    work_activitydetail_01: {
      url: 'spc/cms/publish/detail.do',
      keys: {
        title: 'PORTAL_ACTIVITY_SYS_TOPIC',//标题
        content: 'PORTAL_ACTIVITY_DESCRIPTION',//内容
        endDate: 'PORTAL_ACTIVITY_END_TIMESTAMPNEW',
        reviewDate: 'PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW',//评奖时间
        resourceId: 'pub_resource_id',
        illustration: 'pub_illustration',
        requestUrlParam_pubId: 'pubId',
        toUploadPageUrlParam_docId: 'docId',
      },
      eventName_loadedDatas: 'eventName_loadedDatas',
      toUploadPagUrl: './uploadproduction.html',
    },
    work_activitydetail_02: {
      module1: {
        url: 'spc/prodb/getPublicize.do',
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
        url: 'spc/prodb/getPublicize.do',
        showType: 'simple',/* simple 表示展示部分内容 附带展开收起按钮，不需要则不配置*/
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
    /* 大赛新闻列表配置 */
    work_activitydetail_03: {
      url: 'spc/prodb/activity/activityNews.do',
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
        getPicParam_coverId: 'recordID',
        getListParam_activityID: 'activityID',
        getListParam_pageNo: 'page',
        getListParam_pageSize: 'pageSize',
        getListParam_orderBy: 'orderBy',
      },
      toDetailMode: {/* 去详情页模式 ，选其一：'event'抛出事件传入参数，'href' href转跳 */
        href: {
          url: './newsdetail.html',/* 转跳url */
          params: {/* 查询参数 对象的key为参数名,value为从组件新闻数据中获取的字段名 */
            'docID': 'SYS_DOCUMENTID'
          },
          activityParams: {/* 查询参数 对象的key为参数名,value为从组件活动数据中获取的字段名 */
            'activityID': 'activityId'
          },
          fixedParams: {/* 查询参数 对象的key为参数名,value为值 */
            'page': '1',
            'pageSize': '10',
            'orderBy': 'SYS_DOCUMENTID DESC',
          }
        }
      },
      eventName_listen: 'eventName_loadedDatas'
    },
    /* 作品列表筛选配置 */
    work_activitydetail_04: {
      url: 'spc/prodb/detail.do',
      getSchoolUrl: 'spc/prodb/searchNL.do',
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
    /* 作品列表配置 */
    work_activitydetail_05: {
      module1: {
        url: 'spc/prodb/getWorkList.do',
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
          voteDescription: 'PORTAL_ACTIVITY_PRAISE_DESCRIPTION',

          eventListienLoadDatas_activityId: 'pub_resource_id',
          eventListienLoadDatas_voteSwitch: 'PORTAL_ACTIVITY_PRAISE_SWITCH',
          eventListienLoadDatas_endDate: 'PORTAL_ACTIVITY_END_TIMESTAMPNEW',
          eventListienLoadDatas_reviewDate: 'PORTAL_ACTIVITY_REVIEW_TIMESTAMPNEW',
          eventListienLoadDatas_startDate: 'PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW',

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
        url: 'spc/prodb/getWorkList.do',
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
          getListParamOptions_fixed: {/* 固定条件配置 */
            IS_EXCELLENTWORK: {//例
              getListParam_relations: '1',
              getListParam_cols: 'IS_EXCELLENTWORK',
              getListParam_symbols: '2',
              getListParam_memberType: '4',
              getListParam_vals: '是',
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
        classification: {/* 分类配置,无则不配置 */
          titles: ['一等奖', '二等奖', '三等奖'],
          key: 'AWARD',/* 对应数据的字段 */
        },
        params: {
          getListParam_doclibCode: 'PORTAL_WORKS',
          getListParamOptions: {//扩展查询参数配置，扩展属性名应与“扩展查询参数”字段配置一致
            activityId: {
              getListParam_relations: '1',
              getListParam_cols: 'ACTIVITYID',
              getListParam_symbols: '2',
              getListParam_memberType: '4',
            },
            'place': {//扩展属性名
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
          eventListienLoadDatas_activityId: 'pub_resource_id',
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
      }

    },
    work_activitydetail_06: {
      url: 'comment/getActivityDiscussDetail.do',
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
      toProductDetail: {/* 去作品详情页配置 */
        url: './productiondetail.html',
        superKeys: {/* key为参数名，value为从监听事件返回的数据中取数据的字段名，取出对应字段的值 */
          activityId: 'pub_resource_id'
        },
        dataKeys: {/* key为参数名，value为从列表数据中取数据的字段名，取出对应字段的值 */
          resourceId: 'resourceId',
          resourceName: 'resourceName',

        },
        fixKeys: {/* 固定参数 key为参数名，value为值*/
          resourceType: 'PORTAL_WORKS',
          colId: ''
        }
      }
    },
    work_acitivityrace_07: {
      tabArr: [
        {
          tag:'activityInstructions',
          title:'活动说明'
        },
        {
          tag:'activityPlan',
          title:'活动方案'
        },
        {
          tag:'activityNews',
          title:'活动新闻'
        },
        {
          tag:'activityProduct',
          title:'参赛作品'
        },
        {
          tag:'activityProductWinning',
          title:'获奖作品'
        },
        {
          tag:'activityTeather',
          title:'名师指导'
        }]
    }

  },
  bookReview: {
    work_bookreview_02: { // 查询活动评论列表
      reviewType: 'other',/*production：作品评论。 other： 资讯、图书、活动评论 默认为other */
      getParamType: 'event',/* event:事件取参 ,href:地址栏取参 */
      listenEvent: {
        name: 'eventName_loadedDatas',
        keys: {
          pubId: 'id',
          colId: 'pub_col_id',
          resourceName: 'pub_resource_name',
          resourceType: 'pub_resource_type',
          resourceId: 'pub_resource_id',
          activityId: 'id',
        }
      },
      queryreview: {
        url: 'comment/comments.do',
        params: {
          pubId: '',
          pageIndex: 1,
          pageSize: 15,
          siteId: CONFIG.SITE_CONFIG.siteId
        },
        reviewType: [{ // 评论角色配置
          type: '1',
          name: '教师点评'
        }, {
          type: '2',
          name: '用户点评'
        }]
      },
      addreview: { // 添加资讯、图书、活动评论（索引库里有）
        url: 'comment/addComment.do',
        params: {
          pubId: '',
          loginName: '',
          content: '',
          siteId: CONFIG.SITE_CONFIG.siteId,
          starNum: '0',
          deviceName: 'PC',
          parentId: '0',
          type: '1',
          colId: '',
          memberType: '', // 1:普通人员 2：机构人员 3：评委老师 4：评论老师 5：学生
          resourceName: '', // 值可以为空
          resourceType: '', // 值可以为空
          resourceId: '', // 值可以为空
        }
      }
    }
  }

};
const childComponents = ["work_acitivityrace_07", "work_activitydetail_01", "work_activitydetail_02", "work_activitydetail_03", "work_activitydetail_04", "work_activitydetail_05", "work_activitydetail_06", "work_bookreview_02"];
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['activity'];

export { name, title, dev, prod, description, platform, pageType, resourceType, childComponents };

