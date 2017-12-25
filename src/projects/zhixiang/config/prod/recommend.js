/**
 * Created by ma.jw on 2017/12/18.
 */

export default {
  name: "recommend",
  list_pic: {
    ui_list_pic_05: {
      url: BASE_URL + "spc/cms/publish/list.do",
      params: {
        conditions: "[{pub_resource_type:'BOOK'},{pub_status:'1'},{pub_col_id:51}]",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
      },
	    pub_resource_type:"'BOOK'",
	    pub_status:"'1'",
	    pub_col_id:51,
      picLinkUrl: "",
      broadcastName: 'queryClassificationList'
    },
    list_pic_04_pic_list: {
      url: BASE_URL + "spc/cms/publish/list.do",
      params: {
        conditions: "[{pub_resource_type:'BOOK'}]",
        orderBy: "pub_sales_num desc",
        pageNo: "1",
        pageSize: "8",
      },
      picLinkUrl: ""
    }
  },
  classification: {
    classification_01: {
      url: BASE_URL + "spc/prodb/tree-leve-one-code.do",
      params: {
        code: "BOOK",
      },
      picLinkUrl: "",
      broadcastName: 'queryClassificationList'
    }
  }


};
