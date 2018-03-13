/*
 * @Author: yan.chaoming 
 * @Date: 2017-12-25 18:29:13 
 * @Last Modified by: yan.chaoming
 */
export default {
	name: 'login',
	login: {
		work_login_01: {
			loginUrl: CONFIG.BASE_URL + 'login.do',
		},
		work_login_02: {
			loginUrl: CONFIG.BASE_URL + "login.do",
			toMainPages: "./index.html",
			toLoginPages: "./login.html",
			findPassword: {
				findPasswordUrl: CONFIG.BASE_URL + "user/findPassword.do?email=",
				setPasswordUrl: CONFIG.BASE_URL + "user/setPassword1.do?email=",
				href: "../pages/login.html"
			},
		}
	},
	register:{
		work_register_02:{
			toLoginPages:'./login.html',
		}
	}
};
