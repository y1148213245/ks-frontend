/*
 * @Author: yan.chaoming
 * @Date: 2017-12-26 09:23:33
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-05-23 16:19:20
 */

import * as interfaces from "../common/interfaces.js";
import { Get, Post, _axios } from "@common";

let state = {
};

let getters = {
};

let mutations = {

};

let actions = {

	[interfaces.ACTION_REGISTER]: function ({ }, user) {
		return Post(CONFIG.BASE_URL + "/user/registerSys.do?loginName=" + user.loginName + "&passWord=" + user.password);
	},
	[interfaces.ACTION_REGISTER_EMAIL]: function ({ }, user) {
		return Post(CONFIG.BASE_URL + '/user/registerSys1.do?loginName=' + user.loginName + '&passWord=' + user.checkPass + '&email=' + user.email);
	},
	[interfaces.ACTION_REGISTER_MOBILE]: ({ }, params) => {
		return Get(CONFIG.BASE_URL + '/user/registerBindMobileNum.do?mobileNum=' + params.mobileNum + '&loginName=' + params.loginName + '&passWord=' + params.checkPass);
	},
	[interfaces.ACTION_CHECK_USERINFO]: ({ }, params) => {
		return Get(CONFIG.BASE_URL + '/user/checkUserInfo.do?checkText=' + params.text + '&checkType=' + params.type);
	},
	[interfaces.ACTION_SEND_MOBILE_NUM]: ({ }, params) => {
		let url = params.url; 
		return Get(CONFIG.BASE_URL + url + '?mobileNum=' + params.mobileNum)
	},
	/* 绑定第三方 */
	[interfaces.ACTION_BIND_THIRDPARTY]: ({ }, params) => {
		// let url = params.url; 
		return Get(CONFIG.BASE_URL + 'auth/loginWeb.do',{params})
	},
	/* 第三方直接登陆 */
	[interfaces.ACTION_THIRDPARTY_LOGIN]: ({ }, params) => {
		let url = params.url; 
		return Get(CONFIG.BASE_URL + url + '?mobileNum=' + params.mobileNum)
	},

};


export default {
	namespaced: true,
	name: "register",
	state,
	getters,
	actions,
	mutations
};
