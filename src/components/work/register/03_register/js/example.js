/*
 *带自动登录的登录组件
 */

import component from "../register.vue";

const name = component.name;  // 组件标签名

const title = "注册组件";  // 组件title

const description = `通过绑定邮箱或手机号来注册`;  // 组件描述信息

const dev = {
	register: {
		work_register_03: {
		}
	}
};

const prod = {
	register: {
		work_register_03: {
			sendNum:{
				url:'user/sendMobileMessage.do'   /* /user/sendToMobile.do 文联用  user/sendMobileMessage.do 华育用 */
			},
			showItem:['bindMobile']/* 控制功能显示,'bindEmail'绑定邮箱 'bindMobile'绑定手机 */
		}
	}
};

const platform = 'PC';
const pageType = ['register'];
const resourceType = ['others'];

export {name, title, dev, prod, description, platform, pageType, resourceType};

/* const style = '' */