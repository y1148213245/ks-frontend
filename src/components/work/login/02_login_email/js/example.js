/*
 * @Author: yan.chaoming 
 * @Date: 2017-12-25 18:27:14 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2017-12-26 13:19:30
 */

import component from "../login.vue";

const name = component.name;  // 组件标签名

const title = "登录组件";  // 组件title

const description = `邮箱登录，不带自动登录`;  // 组件描述信息

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