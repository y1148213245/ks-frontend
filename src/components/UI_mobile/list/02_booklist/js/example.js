/**
 * Created by song 2018/3/15
 * 图书列表组件
 */

import component from "../booklist.vue";

const name = component.name; // 组件标签名

const title = "图书列表"; // 组件title

const description = `图书列表组件`; // 组件描述信息

const dev = {
  booklist: {
    booklist_01: {
      url: '../data/list_02_booklist_data.json'
    }
  }
};

const prod = {
  booklist: {
    booklist_01: {
      'module': {
        url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
        params: {
          conditions: [
            { pub_resource_type: "BOOK" },
            { pub_status: "1" },
            { pub_site_id: CONFIG.SITE_CONFIG.siteId },
          ],
          groupBy: "pub_resource_id", // 为了去重
          orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc", // 默认传这个值 为了与后台顺序一致  "BOOK_PUBDATE desc" 、 "pub_read_num desc";
          pageNo: "1",
          pageSize: "10",
          searchText: null
        },
        listType: 'colId', // 筛选功能： ‘colId’按栏目查、‘cascadId’按分类查 , 无筛选则为空
        showNum: 3,//显示个数,不限制则不配置
        toMoreList: {//‘更多链接’的配置
          isShow: true,//是否显示
          url: '',//链接
          keys: {//动态参数，左为参数名，右为内部数据的字段名
            orderBy: 'orderParam'
          },
          fixedKeys: {//固定参数，左为参数名，右为参数值，可自行扩展。

          }
        },
        showItem: ['picture', 'bookname', 'author', 'abstract', 'price'], // 控制显示哪些项
        title:{
          isShow:true,
          name:'畅销榜'
        },
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
        eveName: "showSearchResult", // 搜索组件要传递搜索内容给搜索结果（即图书列表组件）组件，这里通过发广播的形式进行组件之间的通信
        toDetailType: {
          type: 'phone',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
          phone: {
            functionName: 'appbook',/* app方法名 */
            values: ['id'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
          },
          href: {/* 转跳页面 */
            url: '',
            keys: {
              'pubId': 'pubId'/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
            },
            fixedKeys: {
              'app': '1'/* 左侧为转跳参数；右侧为值 */
            }
          }
        },
      }
    }
  }
};

const platform = 'mobile';
const pageType = ['list'];
const resourceType = ['book'];

export {
  name,
  title,
  dev,
  prod,
  description,
  platform,
  pageType,
  resourceType
};
