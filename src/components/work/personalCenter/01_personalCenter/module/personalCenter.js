import api from "../api/personalCenterApi.js";
// import loginApi from 'api/wl/loginApi.js';
import loginApi from "../../../login/module/login_store";
import Vue from "vue";
import { Get, Post, _axios } from "@common";

var state = {
  member: {}, //用户信息
  currentShow: "account", //当前显示组件
  account: {}, //详情
  pointRecord: [], //积分详情
  virtualMoney: [], //虚拟币详情
  addresses: [], //地址详情
  paymentList: [], //支付方式
  orderList: [], //订单列表
  orderDetails: [], //订单详情
  bookShelfInfo: [], //书架列表
  collectionInfo: [], //收藏夹列表
  myComment: [], //评论列表
  commitInfo: {}, // 提交订单信息
  returnGoodsList: [], // 售后记录
  couponsList: [], // 个人中心优惠券列表
  sumCoupons: {}, // 个人中心可用和已用优惠券的金额
  /*checkStatus: false, // 优惠码校验情况*/
  searchNoteList: [],// 个人中心随手记列表
  activityList:[],// 参与的活动列表展示
  activityMemberList:[]// 参与的活动管理报名人列表
};
var getters = {
  getMember: state => state.member,
  getCurrentShow: state => state.currentShow,
  getAccount: state => state.account,
  getPointRecord: state => state.pointRecord,
  getVirtualMoney: state => state.virtualMoney,
  getAddresses: state => state.addresses,
  getPaymentList: state => state.paymentList,
  getOrderList: state => state.orderList,
  getOrderDetails: state => state.orderDetails,
  getBookShelfInfo: state => state.bookShelfInfo,
  getCollectionInfo: state => state.collectionInfo,
  getMyComment: state => state.myComment,
  getCommitInfo: state => state.commitInfo,
  getReturnGoodsList: state => state.returnGoodsList,
  getCouponsList: state => state.couponsList,
  getSumCoupons: state => state.sumCoupons,
  /*getCheckStatus: (state) => state.checkStatus,*/
  getSearchNoteList: state => state.searchNoteList,
  getActivityList: state => state.activityList,
  getActivityMemberList: state => state.activityMemberList
};

var actions = {
  updateCurrentShow({ commit }, param) {
    commit("setCurrentShow", param);
  },
  /*查询账户信息*/
  queryUser({ commit }, param) {
    /*登陆验证*/
    return Get(BASE_URL + "checkToken.do").then(function(rep) {
      let datas = rep.data.data;
      if (datas && datas.checkStatus == "1") {
        commit("setMember", datas);
        /*账户信息加载*/
        api.queryUser(datas.loginName).then(function(response) {
          var data = response.data.data;
          var account = {
            loginName: data.loginName,
            email: data.email,
            mobileno: data.mobileno,
            username: data.nickName,
            userRank: data.userRank,
            payPoints: data.payPoints,
            virtualCoin: data.virtualCoin,
            avatar: data.picture,
            couponNum: data.couponNum,
            questions: data.questions,
            id: data.id
          };
          commit("setUser", account);
        });
        /*账户信息加载完毕，执行回调*/
        param.loadedCallBack();
      } else {
        alert("未登录");
      }
    });
  },

  /*查询积分详情*/
  queryPointRecord({ commit, getters }, params) {
    params.loginName = getters.getMember.loginName;
    api.queryPointRecord(params).then(function(response) {
      let pointRecord = response.data;
      commit("setPointRecord", pointRecord);
    });
  },
  /*查询虚拟币详情*/
  queryVirtualMoney({ commit, getters }, params) {
    params.loginName = getters.getMember.loginName;
    api.queryVirtualMoney(params).then(function(response) {
      let virtualMoneyList = response.data;
      commit("setVirtualMoney", virtualMoneyList);
    });
  },
  /*查询收货地址*/
  queryAddress({ commit, getters }, params) {
    params.loginName = getters.getMember.loginName;
    api.queryAddress(params).then(function(response) {
      let addresses = response.data.data;
      commit("setAddresses", addresses);
    });
  },
  /*新增收货地址*/
  addAddress({ commit, getters }, params) {
    params.loginName = getters.getMember.loginName;
    api.addAddress(params).then(function(response) {
      let addStatus = response.data.result;
      params.cb(addStatus);
    });
  },
  /*修改收货地址*/
  updateAddress({ commit, getters }, params) {
    params.loginName = getters.getMember.loginName;
    api.updateAddress(params).then(function(response) {
      let updateStatus = response.data.result;
      params.cb(updateStatus);
    });
  },
  /*设置默认地址*/
  defaultAddress({ commit, getters }, params) {
    params.loginName = getters.getMember.loginName;
    api.defaultAddress(params).then(function(response) {
      let setStatus = response.data.result;
      params.cb(setStatus);
    });
  },
  /*删除收货地址*/
  deleteAddress({ commit, getters }, params) {
    api.deleteAddress(params).then(function(response) {
      let deleteStatus = response.data.result;
      params.cb(deleteStatus);
    });
  },
  /*查询支付方式*/
  queryPaymentList({ commit, getters }) {
    api.queryPaymentList().then(function(response) {
      let paymentList = response.data.data;
      commit("setPaymentList", paymentList);
    });
  },
  /*查询商品列表*/
  queryOrderList({ commit, getters }, params) {
    params.loginName = getters.getMember.loginName;
    let loading = Vue.prototype.$loading({ text: "正在加载中..." });
    api.queryOrderList(params).then(function(response) {
      let orderList = response.data;
      commit("setOrderList", orderList);
      loading.close();
    });
  },
  /*查询商品详情*/
  queryOrderDetails({ commit, getters }, params) {
    let loading = Vue.prototype.$loading({ text: "正在加载中..." });
    api.queryOrderDetails(params).then(function(response) {
      let orderDetails = response.data.data;
      commit("setOrderDetailst", orderDetails);
      loading.close();
      params.cb();
    });
  },
  /*时间筛选订单*/
  queryTimeList({ commit, getters }, params) {
    params.loginName = getters.getMember.loginName;
    let loading = Vue.prototype.$loading({ text: "正在加载中..." });
    api.queryTimeList(params).then(function(response) {
      let newdata = response.data;
      commit("setNewList", newdata);
      loading.close();
    });
  },
  /*修改邮箱*/
  updateEmail({ commit, getters }, params) {
    params.loginName = getters.getMember.loginName;
    api.updateEmail(params).then(function(response) {
      let Idata = response.data.result;
      params.cb(Idata, response);
    });
  },
  /*修改密码*/
  updatePassWord({ commit, getters }, params) {
    params.loginName = getters.getMember.loginName;
    api.updatePassWord(params).then(function(response) {
      let Idata = response.data.result;
      params.cb(Idata, response);
    });
  },
  /*设置密保问题*/
  setPswQuestion({ commit, getters }, params) {
    params.loginName = getters.getMember.loginName;
    api.setPswQuestion(params).then(function(response) {
      let Idata = response.data.result;
      params.cb(Idata, response);
    });
  },
  /*密保问题验证身份*/
  checkPswQuestion({ commit, getters }, params) {
    params.loginName = getters.getMember.loginName;
    api.checkPswQuestion(params).then(function(response) {
      let Idata = response.data.data.code;
      params.cb(Idata, response);
    });
  },
  /*通过验证身份重置密码*/
  modifyPassword({ commit, getters }, params) {
    params.loginName = getters.getMember.loginName;
    api.modifyPassword(params).then(function(response) {
      let setStatus = response.data.result;
      params.cb(setStatus);
    });
  },
  /*虚拟币充值*/
  // RechargeVirtual({commit, getters}, params) {
  //   params.loginName = getters.getMember.loginName;
  //   api.RechargeVirtual(params).then(function (response) {
  //     let Idata = response.data.result;
  //     // params.cb(Idata, response);
  //     params.cb(response);
  //   })
  // },
  /*取消订单*/
  cancelOrder({ commit, getters }, params) {
    api.cancelOrder(params).then(function(response) {
      let Idata = response.data.result;
      params.cb(Idata, response);
    });
  },
  /*删除订单*/
  deleteOrder({ commit, getters }, params) {
    api.deleteOrder(params).then(function(response) {
      let Idata = response.data.result;
      params.cb(Idata, response);
    });
  },
  /*获取书架*/
  querybookShelfInfo({ commit, getters }, params) {
    params.loginName = getters.getMember.loginName;
    params.type = 2;
    let loading = Vue.prototype.$loading({ text: "正在加载中..." });
    api.querybookShelfInfo(params).then(function(response) {
      let bookShelfInfo = response.data;
      commit("setBookShelfInfo", bookShelfInfo);
      loading.close();
    });
  },
  /*获取收藏夹*/
  queryCollectionInfo({ commit, getters }, params) {
    params.param.loginName = getters.getMember.loginName;
    let loading = Vue.prototype.$loading({ text: "正在加载中..." });
    api.queryCollectionInfo(params.param).then(function(response) {
      let collectionInfo = response.data;
      commit("setCollectionInfo", {
        collectionInfo: collectionInfo,
        myCallBack: params.myCallBack
      });
      loading.close();
    });
  },
  /*移除收藏夹*/
  deleteCollProduct({ commit, getters }, params) {
    params.loginName = getters.getMember.loginName;
    api.deleteCollProduct(params).then(function(response) {
      let delCollStatus = response.data.result;
      params.cb(delCollStatus);
    });
  },
  /*找回密码邮箱验证码*/
  findPassword({ commit, getters }, params) {
    let loading = Vue.prototype.$loading({ text: "正在加载中..." });
    api.findPassword(params).then(function(response) {
      let findStatus = response.data.result;
      let findNum = response.data.data;
      params.cb(findStatus, findNum, response);
      loading.close();
    });
  },
  /*重置密码*/
  setPassword({ commit, getters }, params) {
    api.setPassword(params).then(function(response) {
      let setStatus = response.data.result;
      params.cb(setStatus);
    });
  },
  /*邮箱注册账号*/
  registerSys({ commit, getters }, params) {
    api.registerSys(params).then(function(response) {
      let EStatus = response.data.result;
      params.cb(EStatus, response);
    });
  },
  /*手机注册账号*/
  registerByMobileNum({ commit, getters }, params) {
    api.registerByMobileNum(params).then(function(response) {
      let regStatus = response.data.result;
      params.cb(regStatus);
    });
  },
  /*头像上传*/
  uploadHeadPic({ commit, getters }, params) {
    params.loginName = getters.getMember.loginName;
    api.uploadHeadPic(params).then(function(response) {
      let uplStatus = response.data.result;
      params.cb(uplStatus);
    });
  },
  /*验证用户信息*/
  checkUserInfo({ commit, getters }, params) {
    api.checkUserInfo(params).then(function(response) {
      let checkStatus = response.data.result;
      params.cb(checkStatus);
    });
  },
  /*查询评论列表*/
  getMyComment({ commit, getters }, params) {
    params.loginName = getters.getMember.loginName;
    api.getMyComment(params).then(function(response) {
      let myComment = response.data.data;
      let commentScore = parseFloat(response.data.data.commentScore);
      commit("setMyComment", myComment);
    });
  },
  /*虚拟币积分兑换接口*/
  exchangeVirtualCoin({ commit, getters }, params) {
    params.loginName = getters.getMember.loginName;
    api.exchangeVirtualCoin(params).then(function(response) {
      let exchangeStatus = response.data.result;
      params.cb(exchangeStatus);
    });
  },
  /*订单付款*/
  commitOrder({ commit }, params) {
    api.commitOrder(params.param, ({ commitInfo }) =>
      commit("setcommitOrder", {
        commitInfo: commitInfo,
        myCallback: params.myCallback
      })
    );
  },
  /*申请退换货*/
  applyReturnGoods({ commit, getters }, params) {
    api.applyReturnGoods(params).then(function(response) {
      // let applyReturnStatus = response.data.result;
      // params.cb(applyReturnStatus);
    });
  },
  /*售后记录*/
  getReturnGoodsList({ commit, getters }, params) {
    params.loginName = getters.getMember.loginName;
    api.getReturnGoodsList(params).then(function(response) {
      let returnGoodsList = response.data.data;
      commit("setReturnGoodsList", returnGoodsList);
    });
  },

  /*查询优惠券列表*/
  queryCoupons({ commit }, params) {
    api.queryCoupons(params, ({ couponsList }) =>
      commit("setCoupons", couponsList)
    );
  },

  /*查询优惠券可用/已用总金额*/
  querySumCoupons({ commit }, params) {
    api.querySumCoupons(params, ({ sumCoupons }) =>
      commit("setSumCoupons", sumCoupons)
    );
  },

  /*优惠码激活*/
  queryActiveCoupons({ commit }, datas) {
    api.checkCoupons(datas.param, ({ checkStatus }) =>
      commit("setActiveCoupons", {
        checkStatus: checkStatus,
        myCallback: datas.myCallback
      })
    );
  },
  /*发送手机验证码*/
  sendToMobile({ commit, getters }, params) {
    let loading = Vue.prototype.$loading({ text: "验证码发送中..." });
    api.sendToMobile(params).then(function(response) {
      let sendStatus = response.data.result;
      let sendNum = response.data.data;
      params.cb(sendStatus, sendNum);
      loading.close();
    });
  },
  /*个人中心设置手机号*/
  bindMobile({ commit, getters }, params) {
    api.bindMobile(params).then(function(response) {
      let sendStatus = response.data.data.code;
      params.cb(sendStatus, response);
    });
  },
  /*个人中心更改手机号*/
  changeBindMobile({ commit, getters }, params) {
    api.changeBindMobile(params).then(function(response) {
      let sendStatus = response.data.data.code;
      params.cb(sendStatus, response);
    });
  },
  // 个人中心随手记列表
  searchNoteList({ commit, getters }, params) {
    let loading = Vue.prototype.$loading({ text: "正在加载中..." });
    api.searchNoteList(params).then(function(response) {
      let searchNoteList = response.data;
      commit("setSearchNoteList", searchNoteList);
      loading.close();
    });
  },
  /*随手记上传*/
  saveNote({ commit, getters }, params) {
    api.saveNote(params).then(function(response) {
      params.cb(response.data.status);
    });
  },
  /*随手记删除*/
  deleteNote({ commit, getters }, params) {
    params.loginName = getters.getMember.loginName;
    api.deleteNote(params).then(function(response) {
      params.cb(response.data);
    });
  },
  // 参与的活动
  /*参与的活动列表*/
  activityList({ commit, getters }, params) {
    params.loginName = getters.getMember.loginName;
    api.myWorks(params).then(function(response) {
      let activityList = response.data.data;
      commit("setActivityList", activityList);
    });
  },
  /*查询学生列表*/
  getActivityMemberByTeacher({ commit, getters }, params) {
    params.teacherID = getters.getMember.id;
    api.getActivityMemberByTeacher(params).then(function(response) {
      let activityMemberList = response.data.data;
      commit("setActivityMemberList", activityMemberList);
    });
  }
};

var mutations = {
  setMember: (state, member) => (state.member = member),
  setCurrentShow: (state, currentShow) => (state.currentShow = currentShow),
  setUser: (state, account) => (state.account = account),
  setPointRecord: (state, pointRecord) => (state.pointRecord = pointRecord),
  setVirtualMoney: (state, virtualMoney) => (state.virtualMoney = virtualMoney),
  setAddresses: (state, addresses) => (state.addresses = addresses),
  setOrderList: (state, orderList) => (state.orderList = orderList),
  setNewList: (state, newdata) => (state.orderList = newdata),
  setPaymentList: (state, paymentList) => (state.paymentList = paymentList),
  setOrderDetailst: (state, orderDetails) =>
    (state.orderDetails = orderDetails),
  setBookShelfInfo: (state, bookShelfInfo) =>
    (state.bookShelfInfo = bookShelfInfo),
  setReturnGoodsList: (state, returnGoodsList) =>
    (state.returnGoodsList = returnGoodsList),
  setSearchNoteList: (state, searchNoteList) =>
    (state.searchNoteList = searchNoteList),
  setCollectionInfo: (state, datas) => {
    state.collectionInfo = datas.collectionInfo;
    datas.myCallBack();
  },
  setMyComment: (state, myComment) => (state.myComment = myComment),
  setcommitOrder: (state, datas) => {
    state.commitInfo = datas.commitInfo;
    datas.myCallback();
  },
  setCoupons: (state, couponsList) => {
    state.couponsList = couponsList;
  },
  setSumCoupons: (state, sumCoupons) => {
    state.sumCoupons = sumCoupons;
  },
  setActiveCoupons: (state, datas) => {
    state.checkStatus = datas.checkStatus;
    datas.myCallback();
  },
  setActivityList: (state, activityList) => (state.activityList = activityList),
  setActivityMemberList: (state, activityMemberList) => (state.activityMemberList = activityMemberList),
};

export default {
  namespaced: true,
  name: "personalCenter",
  state,
  getters,
  actions,
  mutations
};
