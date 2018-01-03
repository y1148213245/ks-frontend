import * as type from '../../common/interfaces.js';
import api from '../api/shoppingCartApi.js';
// import loginApi from 'api/wl/loginApi.js';

// 数据 相当于database
var state = {
  // member:{},           //用户信息
  productList: {},     // 购物车商品列表
  totalCount: 0,       // 购物车总数
  deleteStatus: false,
  changeStatus: false,
  orderList: [],       // 购物车已选商品结算进入订单页面
  orderDetail: {
    totalMoney: 0,     // 订单总价
    totalNum: 0,       // 订单总数量
    saveAmount: 0,     // 节省金额
    freeFreight: false,// 运费状况
    sendPoints: 0,     // 赠送积分
    bookTotalMoney: 0, // 纸质书总价
    bookSaveMoney: 0,  // 纸质书节省金额
    ebookTotalMoney: 0,// 电子书总价
    ebookSaveMoney: 0, // 电子书节省金额
  },
  addressList: [],    // 收获地址
  addStatus: false,
  defaultAddress: [], // 默认收获地址
  checkStatus: {      // 优惠码校验
    price: 0,
    type: ''
  },
  paymentList: [],    // 支付方式
  deliveryList: [],   // 配送方式
  commitInfo: {},     // 提交订单 生成订单号
  favoriteStatus: {}, // 添加收藏
  virtualCoin: 0,     // 虚拟币
  rmbCoin: 0,         // 虚拟币兑换人民币
  changeActivity: false, //更换活动状态
  couponsList: [],    // 优惠券列表
};

// 对外暴露数据
var getters = {
  // getMember: (state) => state.member,
  getProductList: (state) => state.productList,
  getTotalCount: (state) => state.totalCount,
  getDeleteStatus: (state) => state.deleteStatus,
  getOrderList: (state) => state.orderList,
  getOrderDetail: (state) => state.orderDetail,
  getAddressList: (state) => state.addressList,
  getAddStatus: (state) => state.addStatus,
  getDefaultAddress: (state) => state.defaultAddress,
  getCheckStatus: (state) => state.checkStatus,
  getPaymentList: (state) => state.paymentList,
  getDeliveryList: (state) => state.deliveryList,
  getCommitInfo: (state) => state.commitInfo,
  getFavoriteStatus: (state) => state.favoriteStatus,
  getVirtualCoin: (state) => state.virtualCoin,
  getRmbCoin: (state) => state.rmbCoin,
  getActivity: (state) => state.changeActivity,
  getCouponsList: (state) => state.couponsList,
};

var actions = {
  /*查询账户信息*/
  /*queryUser({commit},param){
    commit('setMember', {loginName: 'song@163.com'});
    param.loadCallBack();
     loginApi.keepSession().then(function(rep) {
      if(rep.data && rep.data.status == 'ok' && rep.data['member']) {
        commit('setMember',rep.data['member']);
        param.loadCallBack();
      } else {
        alert('请您先登录~');
      }
    }); 
  },*/
  /* [type.QUERY_SHOPPING_CART](storex, loginName) {
    api.queryShoppingCart(loginName, ({productList, totalCount}) => {
      storex.commit(type.QUERY_SHOPPING_CART, productList);
      storex.rootState.page.member.login.cartTotalAmount = totalCount;
    });
  }, */

  [type.QUERY_SHOPPING_CART](storex, params) {
    api.queryShoppingCart(params.param, ({productList, totalCount}) => {
      storex.commit(type.QUERY_SHOPPING_CART, {
        productList: productList,
        myCallBack: params.myCallback
      });
      storex.rootState.login_02.cartTotalAmount = totalCount;
    });
  },

  [type.DELETE_CART_PRODUCT]({commit, dispatch}, params) {
    api.deleteCartProduct(params.ids, ({deleteStatus}) => commit(type.DELETE_CART_PRODUCT, {
      deleteStatus: deleteStatus,
      cb: params.cb
    }));
    // dispatch(type.QUERY_SHOPPING_CART, '1');   // 请求是异步的 这样不能保证删除成功以后才查询
  },

  [type.CHANGE_PRODUCT_COUNT]({commit}, params) {
    api.changeProductCount(params, ({changeStatus}) => commit(type.CHANGE_PRODUCT_COUNT, changeStatus));
  },

  [type.QUERY_ORDER_PRODUCT]({commit}, datas) {
    commit(type.QUERY_ORDER_PRODUCT, datas);
  },

  [type.QUERY_ORDER_DETAIL]({commit}, datas) {
    commit(type.QUERY_ORDER_DETAIL, datas);
  },

  [type.QUERY_ORDER_ADDRESS]({commit}, loginName) {
    api.queryOrderAddress(loginName, ({addressList}) => commit(type.QUERY_ORDER_ADDRESS, addressList));
  },

  [type.ADD_ORDER_ADDRESS]({commit}, datas) {
    api.addOrderAddress(datas.param, ({addStatus}) => commit(type.ADD_ORDER_ADDRESS, {
      addStatus: addStatus,
      myCallback: datas.myCallback
    }));
  },

  [type.QUERY_DEFAULT_ADDRESS]({commit}, loginName) {
    api.queryDefaultAddress(loginName, ({defaultAddress}) => commit(type.QUERY_DEFAULT_ADDRESS, defaultAddress));
  },

  [type.CHECK_COUPONS]({commit}, datas) {
    api.checkCoupons(datas.param, ({checkStatus}) => commit(type.CHECK_COUPONS, {
      checkStatus: checkStatus,
      myCallback: datas.myCallback
    }));
  },

  [type.GET_PAYMENT]({commit}, datas) {
    api.getPayment(datas, ({paymentList}) => commit(type.GET_PAYMENT, paymentList));
  },

  [type.GET_DELIVERY]({commit}, datas) {
    api.getDeliveryWay(datas, ({deliveryList}) => commit(type.GET_DELIVERY, deliveryList));
  },

  [type.COMMIT_ORDER]({commit}, datas) {
    api.commitOrder(datas.param, ({commitInfo}) => commit(type.COMMIT_ORDER, {
      commitInfo: commitInfo,
      myCallback: datas.myCallback
    }));
  },

  [type.ADD_FAVORITE]({commit}, datas) {
    api.addFavorite(datas.param, ({favoriteStatus}) => commit(type.ADD_FAVORITE, {
      favoriteStatus: favoriteStatus,
      myCallback: datas.myCallback
    }));
  },

  [type.QUERY_VIRTUAL_COIN]({commit}, datas) {
    api.queryVirtualCoin(datas, ({virtualCoin}) => commit(type.QUERY_VIRTUAL_COIN, virtualCoin));
  },

  [type.GET_RMB_COIN]({commit}, datas) {
    api.getRmbCoin(datas.param, ({rmbCoin}) => commit(type.GET_RMB_COIN, {
      rmbCoin: rmbCoin,
      myCallbacks: datas.myCallbacks
    }));
  },

  [type.CHANGE_ACTIVITY]({commit}, datas) {
    api.changeActivity(datas.param, ({changeActivity}) => commit(type.CHANGE_ACTIVITY, {
      changeActivity: changeActivity,
      myCallBack: datas.myCallBack
    }));
  },

  [type.QUERY_COUPONS]({commit}, params) {
    api.queryCoupons(params, ({couponsList}) => commit(type.QUERY_COUPONS, couponsList))
  },

};

// 操作数据
var mutations = {
  setMember: (state, member) => state.member = member,
  [type.QUERY_SHOPPING_CART]: (state, datas) => {
    state.productList = datas.productList;
    if(datas.myCallBack && datas.myCallBack instanceof Function) {
      datas.myCallBack();
    }
  },
  [type.DELETE_CART_PRODUCT]: (state, datas) => {
    state.deleteStatus = datas.deleteStatus;
    return datas.cb();
  },
  [type.CHANGE_PRODUCT_COUNT]: (state, changeStatus) => state.changeStatus = changeStatus,
  [type.QUERY_ORDER_PRODUCT]: (state, datas) => {
    /*
    * parameter1: state database
    * parameter2: datas from actions
    */
    state.orderList = datas;
  },
  [type.QUERY_ORDER_DETAIL]: (state, datas) => {
    state.orderDetail.totalMoney = datas.totalMoney;
    state.orderDetail.totalNum = datas.totalNum;
    state.orderDetail.saveAmount = datas.saveAmount;
    state.orderDetail.freeFreight = datas.freeFreight;
    state.orderDetail.sendPoints = datas.sendPoints;
    state.orderDetail.bookTotalMoney = datas.bookTotalMoney;
    state.orderDetail.bookSaveMoney = datas.bookSaveMoney;
    state.orderDetail.ebookTotalMoney = datas.ebookTotalMoney;
    state.orderDetail.ebookSaveMoney = datas.ebookSaveMoney;
  },
  [type.QUERY_ORDER_ADDRESS]: (state, addressList) => state.addressList = addressList,
  [type.ADD_ORDER_ADDRESS]: (state, datas) => {
    state.addStatus = datas.addStatus;
    datas.myCallback();
  },
  [type.QUERY_DEFAULT_ADDRESS]: (state, defaultAddress) => state.defaultAddress = defaultAddress,
  [type.CHECK_COUPONS]: (state, datas) =>{
    state.checkStatus = datas.checkStatus;
    datas.myCallback();
},
  [type.GET_PAYMENT]: (state, paymentList) => state.paymentList = paymentList,
  [type.GET_DELIVERY]: (state, deliveryList) => state.deliveryList = deliveryList,
  [type.COMMIT_ORDER]: (state, datas) => {
    state.commitInfo = datas.commitInfo;
    datas.myCallback();
  },
  [type.ADD_FAVORITE]: (state, datas) => {
    state.favoriteStatus = datas.favoriteStatus;
    datas.myCallback();
  },
  [type.QUERY_VIRTUAL_COIN]: (state, virtualCoin) => state.virtualCoin = virtualCoin,
  [type.GET_RMB_COIN]: (state, datas) => {
    state.rmbCoin = datas.rmbCoin;
    datas.myCallbacks();
  },
  [type.CHANGE_ACTIVITY]: (state, datas) => {
    state.changeActivity = datas.changeActivity;
    datas.myCallBack();
  },
  [type.QUERY_COUPONS]: (state, couponsList) => {
    state.couponsList = couponsList;
  },
};

export default {
  namespaced: true,
  name: 'shoppingcart',
  state,
  getters,
  actions,
  mutations
}
