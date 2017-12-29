/*
 * @Author: yan.chaoming
 * @Date: 2017-12-26 09:23:33
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2017-12-27 10:51:05
 */

import * as interfaces from "../common/interfaces.js";
import {Get, Post} from "@common";

let timer = null;

let state = {
	CONFIG: null,
	member: {} //用户信息
};

let getters = {
	[interfaces.GET_MEMBER]: state => state.member,
	[interfaces.GET_MEMBER_ISLOGIN]: (state)=> state.member['loginName']
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
	[interfaces.ACTION_LOGIN]({commit}, member) {
		return Post(BASE_URL + "login.do", member).then(function (rep) {
			if (rep.data && (rep.data.checkStatus == "1" || rep.data.checkStatus == 1)) {
				commit("updateMember", rep.data);
			}
			return rep;
		});
	},
	[interfaces.ACTION_REGISTER]: function ({}, user) {
		return Post(BASE_URL + "/user/registerSys.do?loginName=" + user.loginName + "&passWord=" + user.password);
	},
	[interfaces.ACTION_KEEP_SESSION]: ({commit}) => {
		if(!timer)
			timer = window.setInterval(keepSession(commit), 600000);
		return keepSession(commit);
	},
	[interfaces.ACTION_LOGOUT]: function () {
		return Get( BASE_URL + '/logout.do');
	}
	
};

var keepSession = function (commit) {
	return Get(BASE_URL + 'keepSession.do')
		.then(function (rep) {
			var _member = rep.data['member'] || {};
			commit("updateMember", _member);
			return _member
		});
};

export default {
	namespaced: true,
	name: "login_02",
	state,
	getters,
	actions,
	mutations
};
