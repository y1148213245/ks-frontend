/**
 * Created by codingnuts on 2017/12/12.
 */

import component from "../Pic_Swiper.vue";


const name = component.name;  // 组件标签名

const title = "轮播组件";  // 组件title

const description = `轮播图`;  // 组件描述信息

const dev = {
	swiper: {
		pic_01: {
			url: '/data/swiper_01_pic_list.json',
			height: "480px",
			interval: 5000
		}
	}
}

const prod = {
	swiper: {
		pic_01: {
			height: "480px",
			interval: 5000,
			url:  'spc/cms/publish/list.do',
			params: {
				conditions: "[{'pub_col_id':'225'}]",
				orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
				pageNo: "1",
				pageSize: "15",
				searchText: null
			}
		}
	}
};

const platform = 'PC';
const pageType = ['index'];
const resourceType = ['book', 'information', 'journal', 'vedio'];

export {name, title, dev, prod, description, platform, pageType, resourceType};