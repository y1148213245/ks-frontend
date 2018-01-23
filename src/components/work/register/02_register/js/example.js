/*
 *带自动登录的登录组件
 */

import component from "../register.vue";

const name = component.name;  // 组件标签名

const title = "注册组件";  // 组件title

const description = `通过邮箱注册`;  // 组件描述信息

const dev = {
	register: {
		work_register_02: {
		}
	}
};

const prod = {
	register: {
		work_register_02: {
			toLoginPages:''
		}

	}
};

export {name, title, dev, prod, description,style};

const style = ''