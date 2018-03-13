/**
 * Created by ma.jw on 2017/12/15.
 * 电子书 推荐栏目
 */

import component from "../picListPage.vue";


const name = component.name;

const title = "图书列表组件";

const description = `图书列表`;

const dev = {
	list_pic: {
		ui_list_pic_05: {
			url: '/data/ui_list_pic_05.json',
		}
	}
};

const prod = {
	list_pic: {
		ui_list_pic_05: {
			url: CONFIG.BASE_URL + 'cms/publish/list.do',
			params: {
				conditions: "[{pub_resource_type:'BOOK'},{pub_status:'1'},{pub_col_id:51}]",
				orderBy:"pub_a_order asc pub_lastmodified desc id asc",
				pageNo: "1",
				pageSize: "15",
			},
		}
	}
};

const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];

export {name, title, dev, prod, description, platform, pageType, resourceType};