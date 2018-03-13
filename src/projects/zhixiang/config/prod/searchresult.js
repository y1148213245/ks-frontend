export default {
  name: "searchresult",
  search: {
    search_result_title_02: {
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
    },
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
