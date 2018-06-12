/**
 * Created by song 2018/1/9
 * 图书详情页 图书详细信息
 */

import component from "../categoryList.vue";


const name = component.name;

const title = "智享热销组件";  // 组件title

const description = `智享热销组件`;


const dev = {
  list_pic: {
    horizontal_list_03: {
      queryItemList:{
        url: '../data/ui_list_pic_03.json',
        param: {
          conditions: '[{pub_resource_type:"BOOK"},{pub_col_id:"49"},{pub_status:"1"},{BOOK_BOOK_CASCADID:"#{cascadeId}",op:"lk"},{pub_site_id:"' + CONFIG.SITE_CONFIG.siteId + '"}]',
          orderBy: "pub_a_order asc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "15",
          searchText: null
        }
      },
      toBookDetailUrl:"./bookdetail.html",
      moreType:{
        url: "./recommend.html",
        pubColId: 49,
        // type: "selling"
        colName: ''
      },
      styleType: "show4"
    }
  },
  components: {
    categoryList: {
      url: "/data/components_bestsale_categoryList.json"
    }
  }
};

const prod = {
  list_pic: {
    horizontal_list_03: {
      queryItemList: {
        url:  '/spc/cms/publish/list.do',
        param: {
          conditions: '[{pub_resource_type:"BOOK"},{pub_col_id:"49"},{pub_status:"1"},{BOOK_BOOK_CASCADID:"#{cascadeId}",op:"lk"},{pub_site_id:"' + CONFIG.SITE_CONFIG.siteId + '"}]',
          orderBy: "pub_a_order asc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "15",
          searchText: null
        }
      },
      toBookDetailUrl:"./bookdetail.html",
      moreType:{
        url: "./recommend.html",
        pubColId: 49,
        // type: "selling"
        colName: ''
      },
      styleType: "show4"
    }
  },
  components: {
    categoryList: {
      url: "/data/components_bestsale_categoryList.json"
    }
  }
};

const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
