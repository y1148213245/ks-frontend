/*
 * @Author: yan.chaoming 
 * @Date: 2018-02-05 14:11:10 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-02-11 16:48:56
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
