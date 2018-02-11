/*
 * @Author: yan.chaoming 
 * @Date: 2018-02-05 14:11:10 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-02-11 15:46:03
 */
export default {
  name: "activityrace",
  activityDetail: {
    work_activitydetail_01: {
      url: '/data/work_activitydetail_01.json',
      keys: {
        title: 'title',//标题
        pics: 'pics',//轮播图
        content: 'content',//内容
        illustration:'pub_illustration',
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
    }
  },
  review: {  
    queryreview: { // 查询评论组件
      url: '../data/activityreview_02_data.json'
  }
  },
};