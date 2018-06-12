/**
 * Created by song on 2018/3/19
 * 图书分类
 */

export default {
  name: "classifybook",
  booklist: {
    booklist_01: {
      url: '../data/list_02_booklist_data.json',
      params: {
        conditions: [
          {pub_resource_type:"BOOK"},
          {pub_status:"1"},
          {pub_site_id:CONFIG.SITE_CONFIG.siteId},
        ],
        groupBy: "pub_resource_id", // 为了去重
        orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc", // 默认传这个值 为了与后台顺序一致
        pageNo: "1",
        pageSize: "10",
        searchText: null
      },
      listType: 'cascadId', // 列表有两种类型： ‘colId’按栏目查、‘cascadId’按分类查
      showItem: ['picture', 'bookname', 'author', 'abstract', 'price'], // 控制显示哪些项
      display: {  // template 固定显示内容
        author: '作者：',
      },
      keys: { // 接口请求字段兼容
        picture: 'pub_picSmall', // 封面图
        bookname: 'pub_resource_name', // 书名
        author: 'BOOK_SYS_AUTHORS', // 作者
        abstract: 'BOOK_SYNOPSIS', // 摘要
        price: 'prod_member_price', // 价格
      },
      classifyArr: ['JAVA', 'C', 'JavaScript', '线性代数', '高等数学'],
      busEveName: "cascade",
      toDetailType: {
        type:'href',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
        phone: {
          functionName: 'appbook',/* app方法名 */
          values:['id'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
        },
        href: {/* 转跳页面 */
          url:'./bookdetail.html',
          keys:{
            'pubId':'id'/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
          },
          fixedKeys:{
            'app':'1'/* 左侧为转跳参数；右侧为值 */
          }
        }
      },
    }
  }
};
