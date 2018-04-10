/**
 * Created by ma.jw on 2017/12/27.
 * 热门书籍
 */


import component from "../popularBook.vue";


const name = component.name;

const title = "热门书籍组件";

const description = `展示热门书籍`;

const dev = {
  list_pic: {
    popularBook: {
      url: "/data/ui_list_pic_07.json",
      number: 15,
      href: "./bookdetail.html?pubId="
    }
  }
}

const prod = {
  list_pic: {
    popularBook: {
      url:  "spc/cms/publish/list.do",
      param: {
        conditions: "[{pub_col_id:'57'},{pub_status:'1'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: "",
      },
      number: 15,
      href: "./bookdetail.html?pubId="
    }
  }
}

const platform = 'PC';
const pageType = ['index', 'channel'];
const resourceType = ['book'];

export {
  name,
  title,
  dev,
  prod,
  description,
  platform,
  pageType,
  resourceType
};
