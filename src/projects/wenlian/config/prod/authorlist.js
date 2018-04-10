/*
 * @Author: yan.chaoming
 * @Date: 2018-01-08 16:26:20
 * @Last Modified by: song
 * @Last Modified time: 2018-03-12 14:17:09
 */

export default {
  name: 'authorlist',
	list_pic: {
		ui_list_pic_14: {
			url:  'spc/cms/publish/list.do',
			param: {
				conditions: "[{pub_col_id:'116'},{pub_status:'1'}]",
				groupBy: 'pub_resource_id',
				orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
				pageNo: '1',
				pageSize: '10',
				searchText: ''
			},
			toDetailHref:'./authordetail.html?pubId=',
			pageSizes:[10,20,50,100],
		}
	}
}
