/* created by song 2018/1/7 */
export default {
  name: "bookdetail",
  list_pic: {
    /* list_pic_04_pic_list: {
      historylist:{
        url: BASE_URL + "browserHistory/getHistoryList.do",
        params: {
          num:3
        },
        picLinkUrl: ""
      }
    }, */
    list_pic_16_relative: {
      title: '相关图书',
        url: BASE_URL + "spc/cms/publish/related.do",
        params: {
          pubId: '',
          size: 3,
        },
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
  },
  bookreview: {
    bookreview_01: {
      queryComments: {  // 查询评论
        url: BASE_URL + 'comment/comments.do',
        params: {
          pubId: "",
          pageIndex: 1,
          pageSize: 15,
          siteId: SITE_CONFIG.siteId,
        }
      },
      addComment: {  // 添加评论
        url: BASE_URL + 'comment/addComment.do',
        params: {
          pubId: "",
          loginName: "",
          content: "",
          starNum: 0,
          deviceName: "pc",  // 设备类型
          colId: "",
          siteId: SITE_CONFIG.siteId,
          type: "1",
          parentId: "0",
          activityId: '',
        }
      }
    }
  },
  
};
