/**
 * created by yy 2018/3/29
 * 文联作者详情组件的配置文件
 */

import component from "../authorDetail.vue";

const name = component.name;  // 组件标签名

const title = "文联作者详情组件";  // 组件title

const description = `文联作者详情组件,介绍作者详细资料`;  // 组件描述信息

const dev = {




};

const prod = {
  components: {
    common: {
      // url: CONFIG.BASE_URL + 'spc/cms/publish/detail.do',
      url:`${CONFIG.BASE_URL}spc/cms/publish/detail.do`,
      // swiperUrl:CONFIG.BASE_URL + 'spc/cms/publish/list.do',
      swiperUrl:`${CONFIG.BASE_URL}spc/cms/publish/relatedZX.do`,
      params: {
        pubId:'',
        loginName:''
      },
      swiperParams: {
        // conditions:'[{"BOOK_SYS_AUTHORS":""},{"pub_site_id":"'+CONFIG.SITE_CONFIG.siteId+'"}]',
        // groupBy:"pub_resource_id",
        // orderBy:"BOOK_PUBDATE desc",
        // pageNo:"1",
        // pageSize:"4",
        // searchText:""
        pubId:''
      },
      keys: {
        information_SYS_TOPIC: "information_SYS_TOPIC",
        pub_picBig: "pub_picBig",
        currentType: "currentType",
        information_a_collaborator: "information_a_collaborator",
        information_a_tag: "information_a_tag",
        information_a_abstract: "information_a_abstract",
        information_a_content: "information_a_content"
      }
    }
  },
  toDetailAddress:{
    url:'./bookdetail.html',
    params:'pubId'
  },
};

const platform = 'PC';
const pageType = ['detail', 'channel'];
const resourceType = ['information'];

export {name, title, dev, prod, description, platform, pageType, resourceType};

