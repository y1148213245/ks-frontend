/**
 * Created by admin on 2017/12/28.
 */
export default {
  name: "index",
  list_pic: {
    picListBookShow: {
      url: "http://172.19.57.153/portal/api/spc/cms/publish/list.do",
      param: {
        conditions: "[{pub_col_id:'59'},{pub_status:'1'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: ""
      },
      href: "./read.jsp?bookId=",
      bookDetail: "./bookDetail.html?pubId=",
      beginPicIndex: 2,
      finishPicIndex: 8,
      colId: 59
    },
    picListRefinedBook: {
      url: "http://172.19.57.153/portal/api/spc/cms/publish/list.do",
      param: {
        conditions: "[{pub_col_id:'59'},{pub_status:'1'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: ""
      },
      baseURL: "http://172.19.57.153/portal/reader",
      href: "./bookList.html?colId=",
      bookDetail: "./bookDetail.html?pubId=",
      colId: 59
    },
    list_pic_11: {
      url: BASE_URL + '/spc/cms/publish/list.do',
      param: {
        conditions: "[{pub_col_id:'116'},{pub_status:'1'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: ""
      },
      detailHref:'',
      colId: 116,
    }

  },
  swiper:{
    pic_noWords_04:{
      url:'http://172.19.57.153/portal/api/spc/cms/publish/list.do',
      params:{
        conditions : "[{pub_col_id:'83'}]",
        groupBy : "pub_resource_id",
        orderBy : "pub_a_order asc pub_lastmodified desc id asc",
        pageNo : "1",
        pageSize : "16",
        searchText : ""
  }
    }
  }
}
