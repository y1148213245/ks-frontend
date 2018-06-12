/* created by song 2018/1/7 */
export default {
  name: "bookdetail",
  list_pic: {
    /* list_pic_04_pic_list: {
      historylist:{
        url:  "browserHistory/getHistoryList.do",
        params: {
          num:3
        },
        picLinkUrl: ""
      }
    }, */
    list_pic_16_relative: {
      title: '相关图书',
      url: "spc/cms/publish/related.do",
      params: {
        pubId: '',
        size: 3,
      },
    }
  },
  common: {
    get_coupons_02: { // 领取优惠券
      url: "user/pickCoupons.do",
      params: {
        loginName: "",
        couponId: ""
      }
    }
  },
  book_detail: {
    book_detail_02: {
      buyBookUrl: 'http://book.dangdang.com/', // 购买纸书 跳转至当当网首页
      probationUrl: '/ebook/read.jsp', //试读地址
      showInfoList: [{ // 控制显示/隐藏图书的其他信息 比如：出版时间、出版社、ISBN、版次...
        title: "出版时间:", // 固定显示内容
        key: "pubTime", // 接口字段名
        filter: true // 过滤器 这里只有出版时间需要过滤器
      }, {
        title: "出版社:",
        key: "BOOK_PRESS_NAME",
        filter: false
      }, {
        title: "ISBN:",
        key: "isbn",
        filter: false
      }, {
        title: "版次:",
        key: "bookVersion",
        filter: false
      }, {
        title: "备注:",
        key: "BOOK_REMARK",
        filter: false
      }, {
        title: "页数:",
        key: "pageNums",
        filter: false
      }, {
        title: "字数:",
        key: "bookWords",
        filter: false
      }],
      showItem:['audio']
    }
  },
  bookreview: {
    bookreview_01: {
      queryComments: { // 查询评论
        url: 'comment/comments.do',
        params: {
          pubId: "",
          pageIndex: 1,
          pageSize: 15,
          siteId: CONFIG.SITE_CONFIG.siteId,
        }
      },
      addComment: { // 添加评论
        url: 'comment/addComment.do',
        params: {
          pubId: "",
          loginName: "",
          content: "",
          starNum: 0,
          deviceName: "pc", // 设备类型
          colId: "",
          siteId: CONFIG.SITE_CONFIG.siteId,
          type: "1",
          parentId: "0",
          activityId: '',
        }
      },
      pagination: { // 分页信息
        showPagination: true, // 是否显示分页
        pagesize: [15, 30, 50, 100], // 如何分页
      }
    }
  },

};
