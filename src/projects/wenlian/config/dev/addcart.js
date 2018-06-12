export default {
  name: 'addcart',
  shoppingCart: {
    shoppingCart_02: {
      url: '/data/shoppingCart_02_add.json',
      bookType: '91', // 纸质书
      ebookType: '94', // 电子书
      toDetailUrl: '../pages/bookdetail.html'
    },
  },
  list_pic: {
    list_pic_23: {
      userbook: {
        title: '购买该书的用户还买',
        url: "../data/ui_piclist_19_userbook.json",
        detailHref: "../pages/bookdetail.html?pubId=", // 去详情页
        maxNum: 4, // 控制显示多少个
      },
      otherbook: {
        title: '该作者其他图书',
        url: '../data/ui_piclist_19_otherbook.json',
        detailHref: "../pages/bookdetail.html?pubId=", // 去详情页
        maxNum: 4, // 控制显示多少个
      }
    }
  }
}
