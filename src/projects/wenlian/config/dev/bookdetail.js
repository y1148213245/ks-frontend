/* created by song 2018/1/7 */
export default {
  name: "bookdetail",
  list_pic: {
    list_pic_04_pic_list: {
      historylist:{
        url: "",
      }
    },
    list_pic_16_relative: {
      title: '相关图书',
      url:"/data/ui_list_pic_16.json",
    }
  },
  common: {
    get_coupons_02: { // 领取优惠券
      url: "",
    }
  },
  book_detail: {
    book_detail_02: {
      buyBookUrl: 'http://book.dangdang.com/', // 购买纸书 跳转至当当网首页
      probationUrl: '/ebook/read.jsp',         //试读地址
    }
  },
  bookreview: {
    bookreview_01: {
      queryComments: { // 查询评论
        url: "",
      },
      addComment: {    // 添加评论
        url: "",
      }
    }
  },
};
