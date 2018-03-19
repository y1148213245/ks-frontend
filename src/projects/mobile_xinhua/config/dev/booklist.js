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
      }
    }
  }
};
