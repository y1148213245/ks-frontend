/*
 * @Author: yan.chaoming 
 * @Date: 2017-12-26 09:23:33 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2017-12-27 10:51:05
 */

import * as type from "../../common/constConfig.js";
import { Post } from "@common";
import PROJECT_CONFIG from "projectConfig";

function getConfig() {
  return PROJECT_CONFIG &&
    PROJECT_CONFIG["login"] &&
    PROJECT_CONFIG["login"].login.work_login_01
    ? PROJECT_CONFIG["login"].login.work_login_01
    : false;
}

let state = {
  member: {} //用户信息
};

let getters = {
  [type.GET_MEMBER]: state => state.member
};

let actions = {
  [type.LOGIN]({ commit }, payload) {
    let loginConfig = getConfig();
    if (loginConfig && loginConfig.loginUrl) {
      Post(loginConfig.loginUrl, payload["member"]).then(function(rep) {
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
