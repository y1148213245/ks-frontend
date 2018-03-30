/**
 * created by yy 2018/3/29
 * 咨询详情页组件的配置文件 放请求的url、params...
 */

import component from "../informationDetail.vue";

const name = component.name; // 组件标签名

const title = "资讯详情组件"; // 组件title

const description = `资讯详情组件，通过点击首页资讯进入，显示资讯详情和评论列表组件。`; // 组件描述信息

const dev = {
  information: {
    information_01: {
      showItem: ['like', 'collect', 'share', 'review'], // 控制显示哪些项： like（点赞）  collect （收藏）  share （分享）
      queryDetail: { // 查询资讯详情 
        url: '/data/ui_information_information_01_query_detail.json',
        params: { // 请求参数
          pubId: '',
          loginName: ''
        },
        keys: { // 字段兼容
          title: "pub_resource_name", // 资讯标题
          author: "information_SYS_AUTHORS", // 作者
          pubTime: "information_a_pubTime", // 资讯发布时间
          content: "information_a_content", // 资讯内容
          picture: "pub_picBig", // 图片
        },
        display: {  // template 固定显示内容
          noAuthor: '暂无作者',
          like: "点赞",
          collect: "收藏",
          share: "分享",
        },
      },
      collectOrLike: { // 收藏 / 点赞
        url: 'data/ui_information_information_01_collect_like.json',
        params: {
          loginName: '',
          pubId: '',
          operateType: '',
          siteId: CONFIG.SITE_CONFIG.siteId
        }
      },

    }
  },
  bookreview: { // 评论
    bookreview_01: {
      queryComments: { // 查询评论
        url: CONFIG.BASE_URL + 'comment/comments.do',
        params: {
          pubId: "",
          pageIndex: 1,
          pageSize: 15,
          siteId: CONFIG.SITE_CONFIG.siteId,
        }
      },
      addComment: { // 添加评论
        url: CONFIG.BASE_URL + 'comment/addComment.do',
        params: {
          pubId: "",
          loginName: "",
          content: "",
          starNum: 0,
          deviceName: "pc", // 设备类型
          colId: "",
          siteId: CONFIG.SITE_CONFIG.siteId,
          type: "1",
          parentId: "0",
          activityId: '',
        }
      }
    }
  },
};

const prod = {
  information: {
    information_01: {
      showItem: ['like', 'collect', 'share', 'review'], // 控制显示哪些项： like（点赞）  collect （收藏）  share （分享）
      queryDetail: { // 查询资讯详情 
        url: CONFIG.BASE_URL + 'spc/cms/publish/detail.do',
        params: { // 请求参数
          pubId: '',
          loginName: ''
        },
        keys: { // 字段兼容
          title: "pub_resource_name", // 资讯标题
          author: "information_SYS_AUTHORS", // 作者
          pubTime: "information_a_pubTime", // 资讯发布时间
          content: "information_a_content", // 资讯内容
          picture: "pub_picBig", // 图片
        },
        display: { // template 固定显示内容
          noAuthor: '暂无作者',
          like: "点赞",
          collect: "收藏",
          share: "分享",
        },
      },
      collectOrLike: { // 收藏 / 点赞
        url: CONFIG.BASE_URL + 'collection/addCollect.do',
        params: {
          loginName: '',
          pubId: '',
          operateType: '',
          siteId: CONFIG.SITE_CONFIG.siteId
        }
      },
    }
  },
  bookreview: { // 评论
    bookreview_01: {
      queryComments: { // 查询评论
        url: CONFIG.BASE_URL + 'comment/comments.do',
        params: {
          pubId: "",
          pageIndex: 1,
          pageSize: 15,
          siteId: CONFIG.SITE_CONFIG.siteId,
        }
      },
      addComment: { // 添加评论
        url: CONFIG.BASE_URL + 'comment/addComment.do',
        params: {
          pubId: "",
          loginName: "",
          content: "",
          starNum: 0,
          deviceName: "pc", // 设备类型
          colId: "",
          siteId: CONFIG.SITE_CONFIG.siteId,
          type: "1",
          parentId: "0",
          activityId: '',
        }
      }
    }
  },

};

const platform = 'PC';
const pageType = ['detail', 'channel'];
const resourceType = ['information'];

export {
  name,
  title,
  dev,
  prod,
  description,
  platform,
  pageType,
  resourceType
};
