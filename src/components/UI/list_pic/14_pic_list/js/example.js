/*
 * @Author: yan.chaoming 
 * @Date: 2018-01-08 16:21:31 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-01-08 17:13:45
 */


const dev = {
	list_pic: {
		ui_list_pic_14: {
			url: '/data/ui_list_pic_11.json',
			toDetailHref: '',
			pageSizes:[10,20,50,100],
		}
	}
}

const prod = {
	list_pic: {
		ui_list_pic_14: {
		url: BASE_URL+'spc/cms/publish/list.do',
		param: {
			conditions: "[{pub_col_id:'116'},{pub_status:'1'}]",
			groupBy: 'pub_resource_id',
			orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
			pageNo: '1',
			pageSize: '10',
			searchText: ''
		},
		toDetailHref: '',
		pageSizes:[10,20,50,100],
	}}
}