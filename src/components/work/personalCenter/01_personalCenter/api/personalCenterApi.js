/*个人中心接口API*/
import Vue from "vue";
import { Get,Post } from '@common'
// import {CONFIG.SITE_CONFIG} from 'projectConfig';
/*jshint esversion: 6 */
export default {
  /*查询帐号信息*/
  queryUser(loginName) {
    var url =
      CONFIG.BASE_URL + "user/getMemberByName.do?loginName=" + (loginName || "");
    return Get(url);
  },
  /*查看积分*/
  queryPointRecord(params) {
    var url =
      CONFIG.BASE_URL +
      "user/points.do?loginName=" +
      params.loginName +
      "&pageIndex=" +
      (params.pageIndex || 1) +
      "&pageSize=" +
      (params.pageSize || 8);
    return Get(url);
  },
  /*查询下载币*/
  queryVirtualMoney(params) {
    var url =
      CONFIG.BASE_URL +
      "rechargeVirtualCoin/getVirtualCoinByLoginName.do?loginName=" +
      params.loginName +
      "&pageIndex=" +
      (params.pageIndex || 1) +
      "&pageSize=" +
      (params.pageSize || 8) +
      "&siteId=" +
      CONFIG.SITE_CONFIG.siteId;
    return Get(url);
  },
  /*修改邮箱*/
  updateEmail(params) {
    var url =
      CONFIG.BASE_URL +
      "email/bindEmail.do?loginName=" +
      params.loginName +
      "&email=" +
      params.value;
    return Get(url);
  },
  /*修改密码*/
  updatePassWord(params) {
    var url =
      CONFIG.BASE_URL +
      "user/updatePassword.do?loginName=" +
      params.loginName +
      "&oldPassword=" +
      params.oldPass +
      "&newPassword=" +
      params.checkPass;
    return Post(url);
  },
  /*查询收货地址*/
  queryAddress(params) {
    var url = CONFIG.BASE_URL + "user/addresses.do?loginName=" + params.loginName;
    return Get(url);
  },
  /*修改收货地址*/
  updateAddress(params) {
    var url = CONFIG.BASE_URL + "user/updateAddress.do?";
    return Post(url, params);
  },
  /*新增收货地址*/
  addAddress(params) {
    var url = CONFIG.BASE_URL + "user/addAddress.do?";
    return Post(url, params);
  },
  /*删除收货地址*/
  deleteAddress(params) {
    var url = CONFIG.BASE_URL + "user/deleteAddress.do?ids=" + params.ids;
    return Post(url);
  },
  /*设置默认地址*/
  defaultAddress(params) {
    var url =
      CONFIG.BASE_URL +
      "user/setDefaultAddress.do?id=" +
      params.id +
      "&loginName=" +
      params.loginName;
    return Get(url);
  },
  /*获取支付方式*/
  queryPaymentList() {
    var url = CONFIG.BASE_URL + "cart/getPayMethod.do";
    return Get(url);
  },
  /*下载币充值*/
  // RechargeVirtual(params) {
  // var url =CONFIG.BASE_URL+'rechargeVirtualCoin/rechargeByLoginName.do?loginName=' + params.loginName + '&coinValue=' + params.paynum * 100 + '&siteId=' + CONFIG.SITE_CONFIG.siteId;
  // var url = 'http://172.19.36.70/portal/api/epay/getVirtualCoinPayForm.do?price=1&loginName=1&payMethodId=1&siteId=1'
  // var url = CONFIG.BASE_URL+'epay/getVirtualCoinPayForm.do?price=1&loginName=1&payMethodId=1&siteId=1'
  // return Get(url);
  // },
  /*获取订单列表*/
  queryOrderList(params) {
    var url =
      CONFIG.BASE_URL +
      "order/getOrderListByLoginName.do?loginName=" +
      params.loginName +
      "&pageIndex=" +
      (params.pageIndex || 1) +
      "&pageSize=" +
      (params.pageSize || 8) +
      "&siteId=" +
      CONFIG.SITE_CONFIG.siteId +
      "&payStatus=" +
      params.payStatus +
      "&status=" +
      params.status;
    return Get(url);
  },
  /*时间筛选订单*/
  queryTimeList(params) {
    var url =
      CONFIG.BASE_URL +
      "order/queryOrder.do?loginName=" +
      params.loginName +
      "&pageIndex=1&pageSize=8" +
      "&siteId=" +
      CONFIG.SITE_CONFIG.siteId +
      "&sTime=" +
      params.stime +
      "&eTime=" +
      params.etime;
    return Get(url);
  },
  /*取消订单*/
  cancelOrder(params) {
    var url = CONFIG.BASE_URL + "order/cancelParentOrder.do?orderId=" + params.id;
    return Get(url);
  },
  /*删除订单*/
  deleteOrder(params) {
    var url = CONFIG.BASE_URL + "order/deleteParentOrder.do?id=" + params.id;
    return Get(url);
  },
  /*获取订单详情*/
  queryOrderDetails(params) {
    var url =
      CONFIG.BASE_URL + "order/getProductListByOrderId.do?orderId=" + params.orderId;
    return Get(url);
  },
  /*获取书架列表*/
  querybookShelfInfo(params) {
    var url =
      CONFIG.BASE_URL +
      "user/getBookShelfList.do?loginName=" +
      params.loginName +
      "&pageIndex=" +
      (params.pageIndex || 1) +
      "&pageSize=" +
      (params.pageSize || 8) +
      "&type=" +
      params.type +
      "&siteId=" +
      CONFIG.SITE_CONFIG.siteId;
    return Get(url);
  },
  /*获取收藏夹列表*/
  queryCollectionInfo(params) {
    var url =
      CONFIG.BASE_URL +
      "collection/getCollectList.do?loginName=" +
      params.loginName +
      "&pageIndex=" +
      (params.pageIndex || 1) +
      "&pageSize=" +
      (params.pageSize || 8) +
      "&siteId=" +
      CONFIG.SITE_CONFIG.siteId +
      "&contentType=" +
      (params.contentType || 94);
    return Get(url);
  },
  /*移除收藏夹*/
  deleteCollProduct(params) {
    var url =
      CONFIG.BASE_URL +
      "collection/cancelCollect.do?pubIds=" +
      params.id +
      "&loginName=" +
      params.loginName +
      "&siteId=" +
      CONFIG.SITE_CONFIG.siteId;
    return Get(url);
  },
  // 忘记密码---------------------------------------------------------------------------------------------------------------------------------------
  /*找回密码验证码*/
  findPassword(params) {
    var url = CONFIG.BASE_URL + "user/findPassword.do?email=" + params.email;
    return Get(url);
  },
  /*邮箱重置密码*/
  setPassword(params) {
    var url =
      CONFIG.BASE_URL +
      "user/setPassword1.do?email=" +
      params.email +
      "&password=" +
      params.checkPass;
    return Post(url);
  },
  /*手机重置密码*/
  setPasswordByMobile(params) {
    var url =
      CONFIG.BASE_URL +
      "user/setPasswordByMobile.do?mobileNum=" +
      params.mobileNum +
      "&password=" +
      params.checkPass;
    return Post(url);
  },
  // 注册账号---------------------------------------------------------------------------------------------------------------------------------------
  /*邮箱注册账号*/
  registerSys(params) {
    var url =
      CONFIG.BASE_URL +
      "user/registerSys1.do?loginName=" +
      params.loginName +
      "&passWord=" +
      params.checkPass +
      "&email=" +
      params.email;
    return Post(url);
  },
  /*手机号注册账号*/
  registerBindMobileNum(params) {
    var url =
      CONFIG.BASE_URL +
      "user/registerBindMobileNum.do?mobileNum=" +
      params.mobileNum +
      "&loginName=" +
      params.loginName +
      "&passWord=" +
      params.checkPass;
    return Get(url);
  },
  /*头像上传*/
  // uploadHeadPic(params){
  // 	var url ='http://172.19.36.70/portal/api/user/uploadHeadPic.do?loginName=' + params.loginName;
  // 	return Post(url,config);
  // },
  /*验证注册信息是否存在*/
  checkUserInfo(params) {
    var url =
      CONFIG.BASE_URL +
      "user/checkUserInfo.do?checkText=" +
      params.text +
      "&checkType=" +
      params.type;
    return Get(url);
  },
  /*获取评论列表*/
  getMyComment(params) {
    var url =
      CONFIG.BASE_URL +
      "comment/getMyComment.do?loginName=" +
      params.loginName +
      "&siteId=" +
      CONFIG.SITE_CONFIG.siteId;
    return Get(url);
  },
  /*积分兑换下载币*/
  exchangeVirtualCoin(params) {
    var url =
      CONFIG.BASE_URL +
      "rechargeVirtualCoin/payPoints2VirtualCoin.do?payPoints=" +
      params.number +
      "&loginName=" +
      params.loginName;
    return Get(url);
  },
  /*申请退换货*/
  applyReturnGoods(params) {
    // var url = CONFIG.BASE_URL + "order/applyReturnGoods.do?";
    var url = "http://172.19.36.70/portal/api/order/applyReturnGoods.do?";

    return Post(url, params);
  },
  /*售后记录*/
  getReturnGoodsList(params) {
    var url =
      CONFIG.BASE_URL +
      "order/getReturnGoodsList.do?loginName=" +
      params.loginName +
      "&pageIndex=1&pageSize=15";
    return Get(url);
  },
  /*设置密保问题*/
  setPswQuestion(params) {
    var url =
      CONFIG.BASE_URL +
      "user/setPswQuestion.do?loginName=" +
      params.loginName +
      "&pswId=" +
      params.pswId +
      "&answer=" +
      params.answer;
    return Get(url);
  },
  /*密保问题验证身份*/
  checkPswQuestion(params) {
    var url =
      CONFIG.BASE_URL +
      "user/checkPswQuestion.do?loginName=" +
      params.loginName +
      "&pswId=" +
      params.pswId +
      "&answer=" +
      params.answer;
    return Get(url);
  },
  /*通过身份验证修改密码*/
  modifyPassword(params) {
    var url =
      CONFIG.BASE_URL +
      "user/modifyPassword.do?loginName=" +
      params.loginName +
      "&newPassword=" +
      params.checkPass;
    return Post(url);
  },
  /*提交订单*/
  commitOrder(params, cb) {
    Get(
        CONFIG.BASE_URL +
          "order/submitSplitOrder1.do?parentOrderCode=" +
          params.parentOrderCode
      )
      .then(function(response) {
        if (cb && cb instanceof Function) {
          cb({ commitInfo: response.data.data });
        }
      });
  },
  /*发送手机验证码*/
  sendToMobile(params) {
    var url = CONFIG.BASE_URL + params.url + "?mobileNum=" + params.mobileNum;
    return Get(url);
  },
  /*个人中心设置手机号*/
  bindMobile(params) {
    var url =
      CONFIG.BASE_URL +
      "user/bindMobile.do?loginName=" +
      params.loginName +
      "&mobileNum=" +
      params.mobileNum;
    return Get(url);
  },
  /*个人中心更换手机号*/
  changeBindMobile(params) {
    var url =
      CONFIG.BASE_URL +
      "user/changeBindMobile.do?loginName=" +
      params.loginName +
      "&mobileNum=" +
      params.mobileNum;
    return Get(url);
  },
  /*个人中心随手记列表*/
  searchNoteList(params) {
    var url =
      CONFIG.BASE_URL +
      "spc/prodb/search.do?doclibCode=PORTAL_NOTE&loginName=" +
      params.loginName +
      "&status=0&page=" +
      params.page +
      "&size=" +
      params.size;
    return Get(url);
  },
  // 随手记上传
  saveNote(params) {
    var url = CONFIG.BASE_URL + "spc/prodb/saveItem.do";
    return Post(url, params);
  },
  // 随手记删除
  deleteNote(params) {
    var url =
      CONFIG.BASE_URL +
      "spc/prodb/deleteItem.do?doclibCode=PORTAL_NOTE&DocIDs=" +
      params.DocIDs +
      "&loginName=" +
      params.loginName;
    return Get(url);
  },
  //随手记详情页
  fetchArticle(params) {
    var url =
      CONFIG.BASE_URL +
      "spc/prodb/doc/detail.do?doclibCode=PORTAL_NOTE&docID=" +
      params.DocIDs +
      "&loginName=" +
      params.loginName;
    return Get(url);
  },
  /**
   * 个人中心 根据用户名获取优惠券
   */
  queryCoupons(params, cb) {
    var url =
      CONFIG.BASE_URL +
      "user/getCounponsByName.do?loginName=" +
      params.loginName +
      "&type=" +
      params.type;
    Get(url).then(function(response) {
      if (cb && cb instanceof Function) {
        cb({
          couponsList: response.data.result === "1" ? response.data.data : false
        });
      }
    });
  },

  /**
   * 个人中心 根据用户名获取可用和已用优惠券的价格
   */
  querySumCoupons(params, cb) {
    var url = CONFIG.BASE_URL + "user/getSumCounpons.do?loginName=" + params.loginName;
    Get(url).then(function(response) {
      if (cb && cb instanceof Function) {
        cb({
          sumCoupons: response.data.result === "1" ? response.data.data : false
        });
      }
    });
  },

  /**
   * 个人中心 激活优惠码
   */
  checkCoupons(params, cb) {
    axios
      .get(
        CONFIG.BASE_URL +
          "user/activeCoupons.do?couponPassword=" +
          params.couponPassword +
          "&loginName=" +
          params.loginName
      )
      .then(function(response) {
        if (cb && cb instanceof Function) {
          var res = response.data; // 返回结果 1：成功 0：失败
          if (res.result === "1") {
            var resInfo = {
              status: true,
              msg: ""
            };
            if (res.data) {
              // 激活成功
              resInfo.msg = res.data.msg;
            } else if (res.error) {
              // 已经被激活过了
              resInfo.msg = res.error.errorMsg;
            }
            cb({ checkStatus: resInfo });
          } else {
            var resInfo = {
              status: false,
              msg: ""
            };
            cb({ checkStatus: resInfo });
          }
        }
      })
      .catch(function(error) {});
  },
  // 参与的活动
  /*查询学生列表*/
  getActivityMemberByUser(params) {
    var url =
      CONFIG.BASE_URL +
      "user/getActivityMemberByUser.do?userId=" +
      params.userId +
      "&pageNo=" +
      params.pageNo +
      "&pageSize=" +
      params.pageSize;
    return Get(url);
  },
  // 新增学生
  addActivityMember(params) {
    var url = CONFIG.BASE_URL + "user/addActivityMember.do";
    return Post(url, params);
  },
  // 删除学生
  deleteActivityMemberById(params) {
    var url =
      CONFIG.BASE_URL +
      "user/deleteActivityMemberById.do?id=" +
      params.id +
      "&userId=" +
      params.userId;
    return Get(url);
  },
  // 编辑学生
  modifyActivityMember(params) {
    var url = CONFIG.BASE_URL + "user/modifyActivityMember.do";
    return Post(url, params);
  },
  // 参与的活动
  myWorks(params) {
    var url =
      CONFIG.BASE_URL +"spc/prodb/activity/myWorks.do?loginName=" +
      params.loginName +
      "&status=" +
      (params.status || "") +
      "&pageSize=" +
      (params.pageSize || "1") +
      "&page=" +
      (params.page || "99");
    return Get(url);
  },
   // 设置公开
  setHide(params) {
    var url = CONFIG.BASE_URL + "spc/prodb/saveItem.do";
    return Post(url, params);
  },
};
