/*
 * @Author: yan.chaoming 
 * @Date: 2018-01-02 13:56:35 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-01-02 14:39:27
 */

const  dev = {
	list_pic_11:{
		url: '/data/ui_list_pic_10.json',
		href: './bookList.html?colId=',
		bookDetail: './bookDetail.html?pubId=',
		colId: 59
	}
}

const prod = {
	list_pic_11:{
		url:'http://172.19.57.153/portal/api/spc/cms/publish/list.do',
		param:{
			conditions: "[{pub_col_id:'59'},{pub_status:'1'}]",
			groupBy: 'pub_resource_id',
			orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
			pageNo: '1',
			pageSize: '15',
			searchText: ''
		},
		href:'./bookList.html?colId=',
		bookDetail:'./bookDetail.html?pubId=',
		colId:59
	}
}