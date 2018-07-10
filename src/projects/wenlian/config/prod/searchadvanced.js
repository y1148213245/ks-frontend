/*
 * @Author: yan.chaoming 
 * @Date: 2018-01-05 18:17:18 
 * @Last Modified by: song
 * @Last Modified time: 2018-07-09 16:01:30
 */
export default {
  name: 'searchadvance',
   share: {
     ui_share_01: {
       'searchadvance': {
         shareLists: [
           {
             title: '更多',
             class: 'bds_more',
             cmd: 'more',
           }
         ]
       }
     }
   },
  search: {
    search_result_04: {
      url:  'spc/cms/publish/list.do',
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