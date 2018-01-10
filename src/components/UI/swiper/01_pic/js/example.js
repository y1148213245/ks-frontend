/**
 * Created by codingnuts on 2017/12/12.
 */

import component from "../Pic_Swiper.vue";


const name = component.name;  // 组件标签名

const title = "轮播图组件";  // 组件title

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
			url: 'http://172.19.57.153:9092/spc-portal-web/spc/cms/publish/list.do',
			params: {
				conditions: "[{'pub_col_id':'225'}]",
				orderBy: null,
				pageNo: "1",
				pageSize: "15",
				searchText: null
			}
		}
	}
};

export {name, title, dev, prod, description};