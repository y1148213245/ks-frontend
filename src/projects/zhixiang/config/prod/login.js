/*
 * @Author: yan.chaoming 
 * @Date: 2017-12-25 18:29:13 
 * @Last Modified by: yan.chaoming
 */
export default {
	name: 'login',
	login: {
		work_login_01: {
			loginUrl:  'login.do',
		},
		work_login_02: {
			loginUrl:  "login.do",
			toMainPages: "./index.html",
			toLoginPages: "./login.html"
		}
	},
	findPassword: {
    work_findPassword_01: {
      findPasswordUrl:  "user/findPassword.do?email=",
      setPasswordUrl:  "user/setPassword1.do?email=",
      href: "../pages/login.html"
    },
  },
	register:{
		work_register_02:{
			toLoginPages:'./login.html',
		}
	}
};
