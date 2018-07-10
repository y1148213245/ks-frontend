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
      url: "../data/ui_list_pic_24.json",
      href: "../pages/bookdetail.html?pubId=",
      pubId: 59,
      staticText: {
        excellentBooks: "精品图书",
        more: "MORE+"
      }
    }
  }
};

const prod = {
  list_pic: {
    list_pic_24: {
      url:  "spc/cms/publish/list.do",
      param: {
        conditions: "[{pub_col_id:'59'},{pub_status:'1'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "15",
        searchText: ""
      },
      href: "./bookList.html?colId=",
      colId: 59, // 精品图书栏目id,
      staticText: {
        excellentBooks: "精品图书",
        more: "MORE+"
      }
    },
  }
};

// 该父组件所包含的子组件，第一个是该父组件本身的组件name
const childComponents = ["ui_pic_list_24_excellent", "ui_list_pic_10_refined_book", "ui_list_pic_09_book_show"];

const platform = 'PC';
const pageType = ['index'];
const resourceType = ['book'];

export {
  name,
  title,
  dev,
  prod,
  description,
  childComponents,
  platform,
  pageType,
  resourceType
};
