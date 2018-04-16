/*
 * @Author: song 
 * @Date: 2018-02-06 11:12:46 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-04-16 15:31:46
 */
export default {
  name: "productiondetail",
  bookdetail: {
    bookdetail_03: {
      // url:  'spc/prodb/detail.do',
      url:  'book/getWorkDetail.do',  // 查询作品详情
      collectUrl:  'collection/addWorkCollect.do', // 添加作品收藏
      /* collectParams: {
        loginName: '',
        resourceId: '',
        resourceType: '',
        operateType: '0',
        siteId: CONFIG.SITE_CONFIG.siteId
      }, */
      loadUrl:  'dynamicFile/file.do?recordID=',  // 下载附件类型文章
      params: {
        doclibCode: '',
        docID: '',
      },
      keys: {
        title: 'SYS_TOPIC',       // 作品标题
        author: 'POTHUNTER_NAME', // 作品作者
        // commentNum: '',     // 评论数 评论数通过调评论接口获得
        voteNum: 'VOTE_COUNT', // 投票数
        raceType: 'CLASS',     // 参赛类别
        abstract: 'DESCRIPTION',   // 作品简介
        content: 'TEXTCONTENT',    // 正文内容
        attachment: 'ATTACH_LIST', // 附件信息
        docId: 'SYS_DOCUMENTID', // 作品docId
        isCollect: 'isCollect',    // 作品是否收藏
        isHide: 'IS_HIDE' // 是否允许显示正文 or 是否允许下载附件
      },
      getActivityInfo:{/* 活动详情配置 */
        url:'spc/prodb/detail.do',
        requestParams:{/* 请求参数配置 */
          doclibCode:'PORTAL_ACTIVITY'
        },
        dataKeys:{/* 返回数据的字段名配置 */
          voteSwitch:'PRAISE_SWITCH'
        }
      }
    }
  },
  review: {  // 查询作品评论列表
    getParamType:'href',/* event:事件取参 ,href:地址栏取参 */
    queryreview: {
      url:  'comment/getWorksComment.do',
      params: {
        resourceType: '',
        resourceId: '',
        type: '1',    //1：老师  2：普通
        pageIndex: 1,
        pageSize: 15,
        siteId: CONFIG.SITE_CONFIG.siteId
      },
      reviewType: [{  // 评论角色配置
        type: '1',
        name: '教师点评'
      }, {
        type: '2',
        name: '用户点评'
      }]
    },
    addreview: {  // 添加作品评论 索引库里面没有作品
      url:  'comment/addWorksComment.do',
      params: {
        pubId: '',  //  所以pubId为空
        loginName: '',
        content: '',
        siteId: CONFIG.SITE_CONFIG.siteId,
        parentId: '0',
        starNum: '0',
        type: '1',
        colId: '',
        memberType: '',  // 1:普通人员 2：机构人员 3：评委老师 4：评论老师 5：学生
        resourceName: '', // 必须要填
        resourceType: '',// 必须要填
        resourceId: '',  // 必须要填 
        activityId: '',  // 活动ID 必填
      }
    }
  },
};
