export default {
  name: "searchresult",
  search: {
    search_result_title_02: {
      url: BASE_URL + "spc/cms/publish/list.do",
      params: {
        conditions: "[{pub_site_id:'1'}]",
        groupBy:"pub_resource_id",
        orderBy: "BOOK_PUBDATE desc",
        pageNo: "1",
        pageSize: "15",
      },
      picLinkUrl: ""
    },
    search_result_title_03: {
      url: BASE_URL + "spc/cms/publish/list.do",
      params: {
        conditions: "[{pub_site_id:'1'}]",
        groupBy:"pub_resource_id",
        orderBy: "BOOK_PUBDATE desc",
        pageNo: "1",
        pageSize: "15",
      },
      picLinkUrl: ""
    }
  }


};
