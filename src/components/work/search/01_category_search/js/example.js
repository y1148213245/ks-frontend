/**
 * Created by codingnuts on 2017/12/9.
 *
 */

import component from "../Category_Search.vue";


const name = component.name;  // 组件标签名

const title = "搜索组件";  // 组件title

const description = `按类别搜索，比如搜资讯或者图书`;  // 组件描述信息

const dev = {
  search:{
		Category_Search: {
			searchHrefPage: "./searchResult.html"
		}
	}
};

const prod = {
  search:{
		Category_Search: {
			searchHrefPage: "./searchResult.html"
		}
	}
};

export default {
	search: {
		Category_Search: {
			searchHrefPage: "./searchResult.html"
		}
	}
};


const platform = 'PC';
const pageType = ['index'];
const resourceType = ['book', 'information'];

export {name, title, dev, prod, description, platform, pageType, resourceType};