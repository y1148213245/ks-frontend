/*
 * @Author: yan.chaoming 
 * @Date: 2018-01-08 08:56:48 
 * @Last Modified by: song
 * @Last Modified time: 2018-03-12 14:17:06
 */
export default {
  name: 'searchadvance',
  search: {
    search_result_04: {
      url:  'spc/cms/publish/list.do',
      param: {
        conditions: "[{pub_site_id:'2'},{pub_status:'1'}]",
        groupBy: 'pub_resource_id',
        orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
        pageNo: '1',
        pageSize: '10',
        searchText: ''
      },
      pageSizes:[10, 20, 50, 100],
      eventName_loadDate:'loadSearchResult',
      isShowTotalCountTag:false,
    },
    search_condition_05: {
      conditions:"{pub_resource_type:'BOOK'},{pub_site_id:'2'}",
      eventName:'loadSearchResult',
    }
  },
};