/*
 * @Author: yan.chaoming 
 * @Date: 2018-01-05 18:17:18 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-03-25 16:51:31
 */
export default {
  name: 'searchadvance',
  search: {
    search_result_04: {
      url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
      param: {
        conditions: "[{pub_site_id:'2'},{pub_status:'1'},{pub_resource_type:'BOOK'}]",
        groupBy: 'pub_resource_id',
        orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
        pageNo: '1',
        pageSize: '10',
        searchText: ''
      },
      pageSizes:[10, 20, 50, 100],
      eventName_loadDate:'loadSearchResult',
      isShowTotalCountTag:false,
      detailHref: '../pages/bookdetail.html?pubId='
    },
    search_condition_05: {
      conditions:"{pub_resource_type:'BOOK'},{pub_site_id:'2'}",
      eventName:'loadSearchResult',
    }
  },
};