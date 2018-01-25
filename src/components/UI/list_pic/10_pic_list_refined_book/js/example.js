/**
 * Created by ma.jw on 2017/12/29.
 * 精品图书  不带评星的精品图书
 */


import component from "../picListRefinedBook.vue";


const name = component.name;

const title = "精品图书组件";

const description = `精品图书`;

const dev = {
  picListRefinedBook: {
    url: "/data/ui_list_pic_10.json",
    href: "./bookList.html?colId=",
    bookDetail: "./bookdetail.html?pubId=",
    colId: 59
  }
}

const prod = {
  picListRefinedBook: {
    url: BASE_URL + "spc/cms/publish/list.do",
    param: {
      conditions: "[{pub_col_id:'59'},{pub_status:'1'}]",
      groupBy: "pub_resource_id",
      orderBy: "pub_a_order asc pub_lastmodified desc id asc",
      pageNo: "1",
      pageSize: "15",
      searchText: ""
    },
    href: "./bookList.html?colId=",
    bookDetail: "./bookdetail.html?pubId=",
    colId: 59
  }
}

const platform = 'PC';
const pageType = ['index', 'channel'];
const resourceType = ['book'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
