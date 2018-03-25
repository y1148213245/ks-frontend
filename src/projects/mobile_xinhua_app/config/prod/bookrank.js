/*
 * @Author: yan.chaoming 
 * @Date: 2018-03-22 16:12:01 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-03-25 13:36:38
 */
export default {
  name: 'bookrank',
  booklist: {
    booklist_01: {
      'changxiao': {
        url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
        params: {
          conditions: [
            { pub_resource_type: "BOOK" },
            { pub_status: "1" },
            { pub_site_id: CONFIG.SITE_CONFIG.siteId },
          ],
          groupBy: "pub_resource_id", // 为了去重
          orderBy: "pub_sales_num desc", // 默认传"pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc"这个值 为了与后台顺序一致
          pageNo: "1",
          pageSize: "10",
          searchText: null
        },
        listType: '', // 列表有两种类型： ‘colId’按栏目查、‘cascadId’按分类查
        showNum: 3,
        title:{
          isShow:true,
          name:'畅销榜'
        },
        toMoreList: {//‘更多链接’的配置
          isShow: true,//是否显示
          url: './bookrankmore.html',//链接
          keys: {//动态参数，左为参数名，右为内部数据的字段名
            orderBy: 'orderParam'
          },
          fixedKeys: {//固定参数，左为参数名，右为参数值，可自行扩展。

          }
        },
        showItem: ['picture', 'bookname', 'author', 'abstract'], // 控制显示哪些项
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
        eveName: "showSearchResult", // 搜索组件要传递搜索内容给搜索结果（即图书列表组件）组件，这里通过发广播的形式进行组件之间的通信,
        toDetailType: {
          type:'phone',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
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
      },
      'renqi': {
        url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
        params: {
          conditions: [
            { pub_resource_type: "BOOK" },
            { pub_status: "1" },
            { pub_site_id: CONFIG.SITE_CONFIG.siteId },
          ],
          groupBy: "pub_resource_id", // 为了去重
          orderBy: "pub_read_num desc", // 默认传这个值 为了与后台顺序一致
          pageNo: "1",
          pageSize: "10",
          searchText: null
        },
        listType: '', // 列表有两种类型： ‘colId’按栏目查、‘cascadId’按分类查
        showNum: 3,
        title:{
          isShow:true,
          name:'人气榜'
        },
        toMoreList: {//‘更多链接’的配置
          isShow: true,//是否显示
          url: './bookrankmore.html',//链接
          keys: {//动态参数，左为参数名，右为内部数据的字段名
            orderBy: 'orderParam'
          },
          fixedKeys: {//固定参数，左为参数名，右为参数值，可自行扩展。

          }
        },
        showItem: ['picture', 'bookname', 'author', 'abstract'], // 控制显示哪些项
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
        eveName: "showSearchResult" ,// 搜索组件要传递搜索内容给搜索结果（即图书列表组件）组件，这里通过发广播的形式进行组件之间的通信
        toDetailType: {
          type:'phone',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
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
      },
      'xinshu': {
        url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
        params: {
          conditions: [
            { pub_resource_type: "BOOK" },
            { pub_status: "1" },
            { pub_site_id: CONFIG.SITE_CONFIG.siteId },
          ],
          groupBy: "pub_resource_id", // 为了去重
          orderBy: "BOOK_PUBDATE desc", // 默认传这个值 为了与后台顺序一致
          pageNo: "1",
          pageSize: "10",
          searchText: null
        },
        listType: '', // 列表有两种类型： ‘colId’按栏目查、‘cascadId’按分类查
        showNum: 3,
        title:{
          isShow:true,
          name:'新书榜'
        },
        toMoreList: {//‘更多链接’的配置
          isShow: true,//是否显示
          url: './bookrankmore.html',//链接
          keys: {//动态参数，左为参数名，右为内部数据的字段名
            orderBy: 'orderParam'
          },
          fixedKeys: {//固定参数，左为参数名，右为参数值，可自行扩展。

          }
        },
        showItem: ['picture', 'bookname', 'author', 'abstract'], // 控制显示哪些项
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
        eveName: "showSearchResult" ,// 搜索组件要传递搜索内容给搜索结果（即图书列表组件）组件，这里通过发广播的形式进行组件之间的通信
        toDetailType: {
          type:'phone',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
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
      },
    }
  }
}