export default {
  name:"booklist",
  list_pic: {
    pic_info_list_12: {
      url: BASE_URL + "book/getBookDetail.do",
      introductionUrl: BASE_URL+"spc/prodb/publicize.do",
      params: {
        pubId: "",
        loginName:"",
        siteId:"2"
      },
      introductionParams:{
        doclibCode:"",
        docID:""
      },
      picLinkUrl: ''
    },
    star_pic_info_13:{
      url:BASE_URL+"spc/cms/publish/list.do",
      params:{
        conditions:"[{pub_col_id:'131'},{pub_status:'1'}]",
        groupBy:"pub_resource_id",
        orderBy:"pub_read_num desc",
        pageNo:"1",
        pageSize:"4"
      }
    }
  }
}
