/**
 * Created by song on 2018/1/18.
 * 购买该书的用户还买  / 该作者其他图书
 */

import component from "../piclistBookContent.vue";


const name = component.name;

const title = "图书列表组件";

const description = `图书列表，购买该书的用户还买列表和该作者其他图书列表`;

const dev = {
  picListBook: {
    userbook: {
      title: '购买该书的用户还买',
      url: "/data/ui_piclist_19_userbook.json",
      detailHref: "./bookdetail.html?pubId="
    },
    otherbook: {
      title: '该作者其他图书',
      url: '/data/ui_piclist_19_otherbook.json',
      detailHref: "./bookdetail.html?pubId="
    }
  },
};

const prod = {
  picListBook: {
    userbook: {
      title: '购买该书的用户还买',
      url:  "cart/getOtherBookList.do",
      params: {
        pubId: "",
        loginName: "",
      },
      detailHref: "./bookdetail.html?pubId=",
      num: 4,
    },
    otherbook: {
      title: '该作者其他图书',
      url:  "spc/cms/publish/list.do",
      params: {
        conditions: "[{pub_resource_type:'BOOK'},{pub_site_id:'2'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "4",
        searchText: ""
      },
      detailHref: "./bookdetail.html?pubId="
    }
  }
};

export { name, title, dev, prod, description };
