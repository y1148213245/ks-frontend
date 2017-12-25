/**
 * Created by song on 2017/12/14.
 * 书目下载
 */

export default {
	name: "bestsale",
	list_pic: {
		horizontal_list_03: {
			queryItemList: {
				url: BASE_URL + '/spc/cms/publish/list.do',
				param: {
					conditions: '[{pub_resource_type:"BOOK"},{pub_col_id:"49"},{pub_status:"1"},{BOOK_BOOK_CASCADID:"#{cascadeId}",op:"lk"},{pub_site_id:"' + SITE_CONFIG.siteId + '"}]',
					orderBy: "pub_a_order asc pub_lastmodified desc id asc",
					pageNo: "1",
					pageSize: "15",
					searchText: null
				}
			},
			toBookDetailUrl:"./bookdetail.html",
			moreType:{
				url: "./recommend.html",
				pubColId: 48,
				type: "selling"
			}
		}
	},
	components: {
		categoryList: {
			url: BASE_URL + "/spc/prodb/tree-leve-one-code.do?code=BOOK"
		}
	}
};
