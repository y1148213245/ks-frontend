/**
 * created by zrn 2018/08/21
 * (金融博览财富)活动详情页组件的配置文件 放请求的url、params...
 */

import component from "../informationDetail.vue";

const name = component.name; // 组件标签名

const title = "活动详情组件"; // 组件title

const description = `活动详情组件,报名按钮传递参数`; // 组件描述信息

const dev = {
  information: {
    information_05: {
      showItem: ['like', 'collect', 'share', 'review'], // 控制显示哪些项： like（点赞）  collect （收藏）  share （分享）
      queryDetail: { // 查询资讯详情
        url: '/data/ui_information_information_05_query_detail.json',
        params: { // 请求参数
          pubId: '',
          loginName: ''
        },
        keys: { // 字段兼容
          title: "JINRONGHUODONGKU_SYS_TOPIC", // 活动标题
          content: "JINRONGHUODONGKU_DESCRIPTION", // 内容
        },
        display: {  // template 固定显示内容
          noAuthor: '暂无作者',
          like: "点赞",
          collect: "收藏",
          share: "分享",
        },
      },
      signBtn:{
        isShow: true,
        name: "报名",
        toUrl: "../pages/activityform.html"
      },
      collectOrLike: { // 收藏 / 点赞
        url: '',
        params: {
          loginName: '',
          pubId: '',
          operateType: '',
          siteId: CONFIG.SITE_CONFIG.siteId
        }
      },
      shareLists: [
        {
          title: 'QQ好友',
          class: 'popup_sqq',
          cmd: 'sqq',
        },
        {
          title: '微信',
          class: 'popup_weixin',
          cmd: 'weixin',
        },
        {
          title: '分享到新浪微博',
          class: 'bds_tsina',
          cmd: 'tsina',
        },
        {
          title: '更多',
          class: 'bds_more',
          cmd: 'more',
        }
      ],
      staticText: {
        yourPosition: "您的位置：",
        homePage: "首页",
        infoContent: "资讯内容",
        shareTo: "分享到：",
        QQZone: "QQ空间",
        weChat:"微信",
        shareToSinaWeibo: "分享到新浪微博",
        forMore: "更多",
        pleaseLogin:"请登录",
        operationErrorInfo:"操作有误，请稍后重试",
        font:"字体",
        big:"大",
        middle:"中",
        small:"小",
        noDate: "暂无日期",
        noUrl: "没有链接"
      }

    }
  }
};

const prod = {  // 详情组件内含评论组件 评论组件作为子组件 配置不要提到父组件里面
  information: {
    information_05: {
      showItem: ['like', 'collect', 'share', 'review'], // 控制显示哪些项： like（点赞）  collect （收藏）  share （分享）
      queryDetail: { // 查询资讯详情
        url:  'spc/cms/publish/detail.do',
        params: { // 请求参数
          pubId: '',
          loginName: ''
        },
        keys: { // 字段兼容
          title: "JINRONGHUODONGKU_SYS_TOPIC", // 活动标题
          content: "JINRONGHUODONGKU_DESCRIPTION", // 内容
        },
        display: { // template 固定显示内容
          noAuthor: '暂无作者',
          like: "点赞",
          collect: "收藏",
          share: "分享",
        },
      },
      signBtn:{
        isShow: true,
        name: "报名",
        toUrl: "../pages/activityform.html"
      },
      collectOrLike: { // 收藏 / 点赞
        url:  'collection/addCollect.do',
        params: {
          loginName: '',
          pubId: '',
          operateType: '',
          siteId: CONFIG.SITE_CONFIG.siteId
        }
      },
      shareLists: [
      {
        title: 'QQ好友',
        class: 'popup_sqq',
        cmd: 'sqq',
      },
      {
        title: '微信',
        class: 'popup_weixin',
        cmd: 'weixin',
      },
      {
        title: '分享到新浪微博',
        class: 'bds_tsina',
        cmd: 'tsina',
      },
      {
        title: '更多',
        class: 'bds_more',
        cmd: 'more',
      }
    ],
      staticText: {
        yourPosition: "您的位置：",
        homePage: "首页",
        infoContent: "资讯内容",
        shareTo: "分享到：",
        QQZone: "QQ空间",
        weChat:"微信",
        shareToSinaWeibo: "分享到新浪微博",
        forMore: "更多",
        pleaseLogin:"请登录",
        operationErrorInfo:"操作有误，请稍后重试",
        font:"字体",
        big:"大",
        middle:"中",
        small:"小",
        noDate:"暂无日期",
        noUrl: "没有链接"
      }
    }
  }

};

// 该父组件所包含的子组件，第一个是该父组件本身的组件name
const childComponents = ["ui_information_05", "work_bookreview_01"];

const platform = 'PC';
const pageType = ['detail', 'channel'];
const resourceType = ['information'];

export {
  name,
  title,
  dev,
  prod,
  description,
  childComponents,
  platform,
  pageType,
  resourceType
};
