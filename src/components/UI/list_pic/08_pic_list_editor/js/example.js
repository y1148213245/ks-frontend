/**
 * Created by ma.jw on 2017/12/15.
 */
import component from "../picListEditor.vue";


const name = component.name;

const title = "编辑组件";

const description = `展示编辑简要信息`;

const dev = {
  picListEditor: {
    url: "/data/ui_list_pic_08.json",
    href: "./editorList.html",
    locationHref: "authordetail.html?pubId="
  }
};

const prod = {
  picListEditor: {
    url: BASE_URL + "spc/cms/publish/list.do",
    param: {
      conditions: "[{pub_col_id:'117'}]",
      groupBy: "pub_resource_id",
      orderBy: "pub_a_order asc pub_lastmodified desc id asc",
      pageNo: "1",
      pageSize: "2",
      searchText: ""
    },
    href: "./editorList.html",
    locationHref: "authordetail.html?pubId="
  }
};

const platform = 'PC';
const pageType = ['index', 'channel'];
const resourceType = ['book'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
