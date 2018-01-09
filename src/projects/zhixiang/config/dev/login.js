/*
 * @Author: yan.chaoming 
 * @Date: 2017-12-25 18:29:08 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2017-12-26 16:42:56
 */
export default {
  name: "login",
  login: {
    work_login_01: {
      loginUrl: "login.do",
    },
    work_login_02: {
      loginUrl: "login.do",
	    toMainPages:"./index.html",
	    toLoginPages:"./login.html",
	    findPassword:{
		    findPasswordUrl:BASE_URL + "user/findPassword.do?email=",
		    setPasswordUrl:BASE_URL + "user/setPassword1.do?email=",
		    href:"../pages/login.html"
	    },
    }
  }
};
