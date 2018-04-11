export default {
  name:"ebook",
  list_pic: {
    pic_info_list_12: {
      // url:  "book/getBookDetail.do",
      url:`book/getBookDetail.do`,
      introductionUrl: "spc/prodb/publicize.do",
      params: {
        pubId: "",
        loginName:"",
        siteId:"2"
      },
      introductionParams:{
        doclibCode:"",
        docID:""
      },
      moreUrl: "./bookList.html?colId=130", // 查看更多
    },
    star_pic_info_13:{
      url:`spc/cms/publish/list.do`,
      params:{
        conditions:"[{pub_col_id:'131'},{pub_status:'1'}]",
        groupBy:"pub_resource_id",
        orderBy:"pub_read_num desc",
        pageNo:"1",
        pageSize:"4"
      }
    },
    picListBook: {
      hotsalebank: {
        title: '热销排行',
        url:`spc/cms/publish/list.do`,
        params:{
          conditions: "[{pub_col_id:'131'},{pub_status:'1'}]",
          groupBy: "pub_resource_id",
          orderBy: "pub_read_num desc",
          pageNo: "1",
          pageSize: "3",
          searchText: ""
        },
        href:"./bookdetail.html?pubId="
      }
    }
  }
}
