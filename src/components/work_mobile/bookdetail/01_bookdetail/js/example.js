import component from "../bookdetailcontent";

const name = component.name;  // 组件标签名

const title = "图书详情组件";  // 组件title

const description = `图书详情`;  // 组件描述信息

const dev = {
  bookdetail: {
    bookdetail_01: {
      url: '../data/bookdetail_01_bookdetail.json',
      params: {
        pubId: "",
        loginName: "",
        siteId: CONFIG.SITE_CONFIG.siteId
      },
      keys: { //接口字段兼容
         pic: "bigPic",
        title:"resourceName",
        author: "author",
        memberPrice:"memberPrice",
        bookPrice:"bookPrice",
        bookSize:'bookSize',
        starNum:"starNum",
        bookmemory:"bookPrice",
        abstract:'bookAbstract',
      },
    }
  }
};

const prod = {
  bookdetail: {
    bookdetail_01: {
      url:  "mobileBook/getBookDetail.do",
      params: {
        pubId: "",
        loginName: "",
        siteId: CONFIG.SITE_CONFIG.siteId
      },
      keys: { //接口字段兼容
        pic: "bigPic",
        title:"resourceName",
        author: "author",
        memberPrice:"memberPrice",
        bookPrice:"bookPrice",
        starNum:"starNum",
        bookmemory:"bookPrice",
        abstract:'bookAbstract',
      },
      readType:0
    }
  }
};

const platform = 'mobile';
const pageType = ['detail'];
const resourceType = ['book'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
