/**
 * created by song 2018/1/9
 * 图书组件列表 新书、热销
 */
import component from "../horizontalList.vue";


const name = component.name;

const title = "图书列表组件";

const description = `图书列表`;

const dev = {
  list_pic: {
    horizontal_list_03: {
      queryItemList: {
        url: '../data/ui_list_pic_03.json',
        param: {
          conditions: '[{pub_resource_type:"BOOK"},{pub_col_id:"49"},{pub_status:"1"},{BOOK_BOOK_CASCADID:"#{cascadeId}",op:"lk"},{pub_site_id:"' + CONFIG.SITE_CONFIG.siteId + '"}]',
          orderBy: "pub_a_order asc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "15",
          searchText: null
        }
      },
      toBookDetailUrl: "./bookdetail.html",
      moreType: {
        url: "./recommend.html",
        pubColId: 49,
        colName: ''
      },
      styleType: "show4"
    }
  },

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
      toBookDetailUrl: "./bookdetail.html",
      moreType: {
        url: "./recommend.html",
        pubColId: 49,
        // type: "selling"
        colName: ''
      },
      styleType: "show4"
    }
  },
};


const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];

export { name, title, dev, prod, description, platform, pageType, resourceType };
