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

export {name, title, dev, prod, description};