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
      href: "./bookdetail.html?pubId=",
      staticText: {
        author: "作者：",
        press: " 出版社：",
        pubTime: " 出版时间：",
        share: "分享",
        buy: "购买",
        see: "查看",
        yuan: "￥",
        noCover: "暂无封面",
        noBookName: "暂无书名",
        noAuthor: "暂无作者",
        noDate: "暂无日期"
      }
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
      href: "./bookdetail.html?pubId=",
      staticText: {
        author: "作者：",
        press: " 出版社：",
        pubTime: " 出版时间：",
        share: "分享",
        buy: "购买",
        see: "查看",
        yuan: "￥",
        noCover: "暂无封面",
        noBookName: "暂无书名",
        noAuthor: "暂无作者",
        noDate: "暂无日期"
      }
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
