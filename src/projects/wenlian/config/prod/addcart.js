export default {
  name: 'addcart',
  shoppingCart: {
    shoppingCart_02: {
      url: BASE_URL + 'api/book/getBookDetail.do',
      params: {
        loginName: "",
        pubId: "",
        siteId: SITE_CONFIG.siteId,
      },
      bookType: '91', // 纸质书
      ebookType: '94', // 电子书
    }
  },
  picListBook: {
    userbook: {
      title: '购买该书的用户还买',
      url: BASE_URL + "cart/getOtherBookList.do",
      params: {
        pubId: "",
        loginName: "",
      },
      detailHref: "./bookdetail.html?pubId=",
      num: 4,
    },
    otherbook: {
      title: '该作者其他图书',
      url: BASE_URL + "spc/cms/publish/list.do",
      params: {
        conditions: "[{pub_resource_type:'BOOK'},{pub_site_id:'2'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "4",
        searchText: ""
      },
      detailHref: "./bookdetail.html?pubId="
    }
  }
}
