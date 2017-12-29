/**
 * Created by ma.jw on 2017/12/15.
 */
const dev = {
  picListEditor:{
    url:"/data/ui_list_pic_08.json",
    href:"./editorList.html",
    locationHref:"authorDetail.html?pubId="
  }
};

const prod = {
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
    href:"./editorList.html",
    locationHref:"authorDetail.html?pubId="
  }
};