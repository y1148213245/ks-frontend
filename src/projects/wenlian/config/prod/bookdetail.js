/* created by song 2018/1/7 */
export default {
  name: "bookdetail",
  list_pic: {
    list_pic_04_pic_list: {
      relativebook: {
        url: BASE_URL + "spc/cms/publish/related.do",
        params: {
          size:3,
          pubId:''
        },
        picLinkUrl: ""
      },
      historylist:{
        url: BASE_URL + "browserHistory/getHistoryList.do",
        params: {
          num:3
        },
        picLinkUrl: ""
      }
    }
  },
  common: {
    get_coupons_02: { // 领取优惠券
      url: BASE_URL + "user/pickCoupons.do",
      params: {
        loginName: "",
        couponId: ""
      }
    }
  },
  book_detail: {
    book_detail_02: {
      buyBookUrl: 'http://book.dangdang.com/', // 购买纸书 跳转至当当网首页
      probationUrl: '/ebook/read.jsp',         //试读地址
    }
  }
  
};
