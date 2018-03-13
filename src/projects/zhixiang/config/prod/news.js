/**
 * Created by codingnuts on 2017/11/1.
 */

export default {
	name: "news",
	list_pic: {
		ui_list_pic_01_news_center: {
			url: CONFIG.BASE_URL + "spc/cms/publish/list.do",
			params: {
				conditions: "[{pub_col_id:46},{information_a_type:0}]",
				orderBy: "pub_a_order asc pub_lastmodified desc id asc",
				pageNo: "1",
				pageSize: "10",
			},
			pageSizes:[10,20,50,100],
			pubColId:'46',
			toDetail:'./newsdetail.html?pubId='
		},
	}
};