/**
 * created by song 2018/3/31
 * 精品图书组件 包含上下两部分 分别是不同的组件
 */

import component from "../excellentbook.vue";

const name = component.name;

const title = "精品图书组件";

const description = `精品图书组件，包含上下两部分，分别是两个不同的产品组件。`;

const dev = {
  list_pic: {
    list_pic_24: {
      url: "../data/ui_list_pic_10.json",
      href: "../pages/bookdetail.html?pubId=",
      pubId: 59
    },
    picListBookShow: {
      url: "../data/ui_pic_list_09.json",
      href: "./read.jsp?bookId=",
      bookDetail: "../pages/bookdetail.html?pubId=",
      beginPicIndex: 2,
      finishPicIndex: 8,
      colId: 59
    },
    picListRefinedBook: {
      url: "/data/ui_list_pic_10.json",
      href: "../pages/bookList.html?colId=",
      bookDetail: "../pages/bookdetail.html?pubId=",
      colId: 59
    },
  }
};

const prod = {
  list_pic: {
    list_pic_24: {
      url: CONFIG.BASE_URL + "spc/cms/publish/list.do",
      param: {
        conditions: "[{pub_col_id:'59'},{pub_status:'1'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: ""
      },
      href: "./bookList.html?colId=",
      colId: 59, // 精品图书栏目id
    },
    picListBookShow: {
      url: CONFIG.BASE_URL + "spc/cms/publish/list.do",
      param: {
        conditions: "[{pub_col_id:'59'},{pub_status:'1'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: ""
      },
      href: CONFIG.READ_URL,
      bookDetail: "../pages/bookdetail.html?pubId=",
      beginPicIndex: 2,
      finishPicIndex: 8,
      colId: 59
    },
    picListRefinedBook: {
      url: CONFIG.BASE_URL + "spc/cms/publish/list.do",
      param: {
        conditions: "[{pub_col_id:'59'},{pub_status:'1'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: ""
      },
      baseURL: CONFIG.READ_URL,
      href: "../pages/bookList.html?colId=",
      bookDetail: "../pages/bookdetail.html?pubId=",
      colId: 59
    },
  }
};

const platform = 'PC';
const pageType = ['index'];
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
