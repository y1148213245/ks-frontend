/*
 *带自动登录的登录组件
 */

import component from "../login.vue";

const name = component.name;  // 组件标签名

const title = "登录组件";  // 组件title

const description = `带自动登录的登录组件`;  // 组件描述信息

const dev = {
	name:'login',
	login: {
		work_login_01: {
			loginUrl: "login.do"
		}
	}
};

const prod = {
	name:'login',
	login: {
		work_login_01: {
			loginUrl: "login.do"
		}
	}
};

const platform = 'PC';
const pageType = ['login'];
const resourceType = ['others'];

export {name, title, dev, prod, description, platform, pageType, resourceType};

/* const style = `
.login_03_content {
  box-shadow: 0 0 10px #e5e5e5;
  background: #fff;
}
.login_03_titlebox {
  border-bottom-style: solid;
  border-bottom-color: #cccccc;
  font-size: 18px;
}
.login_03_userinput,
.login_03_password {
  border-style: solid;
  border-color: #e0e0e0;
  color: #939393;
  background-color: transparent;
  outline: none;
  background: url(../img/bg_10.png) no-repeat;
}
.login_03_userinput{
  background-position: -574px -93px;
}
.login_03_password{
  background-position: -574px -130px;
}
input:focus.login_03_userinput,
input:focus.login_03_password {
  border-style: solid;
  border-color: #bf3636;
  outline-color: #bf3636;
  color: #bf3636;
}
.login_03_box_01_forgetpassword {
  color: #c50000;
  text-decoration-line: none;
}
.login_03_box_02_button {
  border-radius: 5px;
  background: #c50000;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}
input:focus.login_03_box_02_button{
  outline: none;
}
.login_03_box_03 {
  color: #a6a6a6;
  font-size: 14px;
}
.login_03_box_03_register {
  color: #c50000;
  text-decoration-line: none;
}
` */