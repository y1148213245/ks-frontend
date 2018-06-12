/**
 * Created by song on 2019/04/18.
 * 免费专区组件 属于栏目图书列表组件
 */


import component from "../columnBookList.vue";


const name = component.name;

const title = "栏目图书列表组件";

const description = `栏目图书列表组件，即按栏目取的图书列表。需要添加modulename属性。
showItem：控制显示哪些项 bookName(书名) starNum(评分) bookAuthor(作者) pressName(出版社) pubDate(出版日期) price(价格) share(分享) buy(购买) review(查看)
`;

const dev = {
  list_pic: {
    list_pic_27: {
      "modulename": {
        url: "../data/ui_pic_list_27.json",
        comTitle: {
          isShow: true,
          name: "免费专区"
        },
        showItem: ['bookName', 'starNum', 'bookAuthor', 'pressName', 'pubDate', 'price', 'share', 'buy', 'review'], // 控制显示哪些项 bookName(书名) starNum(评分) bookAuthor(作者) pressName(出版社) pubDate(出版日期) price(价格) share(分享) buy(购买) review(查看)
        display: { // template 固定显示内容
          bookAuthor: '作者：',
          pressName: '出版社：',
          pubDate: '出版时间：',
          share: "分享",
          buy: "购买",
          review: "查看",
          more: "MORE+"
        },
        keys: { // 字段兼容
          bookName: "pub_resource_name",
          starNum: "pub_star_num",
          memberPrice: "prod_member_price",
          ebPrice: "BOOK_EB_PRICE",
          bookAuthor: "BOOK_SYS_AUTHORS",
          pubId: "id",
          contentType: "pub_content_type",
          colId: "pub_col_id",
          colName: "pub_col_name",
          bookPic: "pub_picBig",
          pressName: "BOOK_PRESS_NAME",
          pubDate: "BOOK_PUBDATE"
        },
        detailHref: "./bookdetail.html", // 详情
        moreHref: "./bookList.html", // 更多
        maxNum: 4,
      }
    }
  }
}

const prod = {
  list_pic: {
    list_pic_27: {
      "modulename": {
        url: "spc/cms/publish/list.do",
        params: {
          conditions: "[{pub_col_id:'130'},{pub_status:'1'}]",
          groupBy: "pub_resource_id",
          orderBy: "pub_a_order asc pub_lastmodified desc id asc",
          pageNo: "1",
          pageSize: "15",
          searchText: "",
        },
        comTitle: {
          isShow: true,
          name: "免费专区"
        },
        showItem: ['bookName', 'starNum', 'bookAuthor', 'pressName', 'pubDate', 'price', 'share', 'buy', 'review'], // 控制显示哪些项 bookName(书名) starNum(评分) bookAuthor(作者) pressName(出版社) pubDate(出版日期) price(价格) share(分享) buy(购买) review(查看)
        display: { // template 固定显示内容
          bookAuthor: '作者：',
          pressName: '出版社：',
          pubDate: '出版时间：',
          share: "分享",
          buy: "购买",
          review: "查看",
          more: "MORE+"
        },
        keys: { // 字段兼容
          bookName: "pub_resource_name",
          starNum: "pub_star_num",
          memberPrice: "prod_member_price",
          ebPrice: "BOOK_EB_PRICE",
          bookAuthor: "BOOK_SYS_AUTHORS",
          pubId: "id",
          contentType: "pub_content_type",
          colId: "pub_col_id",
          colName: "pub_col_name",
          bookPic: "pub_picBig",
          pressName: "BOOK_PRESS_NAME",
          pubDate: "BOOK_PUBDATE"
        },
        detailHref: "./bookdetail.html", // 详情
        moreHref: "./bookList.html", // 更多
        maxNum: 4,
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
