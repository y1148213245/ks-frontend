/**
 * Created by ma.jw on 2017/12/15.
 */
import component from "../picListEditor.vue";


const name = component.name;

const title = "编辑组件";

const description = `编辑`;

const dev = {
  picListEditor:{
    url:"/data/ui_list_pic_08.json",
    href:"./editorList.html",
    locationHref:"authordetail.html?pubId="
  }
};

const prod = {
  picListEditor:{
    url:CONFIG.BASE_URL+"spc/cms/publish/list.do",
    param:{
      conditions: "[{pub_col_id:'117'}]",
      groupBy: "pub_resource_id",
      orderBy: "pub_a_order asc pub_lastmodified desc id asc",
      pageNo: "1",
      pageSize: "2",
      searchText: ""
    },
    href:"./editorList.html",
    locationHref:"authordetail.html?pubId="
  }
};

export {name, title, dev, prod, description};