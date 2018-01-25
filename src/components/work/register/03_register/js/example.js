/*
 *带自动登录的登录组件
 */

import component from "../register.vue";

const name = component.name;  // 组件标签名

const title = "注册组件";  // 组件title

const description = `通过绑定邮箱或手机号来注册`;  // 组件描述信息

const dev = {
	name:'login',
	register: {
		work_register_03: {
		}
	}
};

const prod = {
	name:'login',
	login: {
		work_register_03: {
		}
	}
};

const platform = 'PC';
const pageType = ['register'];
const resourceType = ['others'];

export {name, title, dev, prod, description, platform, pageType, resourceType};

const style = ''