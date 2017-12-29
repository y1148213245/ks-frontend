/*
 * @Author: yan.chaoming 
 * @Date: 2017-12-26 09:23:33 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2017-12-28 18:01:19
 */

import * as type from "../../common/constConfig.js";
import { Post } from "@common";

let state = {
  member: {} //用户信息
};

let getters = {
  [type.GET_MEMBER]: state => state.member
};

let actions = {
  [type.LOGIN]({ commit }, payload) {
    if (payload && payload["url"]) {
      Post(payload["url"], payload["member"]).then(function(rep) {
        if (!rep.data) {
          payload["loginErr"]();
        } else if (rep.data.checkStatus == 0) {
          payload["loginFreeze"]();
        } else {
          if (payload["cb"]) payload["cb"]();
        }
      });
    }
  },
  logout() {
    api.logout().then(function(rep) {
      if (rep.status == 200) {
        window.location.href = "../index/index.html";
      }
    });
  },
  memberInit({ commit }) {
    keepSession();
    window.setInterval(keepSession(), 600000);

    function keepSession() {
      api.keepSession().then(function(rep) {
        if (rep.data && rep.data.status == "ok" && rep.data["member"]) {
          commit(type.SET_MEMBER, rep.data["member"]);
        } else {
          commit(type.SET_MEMBER, {});
        }
      });
    }
  }
};

let mutations = {
  [type.SET_MEMBER]: (state, member) => {
    state.member = member;
  }
};

export default {
  namespaced: true,
  name: "login_01",
  state,
  getters,
  actions,
  mutations
};
