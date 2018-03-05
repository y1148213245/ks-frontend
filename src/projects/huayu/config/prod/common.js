/*
 * @Author: song 
 * @Date: 2018-02-05 14:00:38 
 * @Last Modified by: song
 * @Last Modified time: 2018-02-28 18:03:53
 */

export default {
  name: "common",
  login: {
    work_login_04: {
      toLoginHref:'./login.html',
      toPersonalCenterHref:'',
    }
  },
  common: {
    vote_03: {  // 投票组件
      url: BASE_URL + 'spc/prodb/activity/vote.do?',
      params: {
        docID: '',
      }
    }
  }
};
