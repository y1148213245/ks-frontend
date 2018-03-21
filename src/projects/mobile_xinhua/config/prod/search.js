export default {
  name: "search",
  hotbookrecommend: {
    hotbookrecommend_01: {
      url: CONFIG.BASE_URL + "spc/cms/publish/list.do",
      params: {
        conditions: '[{pub_resource_type:"BOOK"},{pub_status:"1"},{pub_col_id:"113"},{pub_site_id:"' + CONFIG.SITE_CONFIG.siteId + '"}]', //热门推荐栏目id为113
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "10",
        searchText: ""
      },
      keys: { //接口字段兼容
        Bookname: "pub_resource_name",
        author: "BOOK_SYS_AUTHORS"
      },
      maxNumber: 10, // 显示多少个数据
    }
  },
  search: {
    search_01: {
      eveName: "showSearchResult" // 搜索组件要传递搜索内容给搜索结果（即图书列表组件）组件，这里通过发广播的形式进行组件之间的通信
    }
  }
};
