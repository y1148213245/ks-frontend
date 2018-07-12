/**
 * 资讯轮播
 */

import component from "../Pic_noWords_Swiper.vue";


const name = component.name; // 组件标签名

const title = "资讯轮播组件"; // 组件title

const description = `资讯轮播`; // 组件描述信息

const dev = {
  swiper:{
    pic_noWords_04:{
      staticText:{
        noCover:"暂无封面"
      }
    }
  }

};

const prod = {
  swiper: {
    pic_noWords_04: {
      url:  'spc/cms/publish/list.do',
      params: {
        conditions: "[{pub_col_id:'83'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "16",
        searchText: ""
      },
      infoDetailHref: "../pages/informationInfo.html?pubId=",
      staticText:{
        noCover:"暂无封面"
      }
    }
  }
};


const platform = 'PC';
const pageType = ['index'];
const resourceType = ['book', 'information', 'journal', 'vedio'];

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
