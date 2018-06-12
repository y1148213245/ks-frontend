/**
 * Created by song 2018/3/15
 * 图书列表组件
 */

import component from "../ui_mobile_list_03.vue";

const name = component.name; // 组件标签名

const title = "首页新书上架、免费专区、最新特价"; // 组件title

const description = `首页新书上架、免费专区、最新特价组件`; // 组件描述信息

const dev = {
  list: {
    ui_mobile_list_03: {
      newbook: {
        url: '../data/list_03_book_recommend_img.json',
        params: {
          conditions: '[{"pub_resource_type":"BOOK"},{"pub_status":"1"},{"pub_site_id":"5"},{"pub_col_id":110}]',
          groupBy: "pub_resource_id",
          orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "10",
          searchText: "",
        },
        navUrl: '../data/list_03_book_recommend.json',
        navParams: {
          siteId: 5,
          chId: 0
        },
        keys: {
          pub_site_id: "pub_site_id",
          pub_picBig: "pub_picBig",
          id: "id"
        },
        colId: 110,
        title: '编辑力推超值好书',
        classFloat: 'left',
        titleColor: "#c40001",
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
      },
      newfree: {
        url: '../data/list_03_book_recommend_img.json',
        params: {
          conditions: '[{"pub_resource_type":"BOOK"},{"pub_status":"1"},{"pub_site_id":"5"},{"pub_col_id":111}]',
          groupBy: "pub_resource_id",
          orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "10",
          searchText: "",
        },
        navUrl: '../data/list_03_book_recommend.json',
        navParams: {
          siteId: 5,
          chId: 0
        },
        keys: {
          pub_site_id: "pub_site_id",
          pub_picBig: "pub_picBig",
          id: "id"
        },
        colId: 111,
        title: '多种图书免费长读',
        classFloat: 'right',
        titleColor: "#4dbe6f",
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
      },
      newsale: {
        url: '../data/list_03_book_recommend_img.json',
        params: {
          conditions: "[{pub_resource_type:'BOOK'},{pub_status:'1'},{pub_site_id:'5'},{pub_col_id:112}]",
          groupBy: "pub_resource_id",
          orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "10",
          searchText: "",
        },
        navUrl: '../data/list_03_book_recommend.json',
        navParams: {
          siteId: 5,
          chId: 0
        },
        keys: {
          pub_site_id: "pub_site_id",
          pub_picBig: "pub_picBig",
          id: "id"
        },
        colId: 112,
        title: '特价好书买不停',
        classFloat: 'right',
        titleColor: "#54b1e1",
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
      },
    }
  }

};

const prod = {
  list: {
    ui_mobile_list_03: {
      newbook: {
        url: `spc/cms/publish/list.do`,
        params: {
          conditions: '[{"pub_resource_type":"BOOK"},{"pub_status":"1"},{"pub_site_id":"5"},{"pub_col_id":110}]',
          groupBy: "pub_resource_id",
          orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "10",
          searchText: "",
        },
        navUrl: `spc/cms/col/getAllColBySiteId.do`,
        navParams: {
          siteId: 5,
          chId: 0
        },
        keys: {
          pub_site_id: "pub_site_id",
          pub_picBig: "pub_picBig",
          id: "id"
        },
        colId: 110,
        title: '编辑力推超值好书',
        classFloat: 'left'
      },
      newfree: {
        url: `spc/cms/publish/list.do`,
        params: {
          conditions: '[{"pub_resource_type":"BOOK"},{"pub_status":"1"},{"pub_site_id":"5"},{"pub_col_id":111}]',
          groupBy: "pub_resource_id",
          orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "10",
          searchText: "",
        },
        navUrl: `spc/cms/col/getAllColBySiteId.do`,
        navParams: {
          siteId: 5,
          chId: 0
        },
        keys: {
          pub_site_id: "pub_site_id",
          pub_picBig: "pub_picBig",
          id: "id"
        },
        colId: 111,
        title: '多种图书免费长读',
        classFloat: 'right'
      },
      newsale: {
        url: `/spc/cms/publish/list.do`,
        params: {
          conditions: "[{pub_resource_type:'BOOK'},{pub_status:'1'},{pub_site_id:'5'},{pub_col_id:112}]",
          groupBy: "pub_resource_id",
          orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "10",
          searchText: "",
        },
        navUrl: `spc/cms/col/getAllColBySiteId.do`,
        navParams: {
          siteId: 5,
          chId: 0
        },
        keys: {
          pub_site_id: "pub_site_id",
          pub_picBig: "pub_picBig",
          id: "id"
        },
        colId: 112,
        title: '特价好书买不停',
        classFloat: 'right'
      }
    }
  }

};

const platform = 'mobile';
const pageType = ['index', 'channel'];
const resourceType = ['book', 'information'];

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
