/*
 *带自动登录的登录组件
 */

import component from "../infoDetail.vue";

const name = component.name;  // 组件标签名

const title = "资讯详情组件";  // 组件title

const description = `资讯详情`;  // 组件描述信息

const dev = {
	informationDetail: {
		work_informationdetail_01: {
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
      }
    }
  }
};

const platform = 'huayu';
const pageType = ['channel'];
const resourceType = ['information'];

export {name, title, dev, prod, description, platform, pageType, resourceType};

