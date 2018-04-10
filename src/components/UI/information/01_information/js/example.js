/**
 * created by yy 2018/3/29
 * 咨询详情页组件的配置文件 放请求的url、params...
 */

import component from "../informationDetail.vue";

const name = component.name; // 组件标签名

const title = "资讯详情组件"; // 组件title

const description = `资讯详情组件，通过点击首页资讯进入，显示资讯详情和评论列表组件。详情组件内含评论组件。`; // 组件描述信息

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
  }
};

const prod = {  // 详情组件内含评论组件 评论组件作为子组件 配置不要提到父组件里面
  information: {
    information_01: {
      showItem: ['like', 'collect', 'share', 'review'], // 控制显示哪些项： like（点赞）  collect （收藏）  share （分享）
      queryDetail: { // 查询资讯详情 
        url:  'spc/cms/publish/detail.do',
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
        url:  'collection/addCollect.do',
        params: {
          loginName: '',
          pubId: '',
          operateType: '',
          siteId: CONFIG.SITE_CONFIG.siteId
        }
      },
    }
  }

};

// 该父组件所包含的子组件，第一个是该父组件本身的组件name
const childComponents = ["ui_information_01", "work_bookreview_01"]; 

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
