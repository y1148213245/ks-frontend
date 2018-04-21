/**
 * Created by song 2018/1/9
 * 图书详情页 图书详细信息
 */

import component from "../workdetail.vue";


const name = component.name;

const title = "作品详情组件"; // 组件title

const description = `作品详情`;


const dev = {
  bookdetail: {
    bookdetail_03: {
      url: '../data/work_detail_03_data.json',
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
        isHide: 'IS_HIDE', // 是否允许显示正文 or 是否允许下载附件
        activityName: "ACTIVITY_NAME", // 活动名称
        createdTime: "SYS_CREATED", // 作品上传时间
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
  }
};

const prod = {
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
        isHide: 'IS_HIDE', // 是否允许显示正文 or 是否允许下载附件
        activityName: "ACTIVITY_NAME", // 活动名称
        createdTime: "SYS_CREATED", // 作品上传时间
      },
      getActivityInfo:{/* 活动详情配置 */
        url:'spc/prodb/detail.do',
        requestParams:{/* 请求参数配置 */
          doclibCode:'PORTAL_ACTIVITY'
        },
        dataKeys:{/* 返回数据的字段名配置 */
          voteSwitch:'PRAISE_SWITCH',
        }
      }
    }
  }
};

const platform = 'PC';
const pageType = ['detail'];
const resourceType = ['information'];

export { name, title, dev, prod, description, platform, pageType, resourceType };
