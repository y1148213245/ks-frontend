export default {
  name: "bookdetail",
  bookdetail: {
    bookdetail_01: {
      url: CONFIG.BASE_URL + "portal/api/book/getBookDetail.do",
      params: {
        pubId: "",
        loginName:"",
      },
      keys: { //接口字段兼容
        pic: "pub_picBig",
        title:"resourceName",
        author: "author",
        memberPrice:"memberPrice",
        bookPrice:"bookPrice",
        starNum:"starNum",
        bookmemory:"bookPrice",
      },
    }
  }
};
