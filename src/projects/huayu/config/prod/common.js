/*
 * @Author: song 
 * @Date: 2018-02-05 14:00:38 
 * @Last Modified by: song
 * @Last Modified time: 2018-03-12 14:16:55
 */

export default {
  name: "common",
  login: {
    work_login_04: {
      toLoginHref:'./login.html',
      toPersonalCenterHref:'./personalcenter.html',
    }
  },
  common: {
    vote_03: {  // 投票组件
      url: CONFIG.BASE_URL + 'spc/prodb/activity/vote.do?',
      params: {
        browserId: '', // 浏览器指纹
        docID: '',
      }
    }
  }
};
