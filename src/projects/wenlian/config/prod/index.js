/**
 * Created by admin on 2017/12/28.
 */
export default {
  name: "index",
  list_pic: {
    list_pic_24: {
      url: CONFIG.BASE_URL + "spc/cms/publish/list.do",
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
      url: CONFIG.BASE_URL + "spc/cms/publish/list.do",
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
      url: CONFIG.BASE_URL + "spc/cms/publish/list.do",
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
      url: CONFIG.BASE_URL + "spc/cms/publish/list.do",
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
      url: CONFIG.BASE_URL + "spc/cms/publish/list.do",
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
      url: CONFIG.BASE_URL + '/spc/cms/publish/list.do',
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
        url: CONFIG.BASE_URL + "cart/getOtherBookList.do",
        params: {
          pubId: "",
          loginName: "",
        },
        detailHref: "../pages/bookdetail.html?pubId=",
        maxNum: 4, // 控制显示多少个
      },
      otherbook: {
        title: '该作者其他图书',
        url: CONFIG.BASE_URL + "spc/cms/publish/list.do",
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
    pic_noWords_04: {
      url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
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
      url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
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
