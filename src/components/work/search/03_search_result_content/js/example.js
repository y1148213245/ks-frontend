/**
 * 搜索结果列表
 */

import component from "../search_result_content.vue";


const name = component.name;  // 组件标签名

const title = "搜索结果组件";  // 组件title

const description = `搜索结果列表`;  // 组件描述信息

const dev = {
  search:{
    search_result_content_03: {
      url: "",
      paramsAll: {
        conditions: "[{pub_site_id:'1'}]",
        groupBy:"pub_resource_id",
        orderBy: "BOOK_PUBDATE desc",
        searchText:null,
        pageNo:'1',
        pageSize:'15'
      },
      paramsSpecific:{
        conditions: "[{pub_site_id:'1'},{pub_resource_type:'",
        groupBy:"pub_resource_id",
        orderBy: "BOOK_PUBDATE desc",
        searchText:null,
        pageNo:'1',
        pageSize:'15'
      },
      picLinkUrl: ""
    }
  }
};

const prod = {
  search:{
    search_result_content_03: {
      url: CONFIG.BASE_URL + "spc/cms/publish/list.do",
      paramsAll: {
        conditions: "[{pub_site_id:'1'}]",
        groupBy:"pub_resource_id",
        orderBy: "BOOK_PUBDATE desc",
        searchText:null,
        pageNo:'1',
        pageSize:'15'
      },
      paramsSpecific:{
        conditions: "[{pub_site_id:'1'},{pub_resource_type:'",
        groupBy:"pub_resource_id",
        orderBy: "BOOK_PUBDATE desc",
        searchText:null,
        pageNo:'1',
        pageSize:'15'
      },
      picLinkUrl: ""
    }
  }
};

const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book', 'information'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
