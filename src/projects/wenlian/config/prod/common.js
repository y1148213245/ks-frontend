/**
 * Created by codingnuts on 2017/12/21.
 */

export default {
	name: "common",
	search: {
		Category_Search: {
			searchHrefPage: "./searchResult.html"
		}
	},
	list_pic:{
		picListBook: {
			hotsalebank: { 
				title: '热销排行',
				url:"http://172.19.57.153/portal/api/spc/cms/publish/list.do",
				param:{
					conditions: "[{pub_col_id:'131'},{pub_status:'1'}]",
					groupBy: "pub_resource_id",
					orderBy: "pub_read_num desc",
					pageNo: "1",
					pageSize: "4",
					searchText: ""
				},
				href:"./bookdetail.html?pubId="
			},
			historyrecord: {
				title: '浏览历史',
				url: BASE_URL + "browserHistory/getHistoryList.do",
        params: {
					num: 3,
					username: "",
					siteId: SITE_CONFIG.siteId
        },
				href:"./bookdetail.html?pubId="
			}
		},
		picListEditor:{
			url:"http://172.19.57.153/portal/api/spc/cms/publish/list.do",
			param:{
				conditions: "[{pub_col_id:'117'}]",
				groupBy: "pub_resource_id",
				orderBy: "pub_a_order asc pub_lastmodified desc id asc",
				pageNo: "1",
				pageSize: "2",
				searchText: ""
			},
			href:"./editorlist.html",
			locationHref:"./authordetail.html?pubId="
		},
		popularBook:{
			url:"http://172.19.57.153/portal/api/spc/cms/publish/list.do",
			param:{
				conditions: "[{pub_col_id:'57'},{pub_status:'1'}]",
				groupBy: "pub_resource_id",
				orderBy: "pub_a_order asc pub_lastmodified desc id asc",
				pageNo: "1",
				pageSize: "4",
				searchText: ""
			},
			number:4,
			href:"./bookdetail.html?pubId="
		},
		refinedBook:{
			url:"http://172.19.57.153/portal/api/spc/cms/publish/list.do",
			param:{
				conditions: "[{pub_col_id:'59'},{pub_status:'1'}]",
				groupBy: "pub_resource_id",
				orderBy: "pub_a_order asc pub_lastmodified desc id asc",
				pageNo: "1",
				pageSize: "15",
				searchText: ""
			},
			href:"./bookList.html?colId=",
			colId: 59, // 精品图书栏目id
		}
	}
}