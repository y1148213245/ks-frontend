/*
 * @Author: yan.chaoming 
 * @Date: 2017-12-25 18:29:13 
 * @Last Modified by: song
 * @Last Modified time: 2018-05-30 13:56:20
 */
export default {
  name: 'login',
  login: {
    work_login_03: {
      disBacks: ['register.html', 'register_success.html', 'forgetPassword.html'],
      indexPath: './index.html',
      thirdParty: {
        topic:'',
        url:'auth/login.do?type=',
        target:"_self",
        showItem: [
          {
            title: 'QQ',/* 鼠标悬浮提示 */
            type: 'QQ',/* 参数 */
            tag:'QQ',/* 样式名后缀 */
          }],
        customShowItem: [
          // {
          //   title: '登陆',/* 鼠标悬浮提示 */
          //   href: 'http://',/* 链接 */
          //   text: '文字',/* 文字 */
          //   tag:'jj'
          // }
        ]
      }

    }
  }
};
