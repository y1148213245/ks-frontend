/*
 * @Author: yan.chaoming 
 * @Date: 2017-12-26 09:23:33 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2017-12-26 10:04:57
 */

import * as type from '../../common/constConfig.js';
import {Post} from "@common";

var state = {
  member:{},           //用户信息
};

var getters = {
  [type.GET_MEMBER]: (state) => state.member,
};

var actions = {
  [type.LOGIN]({commit}, payload) {
    // console.log(payload)
		Post('/login.do',payload['member']).then(function(rep) {
			if(!rep.data) {
				payload['loginErr']();
			}else if(rep.data.checkStatus == 0){
				payload['loginFreeze']();
			} else {
				if(payload['cb'])
					payload['cb']();
			}
		});
  },
  logout(){
		api.logout().then(function(rep){
		 if(rep.status == 200){
			window.location.href = "../index/index.html";
		 }
		})
	},
	memberInit({commit}) {
		console.log('登陆状态验证')
		
		keepSession();

		window.setInterval(keepSession(),600000);

		function keepSession(){

			api.keepSession().then(function(rep) {
				
				if(rep.data && rep.data.status == 'ok' && rep.data['member']) {
					commit(type.SET_MEMBER, rep.data['member']);
				} else {
					commit(type.SET_MEMBER, {});
				}
			});
		}
	}

};

var mutations = {
  [type.SET_MEMBER]: (state,member) => {
		state.member = member;
	}
};

export default {
  namespaced: true,
  name: 'login_01',
  state,
  getters,
  actions,
  mutations
}
