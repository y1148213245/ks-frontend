/*
 * @Author: yan.chaoming
 * @Date: 2017-12-26 09:23:33
 * @Last Modified by: yancm
 * @Last Modified time: 2018-11-01 14:37:59
 */

import * as interfaces from "../common/interfaces.js";
import { Get, Post, _axios, CookieUtils } from "@common";

let timer = null;

let state = {
	CONFIG: null,
	member: {},  //用户信息
	cartTotalAmount: 0, // 购物车商品总数
};

let getters = {
	[interfaces.GET_MEMBER]: state => state.member,
	[interfaces.GET_MEMBER_ISLOGIN]: (state) => state.member['loginName'],
	[interfaces.GET_TOTAL_AMOUNT]: (state) => state.cartTotalAmount,
};

let mutations = {
	[interfaces.SET_MEMBER]: (state, member) => {
		state.member = member;
	},
	updateMember: function (state, member) {
		state.member = member;
	}
};

let actions = {
	[interfaces.ACTION_LOGIN]({ commit }, params) {
		return Post(CONFIG.BASE_URL + "login.do", params.member).then(function (rep) {
			let datas = rep.data
			if (datas.data && (datas.data.checkStatus == "1" || datas.data.checkStatus == 1)) {
				commit("updateMember", datas.data);
				//params.isAutomaticLogin 是否自动登陆属性
				//由于sessionStorage 多标签页不能共享，暂时使用localstorage
				if (1) {
					window.localStorage.setItem('token', datas.token);
					
					if (CONFIG && CONFIG.COOKIE) {
						let day, domain;
						if (CONFIG.COOKIE.DAY) {
							day = CONFIG.COOKIE.DAY
						} else {
							day = 1
						}
						if (CONFIG.COOKIE.DOMAIN) {
							domain = CONFIG.COOKIE.DOMAIN
						}
						CookieUtils.setCookie('token', datas.token, day, domain)
					}

				} else {
					sessionStorage.setItem('token', datas.token)
				}
			}
			// debugger
			return rep;
		});
	},

	[interfaces.ACTION_KEEP_SESSION]: ({ commit }) => {
		if (!timer)
			timer = window.setInterval(keepSession, 600000);
		return keepSession();

		function keepSession() {
			let stamp = new Date().getTime();
			return Get(CONFIG.BASE_URL + 'checkToken.do?stamp=' + stamp)
				.then(function (rep) {
					let datas = rep.data;
					let _member = datas.data || {};
					commit("updateMember", _member);
					return _member
				});
		};
	},
	[interfaces.ACTION_LOGOUT]: function () {
		window.localStorage.setItem('token', '');
		if (CONFIG && CONFIG.COOKIE) {
			let day, domain;
			if (CONFIG.COOKIE.DAY) {
				day = CONFIG.COOKIE.DAY
			} else {
				day = 1
			}
			if (CONFIG.COOKIE.DOMAIN) {
				domain = CONFIG.COOKIE.DOMAIN
			}
			CookieUtils.setCookie('token', '', day, domain)
		}
	},
	getTotalAmount({ commit, state }, amount) {
		state.cartTotalAmount = amount;
	}

};

export default {
	namespaced: true,
	name: "login",
	state,
	getters,
	actions,
	mutations
};
