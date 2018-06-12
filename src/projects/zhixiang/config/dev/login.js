/*
 * @Author: yan.chaoming 
 * @Date: 2017-12-25 18:29:08 
 * @Last Modified by: song
 * @Last Modified time: 2018-03-12 14:17:21
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
		    findPasswordUrl: "user/findPassword.do?email=",
		    setPasswordUrl: "user/setPassword1.do?email=",
		    href:"../pages/login.html"
	    },
    }
  }
};
