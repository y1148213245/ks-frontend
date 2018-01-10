/**
 * 购物车接口API  created by song 2017/12/21
 */
import Vue from 'vue';
import { Get, Post,_axios } from '@common';
// import {SITE_CONFIG} from "projectConfig";

export default {
  queryShoppingCart (param, cb) {
    /*let loading = Vue.prototype.$loading({ text: "数据加载中..." });*/
    var stamp = new Date().getTime();
    console.log(_axios.defaults);
   console.log(Get);
    Get(BASE_URL + 'cart/getCartAndActivity.do?loginName=' + param.loginName + '&siteId=' + SITE_CONFIG.siteId + '&timeStamp=' + stamp).then(function (response) {
      if (cb && cb instanceof Function) {
        /*loading.close();*/
        var len = response.data.data.content.length;
        var tempLen = 0;
        var listWrapper = response.data.data.content;
        for (var i = 0; i < len; i++) {
          for (var j = 0; j < listWrapper[i].list.length; j++) {
            tempLen += listWrapper[i].list[j].nums;
          }
        }
        cb({ productList: response.data.data.content, totalCount: tempLen });
      }
    })
  },
  deleteCartProduct (ids, cb) {
    Post(BASE_URL + 'cart/deleteCart.do?ids=' + ids).then(function (response) {
      if (cb && cb instanceof Function) {
        cb({ deleteStatus: true });
      }
    })
  },
  changeProductCount (params, cb) {
    Get(BASE_URL + 'cart/updateCart.do?productId=' + params.productId + '&number=' + params.number + '&loginName=' + params.loginName).then(function (response) {
      if (cb && cb instanceof Function) {
        cb({ changeStatus: true });
      }
    }).catch(function (error) {
    });
  },
  queryOrderAddress (name, cb) {
    Get(BASE_URL + 'user/addresses.do?loginName=' + name).then(function (response) {
      if (cb && cb instanceof Function) {
        cb({ addressList: response.data.data });
      }
    })
  },
  addOrderAddress (params, cba) {
    Post(BASE_URL + 'user/addAddress.do?', params).then(function (response) {
      if (cba && cba instanceof Function) {
        cba({ addStatus: true });
      }
    }).catch(function (error) {
    });
  },
  queryDefaultAddress (name, cb) {
    Get(BASE_URL + 'user/getDefalutAddress.do?loginName=' + name).then(function (response) {
      if (cb && cb instanceof Function) {
        cb({ defaultAddress: response.data.data });
      }
    })
  },
  checkCoupons (password, cb) {
    Get(BASE_URL + 'user/checkCoupons.do?couponPassword=' + password).then(function (response) {
      if (cb && cb instanceof Function) {
        var res = response.data.result;  // 返回结果 1：成功 0：失败
        if (res === '1') {
          cb({ checkStatus: response.data.data });
        } else {
          var errorMsg = {
            status: false,
            price: 0,
            msg: response.data.error.errorMsg
          };
          cb({ checkStatus: errorMsg });
        }
      }
    }).catch(function (error) {
    });
  },
  getPayment (data, cb) {
    Get(BASE_URL + 'cart/getPayMethod.do').then(function (response) {
      if (cb && cb instanceof Function) {
        cb({ paymentList: response.data.data });
      }
    })
  },
  getDeliveryWay (datas, cb) {
    Get(BASE_URL + 'cart/findDeliverysByStatus.do').then(function (response) {
      if (cb && cb instanceof Function) {
        cb({ deliveryList: response.data.data });
      }
    }).catch(function (error) {
    });
  },
  commitOrder (params, cb) {
    let loading = Vue.prototype.$loading({ text: "数据加载中..." });
    Post(BASE_URL + 'order/submitSplitOrder.do', params).then(function (response) {
      if (cb && cb instanceof Function) {
        cb({ commitInfo: response.data.data });
        loading.close();
      }
    })
  },
  addFavorite (params, cb) {
    Post(BASE_URL + 'collection/addCollect.do?loginName=' + params.loginName + '&pubId=' + params.pubId + '&operateType=' + params.operateType + '&productId=' + params.productId + '&siteId=' + SITE_CONFIG.siteId).then(function (response) {
      if (cb && cb instanceof Function) {
        cb({ favoriteStatus: response.data.data.code });
      }
    }).catch(function (error) {
    });
  },
  queryVirtualCoin (loginName, cb) {
    Get(BASE_URL + 'rechargeVirtualCoin/getCoinByName.do?loginName=' + loginName).then(function (response) {
      if (cb && cb instanceof Function) {
        cb({ virtualCoin: response.data.data });
      }
    })
  },
  getRmbCoin (virtualCoin, cb) {
    Get(BASE_URL + 'rechargeVirtualCoin/getRbm.do?virtualCoin=' + virtualCoin).then(function (response) {
      if (cb && cb instanceof Function) {
        cb({ rmbCoin: response.data.data });
      }
    }).catch(function (error) {
    });
  },
  changeActivity (params, cb) {
    Get(BASE_URL + 'cart/getCartAndActivityForChange.do?loginName=' + params.loginName + '&siteId=' + SITE_CONFIG.siteId + '&productId=' + params.productId + '&activityId=' + params.activityId).then(function (response) {
      if (cb && cb instanceof Function) {
        cb({ changeActivity: response.data.result === "1" ? true : false });
      }
    })
  },
  /**
   * 购物车 根据用户名获取优惠券
   */
  queryCoupons (params, cb) {
    Get(BASE_URL + 'user/getCounponsByName.do?loginName=' + params.loginName + '&type=' + params.type).then(function (response) {
      if (cb && cb instanceof Function) {
        cb({
          couponsList: response.data.result === '1' ? response.data.data : false
        });
      }
    })
  }
}
