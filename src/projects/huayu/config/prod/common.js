/*
 * @Author: song 
 * @Date: 2018-02-05 14:00:38 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-03-09 09:50:19
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
      url: BASE_URL + 'spc/prodb/activity/vote.do?',
      params: {
        browserId: '', // 浏览器指纹
        docID: '',
      }
    }
  }
};
