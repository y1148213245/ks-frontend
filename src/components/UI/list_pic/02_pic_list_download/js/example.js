/**
 * created by song 2017/12/14
 * 数目下载组件的配置文件 放请求的url、params...
 */
import component from "../downloadList.vue";


const name = component.name;

const title = "书目下载组件";

const description = `书目下载`;

const dev = {
	list_pic: {
		pic_list_download_02: {
			url: '/data/list_pic_02_picListDownload_list.json',
			picLinkUrl: ''
		}
	}
};

const prod = {
	list_pic: {
		pic_list_download_02: {
			url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
			params: {
				conditions: "[{information_a_type:0},{pub_col_id:'56'}]",   // 数目下载栏目id=56
				orderBy: 'pub_a_order asc pub_lastmodified desc',
				pageNo: "1",
				pageSize: "15",
				searchText: null
			},
			picLinkUrl: ''
		}
	}
};

export {name, title, dev, prod, description};




