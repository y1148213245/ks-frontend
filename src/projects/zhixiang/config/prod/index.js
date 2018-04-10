/**
 * Created by codingnuts on 2017/11/1.
 */

export default {
  name: "index",
  swiper: {
    pic_01: {
      height: "480px",
      interval: 5000,
      url:  '/spc/cms/publish/list.do',
      params: {
        conditions: "[{'pub_col_id':'239'}]",
        orderBy: 'pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc',
        pageNo: "1",
        pageSize: "15",
        searchText: null
      }
    },
    smallPic_02: {
      height: "480px",
      width: "200px",
      interval: 5000,
      url:  '/spc/cms/publish/list.do',
      params: {
        conditions: "[{pub_resource_type:'BOOK'},{pub_site_id:'1'}]",
        orderBy: "BOOK_PUBDATE desc",
        pageNo: "1",
        pageSize: "15",
        searchText: null
      },
      picLinkUrl: "./bookdetail.html?pubId=",
      columnId: "51"
    },
    'module1': {
      pic_word_03: {
        url:  '/spc/cms/publish/list.do',
        params: {
          conditions: "[{pub_resource_type:'BOOK'},{pub_col_id:'240'}]",
          orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
          pageNo: "1",
          pageSize: "3",
          searchText: null
        },
        herf: "./bookdetail.html?pubId="
      }
    },
    'module2': {
      pic_word_03: {
        url:  '/spc/cms/publish/list.do',
        params: {
          conditions: "[{pub_resource_type:'BOOK'},{pub_col_id:'241'}]",
          orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
          pageNo: "1",
          pageSize: "3",
          searchText: null
        },
        herf: "./bookdetail.html?pubId="
      }
    }

  },
  indexBestSale: {
    url:  '/spc/cms/publish/list.do',
    params: {
      conditions: "[{pub_resource_type:'BOOK'},{pub_site_id:'1'}]",
      orderBy: 'pub_sales_num desc',
      pageNo: "1",
      pageSize: "15",
      searchText: null
    },
    picLinkUrl: "./bookdetail.html?pubId=",
    columnId: "51"
  },
  navigation: {
    navigation_02: {
      toCartUrl: '../pages/shoppingcart.html', // 去购物车
      toLoginUrl: '../pages/login.html', // 去登陆
    }
  }
};
