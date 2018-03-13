/**
 * Created by qinff on 2018/1/10.
 */

import {Get} from "@common";

let state = {
  navCols: []
};

let getters = {
  getNavCols: state => state.navCols
};

let actions = {
  setNavCols: ({commit}) => {
    Get(CONFIG.BASE_URL + 'spc/cms/col/getAllColBySiteId.do?siteId=2&chId=0').then(rep => {
      let data = rep.data.data;
      if (data && data instanceof Array && data.length > 0) {
        commit('setNavCols', data);
      }
    });
  }
};

let mutations = {
  setNavCols: (state, data) => {
    state.navCols = data;
  }
};

export default {
  namespaced: true,
  name: 'cache',
  state,
  getters,
  actions,
  mutations
}
