/**
 * Created by qinff on 2017/12/27.
 */
let state = {
  // 用户信息
  member: {}
};

let getters = {
  getMember: (state) => state.member
};

let actions = {
  queryUser({commit}, param){
    commit('setMember', {loginName: 'test'});
    param.loadCallBack();
  }
};

let mutations = {
  setMember: (state, member) => state.member = member
};

export default {
  namespaced: true,
  name: 'headerCompose',
  state,
  getters,
  actions,
  mutations
}
