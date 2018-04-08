export default {
  name: "index",
  header: {
    work_mobile_header_01: {
      toCartType:{
        type:'phone',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
          phone: {
            functionName: '',/* app方法名 */
            values:[],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
          },
          href: {/* 转跳页面 */
            url:'',
            keys:{/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
            },
            fixedKeys:{/* 左侧为转跳参数；右侧为值 */
            }
          }
      },
      showItem: ['nav', 'search'], // 控制显示哪些项 购物车 导航 搜索
      display: [{ //控制头部菜单栏展示
        name: "推荐",
        url: "./index.html"
      }, {
        name: "榜单",
        url: "./bookrank.html"
      }, {
        name: "分类",
        url: "./classify.html"
      }],
      toSearch: "./search.html"
    }
  },
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
          pub_picBig:"pub_picBig",
          id:"id"
        },
        colId: 110,
        title: '编辑力推超值好书',
        classFloat: 'left',
        titleColor: "#c40001"
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
          pub_picBig:"pub_picBig",
          id:"id"
        },
        colId: 111,
        title: '多种图书免费长读',
        classFloat: 'right',
        titleColor: "#4dbe6f"
      },
      newsale: {
        url: '../data/list_03_book_recommend_img.json',
        params: {
          conditions: '[{"pub_resource_type":"BOOK"},{"pub_status":"1"},{"pub_site_id":"5"},{"pub_col_id":112}]',
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
          pub_picBig:"pub_picBig",
          id:"id"
        },
        colId: 112,
        title: '特价好书买不停',
        classFloat: 'right',
        titleColor: "#54b1e1"
      },
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
  },
  swiper: {
    ui_mobile_swiper_01: {
      'top': {
        isDevelopment:true,
        toDetailType: {
          type:'phone',/* 去详情页的方式配置，'phone'：调app接口，'href':链接转跳*/
          phone: {
            functionName: 'appbook',/* app方法名 */
            values:['id'],/* 配置轮播图数据中的字段名，用来取值给app方法传参 */
          },
          href: {/* 转跳页面 */
            url:'',
            keys:{
              'pubId':'pubId'/* 左侧为转跳参数；右侧配置轮播图数据中的字段名，用来取值 */
            },
            fixedKeys:{
              'app':'1'/* 左侧为转跳参数；右侧为值 */
            }
          }
        },
        getList: {
          url: '../data/ui_mobile_swiper_01.json',
          keys: {
            id: 'id',
            pic: 'pub_picBig',/* 封面字段 */
            poster: 'pub_POSTER'/* 海报字段 */
          }
        },
      }
    },
    ui_mobile_swiper_02: {
      url: '../data/swiper_02_advert.json',
      keys: { //接口字段兼容
        pic: "pub_picBig",
      },
      maxNum: 1, // 取多少个数据
    }
  }
};
