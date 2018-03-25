export default {
  name: "bookdetail",
  bookdetail: {
    bookdetail_01: {
      url: '../data/bookdetail_01_bookdetail.json',
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
  },
  relatebooklist: {
    relatebooklist_01: {
      url: '../data/list_05_relatebooklist.json',
      keys: { //接口字段兼容
        pic:"pub_picBig",
        Bookname: "pub_resource_name",
        BookId:"id"
      },
      maxRelateNumber: 7, // 显示多少个数据
    }
  }
};
