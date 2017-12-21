/**
 * Created by ma.jw on 2017/12/15.
 */
const dev = {
	list_pic: {
		ui_list_pic_05: {
			url: '/data/ui_list_pic_05.json',
		}
	}
};

const prod = {
	list_pic: {
		ui_list_pic_05: {
			url: 'http://172.19.57.153:9092/spc-portal-web/spc/cms/publish/list.do',
			params: {
				conditions: "[{pub_resource_type:'BOOK'},{pub_status:'1'},{pub_col_id:51}]",
				orderBy:"pub_a_order asc pub_lastmodified desc id asc",
				pageNo: "1",
				pageSize: "15",
			},
		}
	}
};