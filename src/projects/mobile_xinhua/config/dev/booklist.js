/**
 * Created by song on 2018/3/16
 * 图书列表
 */

export default {
  name: "booklist",
  booklist: {
    booklist_01: {
      url: '../data/list_02_booklist_data.json',
      listType: 'colId', // 列表有两种类型： ‘colId’按栏目查、‘cascadId’按分类查
      showItem: ['picture', 'bookname', 'author', 'abstract', 'price'], // 控制显示哪些项
      display: { // template 固定显示内容
        author: '作者:',
      },
      keys: { // 接口请求字段兼容
        picture: 'pub_picSmall', // 封面图
        bookname: 'pub_resource_name', // 书名
        author: 'BOOK_SYS_AUTHORS', // 作者
        abstract: 'BOOK_SYNOPSIS', // 摘要
        price: 'prod_member_price', // 价格
      },
      eveName: "showSearchResult" // 搜索组件要传递搜索内容给搜索结果（即图书列表组件）组件，这里通过发广播的形式进行组件之间的通信
    }
  }
};
