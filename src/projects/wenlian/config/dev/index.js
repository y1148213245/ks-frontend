/**
 * Created by admin on 2017/12/28.
 */
export default {
  name: "index",
  list_pic: {
    list_pic_24: {
      url: "../data/ui_list_pic_10.json",
      href: "../pages/bookdetail.html?pubId=",
      pubId: 59
    },
    picListBookShow: {
      url: "../data/ui_pic_list_09.json",
      href: "./read.jsp?bookId=",
      bookDetail: "../pages/bookdetail.html?pubId=",
      beginPicIndex: 2,
      finishPicIndex: 8,
      colId: 59
    },
    picListRefinedBook: {
      url: "/data/ui_list_pic_10.json",
      href: "../pages/bookList.html?colId=",
      bookDetail: "../pages/bookdetail.html?pubId=",
      colId: 59
    },
    list_pic_11: {
      url: '/data/ui_list_pic_11.json',
      detailHref: '',
    }
  },
  swiper: {
    pic_noWords_04: {
      url: "/data/swiper_04_noWords_list.json"
    },
    pic_advert_05: {
      url: "/data/swiper_05_advert.json"
    }
  }
}
