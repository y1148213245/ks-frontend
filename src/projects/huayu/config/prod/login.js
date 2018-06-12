/*
 * @Author: yan.chaoming 
 * @Date: 2018-02-08 11:04:46 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-05-25 09:37:21
 */

export default {
  name: "login",
  login: {
    work_login_03: {
      disBacks:['register.html','register_success.html','forgetPassword.html'],
      indexPath:'./index.html',
      thirdParty: {
        topic:'社交账号登陆',
        url:'auth/login.do?type=',
        target:"_self",
        showItem: [
          {
            title: 'QQ',/* 鼠标悬浮提示 */
            type: 'QQ'
          }],
        customShowItem: [
          {
            title: '登陆',/* 鼠标悬浮提示 */
            href: 'http://',/* 链接 */
            text: '文字',/* 文字 */
            type:'jj'
          }
        ]
      }
		}
  }
};