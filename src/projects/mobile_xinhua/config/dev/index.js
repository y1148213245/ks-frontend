export default {
  name: "index",
  header: {
    work_mobile_header_01: {
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
          pub_site_id: "pub_site_id"
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
          pub_site_id: "pub_site_id"
        },
        colId: 112,
        title: '特价好书买不停',
        classFloat: 'right',
        titleColor: "#54b1e1"
      }
    }
  },
  swiper: {
    ui_mobile_swiper_02: {
      url: '../data/swiper_02_advert.json',
      keys: { //接口字段兼容
        pic: "pub_picBig",
      },
      maxNum: 1, // 取多少个数据
    }
  }
};
