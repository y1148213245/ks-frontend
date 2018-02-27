/*
 * @Author: yan.chaoming 
 * @Date: 2018-02-05 14:11:10 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-02-27 11:08:46
 */
export default {
  name: "activityrace",
  activityDetail: {
    work_activitydetail_01: {
      url: BASE_URL + 'spc/cms/publish/detail.do',
      keys: {
        title: 'PORTAL_ACTIVITY_SYS_TOPIC',//标题
        content: 'PORTAL_ACTIVITY_DESCRIPTION',//内容
        endDate: 'PORTAL_ACTIVITY_END_TIMESTAMPNEW',
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
        url: BASE_URL + 'spc/prodb/getPublicize.do',
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
      }
    },
    work_activitydetail_04: {
      url: BASE_URL + 'spc/prodb/detail.do?doclibCode=PORTAL_ACTIVITY&docID=601948',
      keys: {
        place: 'place',
        school: 'school',
        group: 'group',
        searchText: 'searchText',
      },
      eventName_search: 'eventName_search',
      eventName_listenLoadedData: 'eventName_loadedDatas',
    },
    work_activitydetail_05: {
      url: BASE_URL + 'spc/prodb/searchNL.do',
      params: {
        doclibCode: 'PORTAL_WORKS',
        relations: '1',
        cols: 'ACTIVITYID',
        symbols: '2',
        vals: '601858',
      },
      keys: {
        title: 'SYS_TOPIC',
        author: 'POTHUNTER_NAME',
        date: 'SYS_CREATED',
        abstract: 'DESCRIPTION',
        teacherCommentNum: 'VOTE_COUNT',
        voteNum: 'VOTE_COUNT'
      },
      eventName_listenLoadedData: 'eventName_loadedDatas',
      eventName_listenSearch: 'eventName_search',
      isDevelopment: false,
    },
    review: { // 查询活动评论列表
      queryreview: {
        url: BASE_URL + 'comment/comments.do',
        params: {
          pubId: '',
          pageIndex: 1,
          pageSize: 15,
          siteId: SITE_CONFIG.siteId
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
        url: BASE_URL + 'comment/addComment.do',
        params: {
          pubId: '',
          loginName: '',
          content: '',
          siteId: SITE_CONFIG.siteId,
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
}
