/**
 * 电子书城 图书轮播
 */


import component from "../picInfoList.vue";


const name = component.name;

const title = "图书轮播组件";

const description = `图书轮播`;

const dev = {
  list_pic: {
    pic_info_list_12: {
      url: '/data/ui_list_pic_12.json',
      picLinkUrl: ''
    }
  }
}

const prod = {
  list_pic: {
    pic_info_list_12: {
      url:  "book/getBookDetail.do",
      READ_URL: '',
      introductionUrl:  "spc/prodb/publicize.do",
      params: {
        pubId: "",
        loginName: "",
        siteId: "2"
      },
      introductionParams: {
        doclibCode: "",
        docID: ""
      },
      moreUrl: "../pages/bookList.html?colId=264", // 查看更多
    }
  }
}

const platform = 'PC';
const pageType = ['channel'];
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
