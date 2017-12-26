/*个人中心接口API*/
import Vue from 'vue';
import axios from 'axios';
// import {SITE_CONFIG} from 'projectConfig';


export default {
	/*01查询帐号信息*/
	queryUser(loginName) {
		var url = BASE_URL+'user/getMemberByName.do?loginName=' + (loginName || '');
		return axios.get(url);
	},
	/*02查看积分*/
	queryPointRecord(params) {
		var url = BASE_URL+'user/points.do?loginName=' + params.loginName + '&pageIndex=' + (params.pageIndex|| 1) + '&pageSize=' + (params.pageSize|| 8);
		return axios.get(url);
	},
	/*03查询虚拟币*/
	queryVirtualMoney(params) {
		var url = BASE_URL+'rechargeVirtualCoin/getVirtualCoinByLoginName.do?loginName=' + params.loginName + '&pageIndex=' + (params.pageIndex|| 1) + '&pageSize=' + (params.pageSize|| 8) + '&siteId=' + SITE_CONFIG.siteId;
		return axios.get(url);
	},
	/*04修改邮箱*/
	updateEmail(params) {
		var url = BASE_URL+'email/bindEmail.do?loginName=' + params.loginName + '&email=' +params.value;
		return axios.get(url);
	},
	/*05修改密码*/
	updatePassWord(params) {
		var url = BASE_URL+'user/updatePassword.do?loginName=' + params.loginName + '&oldPassword=' + params.oldPass + '&newPassword=' + params.checkPass;
		return axios.post(url);
	},
	/*06查询收货地址*/
	queryAddress(params) {
		var url = BASE_URL+'user/addresses.do?loginName=' + params.loginName;
		return axios.get(url);
	},
	 /*07修改收货地址*/
	updateAddress(params) {
		var url =BASE_URL+'user/updateAddress.do?';
		return axios.post(url, params);
	},
	/*08新增收货地址*/
	addAddress(params) {
		var url =BASE_URL+'user/addAddress.do?';
		return axios.post(url, params);
	},
	/*09删除收货地址*/
	deleteAddress(params) {
		var url =BASE_URL+'user/deleteAddress.do?ids=' + params.ids;
		return axios.post(url);
	},
	/*10设置默认地址*/
	defaultAddress(params) {
		var url =BASE_URL+'user/setDefaultAddress.do?id=' + params.id + '&loginName=' + params.loginName;
		return axios.get(url);
	},
	/*11获取支付方式*/
	queryPaymentList() {
		var url =BASE_URL+'cart/getPayMethod.do';
		return axios.get(url);
	},
	/*12虚拟币充值*/
	// RechargeVirtual(params) {
		// var url = BASE_URL+'rechargeVirtualCoin/rechargeByLoginName.do?loginName=' + params.loginName + '&coinValue=' + params.paynum * 100 + '&siteId=' + SITE_CONFIG.siteId;
		// var url = 'http://172.19.36.70:9092/spc-portal-web/epay/getVirtualCoinPayForm.do?price=1&loginName=1&payMethodId=1&siteId=1'
		// var url = 'epay/getVirtualCoinPayForm.do?price=1&loginName=1&payMethodId=1&siteId=1'
		// return axios.get(url);
	// },
	/*13获取订单列表*/
	queryOrderList(params) {
		var url =BASE_URL+'order/getOrderListByLoginName.do?loginName=' + params.loginName + '&pageIndex=' + (params.pageIndex|| 1) + '&pageSize=' + (params.pageSize|| 8) + '&siteId=' + SITE_CONFIG.siteId +'&payStatus=' + params.payStatus;
		return axios.get(url);
	},
	/*14时间筛选订单*/
	queryTimeList(params) {
		var url =BASE_URL+'order/queryOrder.do?loginName=' + params.loginName + '&pageIndex=1&pageSize=8'+ '&siteId=' + SITE_CONFIG.siteId +'&sTime=' + params.stime + '&eTime=' + params.etime;
		return axios.get(url);
	},
	/*15取消订单*/
	cancelOrder(params) {
		var url =BASE_URL+'order/cancelParentOrder.do?orderId=' + params.id;
		return axios.get(url);
	},
	/*16删除订单*/
	deleteOrder(params) {
		var url =BASE_URL+'order/deleteParentOrder.do?id=' + params.id;
		return axios.get(url);
	},
	/*17获取订单详情*/
	queryOrderDetails(params) {
		var url = BASE_URL+'order/getProductListByOrderId.do?orderId='+ params.orderId;
		return axios.get(url);
	},
	/*18获取书架列表*/
	querybookShelfInfo(params) {
		var url = BASE_URL+'user/getBookShelfList.do?loginName=' + params.loginName + '&pageIndex=' + (params.pageIndex|| 1) + '&pageSize=' +(params.pageSize|| 8)+ '&type=' + params.type + '&siteId=' + SITE_CONFIG.siteId;
		return axios.get(url);
	},
	/*19获取收藏夹列表*/
	queryCollectionInfo(params) {
		var url = BASE_URL+'collection/getCollectList.do?loginName=' + params.loginName + '&pageIndex=' + (params.pageIndex|| 1) + '&pageSize=' + (params.pageSize|| 8) + '&siteId=' + SITE_CONFIG.siteId;
		return axios.get(url);
	},
	/*20移除收藏夹*/
	deleteCollProduct(params) {
		var url = BASE_URL+'collection/cancelCollect.do?pubIds=' + params.id + '&loginName=' + params.loginName + '&siteId=' + SITE_CONFIG.siteId;
		return axios.get(url);
	},
	// 忘记密码---------------------------------------------------------------------------------------------------------------------------------------
	/*21找回密码验证码*/
	findPassword(params){
		var url = BASE_URL+'user/findPassword.do?email=' + params.email;
		return axios.get(url);
	},
	/*22重置密码*/
	setPassword(params){
		var url = BASE_URL+'user/setPassword1.do?email=' + params.email + '&password=' + params.checkPass;
		return axios.post(url);
	},
	// 注册账号---------------------------------------------------------------------------------------------------------------------------------------
	/*23邮箱注册账号*/
	registerSys(params){
		var url = BASE_URL+'user/registerSys1.do?loginName=' + params.loginName +'&passWord=' + params.checkPass + '&email=' + params.email;
		return axios.post(url);
	},
	/*24手机号注册账号*/
	// registerByMobileNum(params){
	// 	var url = BASE_URL+'user/registerSys.do?loginName=' + params.MobileNum + '&passWord=' + params.checkPass;
	// 	return axios.post(url);
	// },
	/*25头像上传*/
	// uploadHeadPic(params){
	// 	var url = BASE_URL+'http://172.19.36.70:9092/spc-portal-web/user/uploadHeadPic.do?loginName=' + params.loginName;
	// 	return axios.post(url,config);
	// },
	/*26验证注册信息是否存在*/
	checkUserInfo(params){
		var url = BASE_URL+'user/checkUserInfo.do?checkText=' + params.text + '&checkType=' + params.type;
		return axios.get(url);
	},
	/*27获取评论列表*/
	getMyComment(params){
		var url = BASE_URL+'comment/getMyComment.do?loginName='+ params.loginName + '&siteId=' + SITE_CONFIG.siteId;
		return axios.get(url);
	},
	/*28积分兑换虚拟币*/
	exchangeVirtualCoin(params){
		var url = BASE_URL+'rechargeVirtualCoin/payPoints2VirtualCoin.do?payPoints=' + params.number + '&loginName=' + params.loginName;
		return axios.get(url);
	},
		/*29申请退换货*/
		applyReturnGoods(params){
			var url = BASE_URL+'order/applyReturnGoods.do?' + params;
			return axios.get(url);
		},
		/*30售后记录*/
		getReturnGoodsList(params){
			var url = BASE_URL+'order/getReturnGoodsList.do?loginName='+ params.loginName+'&pageIndex=1&pageSize=15';
			return axios.get(url);
		},
		/*31设置密保问题*/
		setPswQuestion(params){
			var url = BASE_URL+'user/setPswQuestion.do?loginName='+ params.loginName+'&pswId='+params.pswId+'&answer='+ params.answer;
			return axios.get(url);
		},
		/*32密保问题验证身份*/
		checkPswQuestion(params){
			var url = BASE_URL+'user/checkPswQuestion.do?loginName='+ params.loginName+'&pswId='+params.pswId+'&answer='+ params.answer;
			return axios.get(url);
		},
		/*33通过身份验证修改密码*/
		modifyPassword(params){
			var url = BASE_URL+'user/modifyPassword.do?loginName='+ params.loginName+'&newPassword='+params.checkPass;
			return axios.post(url);
		},
		/*提交订单*/
  	commitOrder(params, cb) {
    axios.get(BASE_URL+'order/submitSplitOrder1.do?parentOrderCode=' + params.parentOrderCode).then(function (response) {
      if (cb && cb instanceof Function) {
        cb({commitInfo: response.data.data});
      }
    })
  },

  /**
   * 个人中心 根据用户名获取优惠券
   */
  queryCoupons(params, cb) {
    var url = BASE_URL+ 'user/getCounponsByName.do?loginName=' + params.loginName + '&type=' + params.type;
    axios.get(url).then(function (response) {
      if (cb && cb instanceof Function) {
        cb({
          couponsList: response.data.result === '1' ? response.data.data : false
        });
      }
    })
  },

  /**
   * 个人中心 根据用户名获取可用和已用优惠券的价格
   */
  querySumCoupons(params, cb) {
    var url = BASE_URL+'user/getSumCounpons.do?loginName=' + params.loginName;
    axios.get(url).then(function (response) {
      if (cb && cb instanceof Function) {
        cb({
          sumCoupons: response.data.result === '1' ? response.data.data : false
        });
      }
    })
  },

  /**
   * 个人中心 激活优惠码
   */
  checkCoupons(params, cb) {
    axios.get(BASE_URL+'user/activeCoupons.do?couponPassword=' + params.couponPassword + '&loginName=' + params.loginName).then(function (response) {
      if (cb && cb instanceof Function) {
        var res = response.data;  // 返回结果 1：成功 0：失败
        if (res.result === '1') {
          var resInfo = {
            status: true,
            msg: ''
          };
          if(res.data) {  // 激活成功
            resInfo.msg = res.data.msg;
          } else if (res.error) {  // 已经被激活过了
            resInfo.msg = res.error.errorMsg;
          }
          cb({checkStatus: resInfo});
        } else {
          var resInfo = {
            status: false,
            msg: ''
          };
          cb({checkStatus: resInfo});
        }
      }
    }).catch(function (error) {
    });
  },
}
