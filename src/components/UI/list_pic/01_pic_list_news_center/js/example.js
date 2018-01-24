/**
 * Created by ma.jw on 2017/12/22.
 * 新闻中心 资讯列表
 */

import component from "../picListNewsCnter.vue";

const name = component.name;  // 组件标签名

const title = "资讯列表组件";  // 组件title

const description = `资讯列表`;  // 组件描述信息

const dev = {
	list_pic: {
		ui_list_pic_01: {
			url: '/data/ui_list_pic_05.json',
		}
	}
};

const prod = {
	list_pic: {
		ui_list_pic_01: {
			url: 'http://172.19.57.153:9092/spc-portal-web/spc/cms/publish/list.do',
			params: {
				conditions: "[{pub_resource_type:'BOOK'},{pub_status:'1'},{pub_col_id:51}]",
				orderBy:"pub_a_order asc pub_lastmodified desc id asc",
				pageNo: "1",
				pageSize: "10",
			},
			pageSizes:[10,20,50,100],
		}
	}
};

export {name, title, description, dev, prod};