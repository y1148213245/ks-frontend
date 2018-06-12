export default {
  name: "bookdetail",
  list_pic: {
    list_pic_04_pic_list: {
      url:  "spc/cms/publish/related.do",
      params: {
        size:3,
        pubId:''
      },
      relativebook: {
        // http://172.19.57.153:9092/spc-portal-web/spc/cms/publish/related.do?pubId=1587&size=3
        url:  "spc/cms/publish/related.do",
        params: {
          size:3,
          pubId:''
        },
        picLinkUrl: ""
      },
      historylist:{
        // http://172.19.57.153:9092/spc-portal-web/browserHistory/getHistoryList.do?num=3&username=1
        url:  "browserHistory/getHistoryList.do",
        params: {
          num:3
        },
        picLinkUrl: ""
      }
    }
  },
  common: {
    get_coupons_02: { // 领取优惠券
      url:  "user/pickCoupons.do",
      params: {
        loginName: "",
        couponId: ""
      }
    }
  }
};
