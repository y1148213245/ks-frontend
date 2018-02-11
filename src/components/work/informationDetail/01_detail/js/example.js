/*
 *带自动登录的登录组件
 */

import component from "../infoDetail.vue";

const name = component.name;  // 组件标签名

const title = "资讯详情组件";  // 组件title

const description = `资讯详情`;  // 组件描述信息

const dev = {
	informationDetail: {
		work_informationdetail_01: {
		}
	}
};

const prod = {
	informationDetail: {
		work_informationdetail_01: {
      url:'spc/cms/publish/detail.do?pubId=',
		}
	}
};

const platform = 'huayu';
const pageType = ['channel'];
const resourceType = ['information'];

export {name, title, dev, prod, description, platform, pageType, resourceType};

