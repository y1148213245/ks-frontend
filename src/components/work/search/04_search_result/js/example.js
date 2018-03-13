/*
 * @Author: yan.chaoming 
 * @Date: 2018-01-04 16:44:27 
 * @Last Modified by: song
 * @Last Modified time: 2018-03-12 14:18:06
 * 搜索结果列表
 */
 
import component from "../searchResult.vue";


const name = component.name;  // 组件标签名

const title = "搜索结果列表组件";  // 组件title

const description = `搜索结果列表`;  // 组件描述信息

const dev = {
  search: {
    search_result_04: {
    }
  }
};

const prod = {
  search: {
    search_result_04: {
      url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
      param: {
        conditions: "[{pub_site_id:'2'},{pub_status:'1'}]",
        groupBy: 'pub_resource_id',
        orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
        pageNo: '1',
        pageSize: '15',
        searchText: ''
      },
      pageSizes:[10, 20, 50, 100],
      eventName_loadDate:'loadSearchResult',
      detailHref:'./bookdetail.html?pubId=',
    }
  }
};

const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];

export {name, title, dev, prod, description, platform, pageType, resourceType};