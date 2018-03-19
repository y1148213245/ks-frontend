/**
 * Created by song on 2018/3/16
 * 图书列表
 */

export default {
  name: "booklist",
  booklist: {
    booklist_01: {
      url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
      params: {
        conditions: '[{pub_resource_type:"BOOK"},{pub_col_id:""},{pub_status:"1"},{pub_site_id:"' + CONFIG.SITE_CONFIG.siteId + '"},{BOOK_BOOK_CASCADID:"",op:"lk"}]',
        groupBy: "pub_resource_id", // 为了去重
        orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc", // 默认传这个值 为了与后台顺序一致
        pageNo: "1",
        pageSize: "10",
        searchText: null
      },
      listType: 'colId', // 列表有两种类型： ‘colId’按栏目查、‘cascadId’按分类查
      showItem: ['picture', 'bookname', 'author', 'abstract', 'price'], // 控制显示哪些项
      display: {  // template 固定显示内容
        author: '作者:',
      },
      keys: { // 接口请求字段兼容
        picture: 'pub_picSmall', // 封面图
        bookname: 'pub_resource_name', // 书名
        author: 'BOOK_SYS_AUTHORS', // 作者
        abstract: 'BOOK_SYNOPSIS', // 摘要
        price: 'prod_member_price', // 价格
      },
      classifyArr: ['JAVA', 'C', 'JavaScript', '线性代数', '高等数学'],
    }
  }
};
