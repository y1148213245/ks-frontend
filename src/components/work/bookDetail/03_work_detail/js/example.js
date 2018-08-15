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
      collectUrl: 'collection/addWorkCollect.do', // 添加作品收藏
      /* collectParams: {
        loginName: '',
        resourceId: '',
        resourceType: '',
        operateType: '0',
        siteId: CONFIG.SITE_CONFIG.siteId
      }, */
      loadUrl: 'dynamicFile/file.do?recordID=',  // 下载附件类型文章
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
        area:'AREA',//地区
        school:'SCHOOL'//学校
      },
      crumbs:{
        toActivityListHref:'./activityrace.html?pubId=143#activityProduct'
      },
      getActivityInfo: {/* 活动详情配置 */
        url: 'spc/prodb/detail.do',
        requestParams: {/* 请求参数配置 */
          doclibCode: 'PORTAL_ACTIVITY'
        },
        dataKeys: {/* 返回数据的字段名配置 */
          voteSwitch: 'PRAISE_SWITCH',
          endDate: 'END_TIMESTAMPNEW',
          startDate: 'BEGIN_TIMESTAMPNEW',
          topic:'SYS_TOPIC'
        }
      },
      staticText:{
        notHave:"暂无",
        yes:"是",
        noInstructions:"暂无说明",
        author:"作者：",
        comments:"评论",
        support:"赞",
        competingCategory:"参赛类别：",
        region:"地区：",
        school:"学校：",
        form:"表单",
        haveCollected:"已收藏",
        collectArticles:"收藏文章",
        downloadTheArticle:"下载文章",
        weChatScanShare:"微信扫一扫分享",
        pleaseLoginFirst:"请您先登录",
        operationFailed:"操作失败",
        year:"年",
        month:"月",
        day:"日"
      }
    }
  }
};

const prod = {
  bookdetail: {
    bookdetail_03: {
      // url:  'spc/prodb/detail.do',
      url: 'book/getWorkDetail.do',  // 查询作品详情
      collectUrl: 'collection/addWorkCollect.do', // 添加作品收藏
      /* collectParams: {
        loginName: '',
        resourceId: '',
        resourceType: '',
        operateType: '0',
        siteId: CONFIG.SITE_CONFIG.siteId
      }, */
      loadUrl: 'dynamicFile/file.do?recordID=',  // 下载附件类型文章
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
        area:'AREA',//地区
        school:'SCHOOL',//学校
        workType:'WORKSTYPE'/* 投稿类型 */
      },
      getActivityInfo: {/* 活动详情配置 */
        url: 'spc/prodb/detail.do',
        requestParams: {/* 请求参数配置 */
          doclibCode: 'PORTAL_ACTIVITY'
        },
        dataKeys: {/* 返回数据的字段名配置 */
          voteSwitch: 'PRAISE_SWITCH',
          endDate: 'END_TIMESTAMPNEW',
          startDate: 'BEGIN_TIMESTAMPNEW',
          abstract: 'DESCRIPTION',
          isHide:'IS_HIDE',
          voteDescription:'PRAISE_DESCRIPTION',
          topic:'SYS_TOPIC'
        }
      },
      crumbs:{
        toActivityListHref:'./activityrace.html?pubId=143#activityProduct'
      },
      staticText:{
        notHave:"暂无",
        yes:"是",
        noInstructions:"暂无说明",
        author:"作者：",
        comments:"评论",
        support:"赞",
        competingCategory:"参赛类别：",
        region:"地区：",
        school:"学校：",
        form:"表单",
        haveCollected:"已收藏",
        collectArticles:"收藏文章",
        downloadTheArticle:"下载文章",
        weChatScanShare:"微信扫一扫分享",
        pleaseLoginFirst:"请您先登录",
        operationFailed:"操作失败",
        year:"年",
        month:"月",
        day:"日"
      }
    }
  }
};
const childComponents = ["work_bookdetail_03", "work_bookreview_02", "work_common_03"];
const platform = 'PC';
const pageType = ['detail'];
const resourceType = ['information'];

export { name, title, dev, prod, description, platform, pageType, resourceType, childComponents };
