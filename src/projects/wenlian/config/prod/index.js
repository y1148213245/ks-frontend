/**
 * Created by admin on 2017/12/28.
 */
export default {
  name: "index",
  navigation: {
    navigation_04: {
      "nav": {
        colId: 0,
        showTitle: {
          title: "导航标题",
          isShow: true
        },
        getNavLists: {
          url: "spc/cms/col/getAllColBySiteId.do",
          params: {
            siteId: CONFIG.SITE_CONFIG.siteId,
            chId: CONFIG.SITE_CONFIG.chId
          },
          keys: {
            navName: "name",
          }
        },
        showItem: ["navName"],
        display: {},
        broadcastName: "showNavContent",
      }
    }
  },
  list_pic: {
    list_pic_27: {
      "freebooks": {
        url: "spc/cms/publish/list.do",
        params: {
          conditions: "[{pub_col_id:'130'},{pub_status:'1'}]",
          groupBy: "pub_resource_id",
          orderBy: "pub_a_order asc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "15",
          searchText: "",
        },
        comTitle: {
          isShow: true,
          name: "免费专区"
        },
        showItem: ['bookName', 'starNum', 'bookAuthor', 'pressName', 'pubDate', 'price', 'share', 'buy', 'review'], // 控制显示哪些项 bookName(书名) starNum(评分) bookAuthor(作者) pressName(出版社) pubDate(出版日期) price(价格) share(分享) buy(购买) review(查看)
        display: { // template 固定显示内容
          bookAuthor: '作者：',
          pressName: '出版社：',
          pubDate: '出版时间：',
          share: "分享",
          buy: "购买",
          review: "查看",
          more: "MORE+"
        },
        keys: { // 字段兼容
          bookName: "pub_resource_name",
          starNum: "pub_star_num",
          memberPrice: "prod_member_price",
          ebPrice: "BOOK_EB_PRICE",
          bookAuthor: "BOOK_SYS_AUTHORS",
          pubId: "id",
          contentType: "pub_content_type",
          colId: "pub_col_id",
          colName: "pub_col_name",
          bookPic: "pub_picBig",
          pressName: "BOOK_PRESS_NAME",
          pubDate: "BOOK_PUBDATE"
        },
        detailHref: "./bookdetail.html", // 详情
        moreHref: "./bookList.html", // 更多
        maxNum: 4,
      }

    },
    list_pic_24: {
      url: "spc/cms/publish/list.do",
      param: {
        conditions: "[{pub_col_id:'59'},{pub_status:'1'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: ""
      },
      href: "./bookList.html?colId=",
      colId: 59, // 精品图书栏目id
    },
    picListBookShow: {
      url: "spc/cms/publish/list.do",
      param: {
        conditions: "[{pub_col_id:'59'},{pub_status:'1'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: ""
      },
      href: CONFIG.READ_URL,
      bookDetail: "../pages/bookdetail.html?pubId=",
      beginPicIndex: 2,
      finishPicIndex: 8,
      colId: 59
    },
    picListRefinedBook: {
      url: "spc/cms/publish/list.do",
      param: {
        conditions: "[{pub_col_id:'59'},{pub_status:'1'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: ""
      },
      baseURL: CONFIG.READ_URL,
      href: "../pages/bookList.html?colId=",
      bookDetail: "../pages/bookdetail.html?pubId=",
      colId: 59
    },
    /* picListBookShow: {
      url:  "spc/cms/publish/list.do",
      param: {
        conditions: "[{pub_col_id:'59'},{pub_status:'1'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: ""
      },
      href: "http://172.19.57.153/portal/reader",
      bookDetail: "./bookdetail.html?pubId=",
      beginPicIndex: 2,
      finishPicIndex: 8,
      colId: 59
    },
    picListRefinedBook: {
      url:  "spc/cms/publish/list.do",
      param: {
        conditions: "[{pub_col_id:'59'},{pub_status:'1'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: ""
      },
      baseURL: CONFIG.READ_URL,
      href: "./bookList.html?colId=",
      bookDetail: "./bookdetail.html?pubId=",
      colId: 59
    }, */
    list_pic_11: {
      url: '/spc/cms/publish/list.do',
      param: {
        conditions: "[{pub_col_id:'116'},{pub_status:'1'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: ""
      },
      detailHref: './authordetail.html?pubId=',
      colId: 116,
    },
    list_pic_23: {
      userbook: {
        title: '购买该书的用户还买',
        url: "cart/getOtherBookList.do",
        params: {
          pubId: "",
          loginName: "",
        },
        detailHref: "../pages/bookdetail.html?pubId=",
        maxNum: 4, // 控制显示多少个
      },
      otherbook: {
        title: '该作者其他图书',
        url: "spc/cms/publish/list.do",
        params: {
          conditions: [{
            pub_resource_type: 'BOOK'
          },
          {
            pub_site_id: CONFIG.SITE_CONFIG.siteId
          },
          ],
          groupBy: "pub_resource_id",
          orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "15",
          searchText: ""
        },
        detailHref: "../pages/bookdetail.html?pubId=",
        maxNum: 4, // 控制显示多少个
      }
    }
  },
  swiper: {
    pic_01: {
      height: "480px",
      interval: 5000,
      url: 'spc/cms/publish/list.do',
      params: {
        conditions: "[{'pub_col_id':'225'}]",
        orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
        pageNo: "1",
        pageSize: "15",
        searchText: null
      }
    },
    pic_noWords_04: {
      url: 'spc/cms/publish/list.do',
      params: {
        conditions: "[{pub_col_id:'83'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "16",
        searchText: ""
      },
      infoDetailHref: "../pages/informationInfo.html?pubId=",
    },
    pic_advert_05: {
      url: 'spc/cms/publish/list.do',
      params: {
        conditions: "[{pub_col_id:'214'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: ""
      },
      infoUrlPrefix: "informationInfo.html?pubId="
    }
  }
}
