/*
 * @Author: song 
 * @Date: 2018-02-06 11:12:46 
 * @Last Modified by: song
 * @Last Modified time: 2018-02-11 16:22:04
 */
export default {
  name: "productiondetail",
  bookdetail: {
    bookdetail_03: {
      // url: 'http://172.19.92.76:8080/portal/api/' + 'spc/prodb/detail.do',
      url: BASE_URL + 'spc/prodb/detail.do',
      params: {
        doclibCode: '',
        docID: '',
      },
      keys: {
        title: 'SYS_TOPIC', // 作品标题
        author: 'SYS_AUTHORS', // 作品作者
        commentNum: '',     // 评论数
        voteNum: 'VOTE_COUNT', // 投票数
        raceType: 'CLASS', // 参赛类别
        abstract: 'DESCRIPTION',
      }
    }
  },
  review: {  // 查询作品评论列表
    queryreview: {
      url: BASE_URL + 'comment/getWorksComment.do',
      params: {
        resourceType: '',
        resourceId: '',
        type: '1',    //1：老师  2：普通
        pageIndex: 1,
        pageSize: 15,
        siteId: SITE_CONFIG.siteId
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
      url: BASE_URL + 'comment/addWorksComment.do',
      params: {
        pubId: '',  //  所以pubId为空
        loginName: '',
        content: '',
        siteId: SITE_CONFIG.siteId,
        parentId: '0',
        starNum: '0',
        type: '1',
        colId: '',
        memberType: '',  // 1:普通人员 2：机构人员 3：评委老师 4：评论老师 5：学生
        resourceName: '', // 必须要填
        resourceType: '',// 必须要填
        resourceId: '',  // 必须要填 
      }
    }
  },
};
