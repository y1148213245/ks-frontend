export default {
  name: "search",
  hotbookrecommend: {
    hotbookrecommend_01: {
      url: '../data/list_04_hotbookrecommend.json',
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
