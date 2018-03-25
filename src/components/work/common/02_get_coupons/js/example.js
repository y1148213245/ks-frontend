/**
 * Created by song 2018/1/9
 * 领取优惠券
 */

import component from "../getCouponsList.vue";


const name = component.name;  // 组件标签名

const title = "优惠券组件";  // 组件title

const description = `领取优惠券，一个模态弹窗`;  // 组件描述信息

const dev = {
  common:{
    get_coupons_02: { // 领取优惠券
      url: CONFIG.BASE_URL + "user/pickCoupons.do",
      params: {
        loginName: "",
        couponId: ""
      }
    }
  }
};

const prod = {
  common:{
    get_coupons_02: { // 领取优惠券
      url: CONFIG.BASE_URL + "user/pickCoupons.do",
      params: {
        loginName: "",
        couponId: ""
      }
    }
  }
};


const platform = 'PC';
const pageType = ['detail'];
const resourceType = ['book'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
