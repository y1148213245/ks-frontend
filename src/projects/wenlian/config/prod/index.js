/**
 * Created by admin on 2017/12/28.
 */
export default {
  name: "index",
  navigation: {
    navigation_03: {
      url: `${CONFIG.BASE_URL}spc/cms/col/getColNextLevelNode`,
      params: {
        colId: '39', // 栏目ID
      }
    }
  },
  list_pic: {
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
    },
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
