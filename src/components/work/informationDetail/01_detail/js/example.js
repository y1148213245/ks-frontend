/*
 *带自动登录的登录组件
 */

import component from "../infoDetail.vue";

const name = component.name;  // 组件标签名

const title = "资讯详情组件";  // 组件title

const description = `资讯详情
分享子组件:ui_share_01
    modulename:work_informationdetail_01_share
`;  // 组件描述信息

const dev = {
	informationDetail: {
		work_informationdetail_01: {
      url: '../data/bookDetail_01_bookDetail.json',
      params: {
        pubId: '',
        loginName: ''
      },
      collectOrLike: {
        url: '',
        params: {
          pubId: '',
          operateType: '0',
          siteId: ''
        }
      },
      showItem:[],/* 目前控制附件  attach:附件 collect:收藏*/
      event:{
        detailReady:'listenInfoDetail'/* 详情信息加载完毕事件名 */
      },
      keys: {
        show_key: false,
        information_SYS_AUTHORS: 'information_SYS_AUTHORS',
        information_a_pubTime: 'information_a_pubTime',
        information_SYS_TOPIC: 'information_SYS_TOPIC',
        information_a_content: 'information_a_content',
        information_collect: 'information_collect',
        information_share: 'information_share',
        pub_widget_url:'pub_widget_url',
        pub_widget_content:'pub_widget_content'
      },
		  staticText:{
        author:"作者：",
        createDate:"创建日期：",
        source:"来源：",
        collect:"收藏",
        abstract:"摘要：",
        noAbstract:"暂无摘要",
        downloadAttachment:"附件下载：",
        collectSuccess:"收藏成功",
      }
		}
	}
};

const prod = {
	informationDetail: {
    work_informationdetail_01: {
      url: 'spc/cms/publish/detail.do',
      params: {
        pubId: '',
        loginName: ''
      },
      keys: {
        show_key: false,
        information_SYS_AUTHORS: 'information_SYS_AUTHORS',
        information_a_pubTime: 'information_a_pubTime',
        information_SYS_TOPIC: 'information_SYS_TOPIC',
        information_a_content: 'information_a_content',
        information_collect: 'information_collect',
        information_share: 'information_share',
        pub_widget_url:'pub_widget_url',
        pub_widget_content:'pub_widget_content'
      },
      collectOrLike: {
        url: 'collection/addCollect.do',
        params: {
          pubId: '',
          operateType: '0',
          siteId: ''
        }
      },
      showItem:[],/* 目前控制附件  attach:附件 collect:收藏*/
      event:{
        detailReady:'listenInfoDetail'/* 详情信息加载完毕事件名 */
      },
      staticText:{
        author:"作者：",
        createDate:"创建日期：",
        source:"来源：",
        collect:"收藏",
        abstract:"摘要：",
        noAbstract:"暂无摘要",
        downloadAttachment:"附件下载：",
        collectSuccess:"收藏成功",
      }
    }
  }
};

const platform = 'huayu';
const pageType = ['channel'];
const resourceType = ['information'];
const childComponents = ["work_informationdetail_01", "ui_share_01"];
export {name, title, dev, prod, description, platform, pageType, resourceType,childComponents};

