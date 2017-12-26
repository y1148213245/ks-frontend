/**
 * Created by ma.jw on 2017/12/18.
 */
export default {
	name: "recommend",
	list_pic: {
		ui_list_pic_05: {
			url: '/data/ui_list_pic_05.json',
			params: {
				conditions: "[{pub_resource_type:'BOOK'},{pub_status:'1'},{pub_col_id:51}]",
				orderBy:"pub_a_order asc pub_lastmodified desc id asc",
				pageNo: "1",
				pageSize: "15",
			},
			picLinkUrl: '',
			broadcastName: 'queryClassificationList'
		},
    list_pic_04_pic_list: {
      url: './data/list_pic_04_pic_list.json',
      picLinkUrl: ''
    }
	},
  classification: {
    classification_01: {
      url: '/data/classification_01_classification_list.json',
			picLinkUrl: '',
			broadcastName: 'queryClassificationList'
    }
  }

};
