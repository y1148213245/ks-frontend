/**
 * created by song 2018/3/31
 * 图书列表组件    购买该书的用户还买  / 该作者其他图书
 */

import component from "../piclistContent.vue";

const name = component.name;

const title = "图书列表组件";

const description = `图书列表，购买该书的用户还买列表和该作者其他图书列表`;

const dev = {
  list_pic: {
    list_pic_23: {
      userbook: {
        title: '购买该书的用户还买',
        url: "../data/ui_piclist_19_userbook.json",
        detailHref: "../pages/bookdetail.html?pubId=", // 去详情页
        maxNum: 4, // 控制显示多少个
        staticText: {
          author: "作者:",
          comments: "条评论",
          noData: "暂无数据",
          noImg: "暂无图片",
          noIntroduction: "暂无简介",
          noBookName: "暂无书名",
          noAuthor: "暂无作者"
        }
      },
      otherbook: {
        title: '该作者其他图书',
        url: '../data/ui_piclist_19_otherbook.json',
        detailHref: "../pages/bookdetail.html?pubId=", // 去详情页
        maxNum: 4, // 控制显示多少个
        staticText: {
          author: "作者:",
          comments: "条评论",
          noData: "暂无数据",
          noImg: "暂无图片",
          noIntroduction: "暂无简介",
          noBookName: "暂无书名",
          noAuthor: "暂无作者"
        }
      },

    }
  }
};

const prod = {
  list_pic: {
    list_pic_23: {
      userbook: {
        title: '购买该书的用户还买',
        url:  "cart/getOtherBookList.do",
        params: {
          pubId: "",
          loginName: "",
        },
        detailHref: "../pages/bookdetail.html?pubId=",
        maxNum: 4, // 控制显示多少个
        staticText: {
          author: "作者:",
          comments: "条评论",
          noData: "暂无数据",
          noImg: "暂无图片",
          noIntroduction: "暂无简介",
          noBookName: "暂无书名",
          noAuthor: "暂无作者"
        }
      },
      otherbook: {
        title: '该作者其他图书',
        url:  "spc/cms/publish/list.do",
        params: {
          conditions: [
            {pub_resource_type:'BOOK'},
            {pub_site_id: CONFIG.SITE_CONFIG.siteId},
          ],
          groupBy: "pub_resource_id",
          orderBy: "pub_a_order1 asc pub_a_order2 desc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "15",
          searchText: ""
        },
        detailHref: "../pages/bookdetail.html?pubId=",
        maxNum: 4, // 控制显示多少个
        staticText: {
          author: "作者:",
          comments: "条评论",
          noData: "暂无数据",
          noImg: "暂无图片",
          noIntroduction: "暂无简介",
          noBookName: "暂无书名",
          noAuthor: "暂无作者"
        }
      },

    }
  }
};

const platform = 'PC';
const pageType = ['index'];
const resourceType = ['book'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
