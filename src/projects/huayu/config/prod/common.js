/*
 * @Author: song 
 * @Date: 2018-02-05 14:00:38 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-04-14 11:39:35
 */

export default {
  name: "common",
  login: {
    work_login_04: {
      toLoginHref:'./login.html',
      toPersonalCenterHref:'./personalcenter.html',
      // toExit:{/* 退出配置 */
      //   type:'function',/* function：调方法退出  href：转跳退出*/
      //   href:'',
      //   func:{
      //     funcName:'YNXH_MEMBER_EXIT',/* 方法名 */
      //     params:['http://cs.ynxhbook.com/shop/index.php?act=ebook&amp;op=ebook_logout'],/* 参数 */
      //   }
      // }
    }
  },
  common: {
    vote_03: {  // 投票组件
      url:  'spc/prodb/activity/vote.do?',
      params: {
        browserId: '', // 浏览器指纹
        docID: '',
      }
    }
  }
};
