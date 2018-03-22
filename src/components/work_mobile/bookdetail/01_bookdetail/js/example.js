import component from "../bookdetailcontent";

const name = component.name;  // 组件标签名

const title = "图书详情组件";  // 组件title

const description = `图书详情`;  // 组件描述信息

const dev = {
  bookdetail: {
    bookdetail_01: {
      url: '../data/bookdetail_01_bookdetail.json',
      keys: { //接口字段兼容
        pic:"pub_picBig",
        Bookname: "pub_resource_name",
        author: "BOOK_SYS_AUTHORS",
        BookId:"id",
      },
    }
  }
};

const prod = {
  bookdetail: {
    bookdetail_01: {
      url: CONFIG.BASE_URL + "book/getBookDetail.do",
      params: {
        pubId: "",
        loginName:"",
      },
      keys: { //接口字段兼容
        pic:"pub_picBig",
        Bookname: "pub_resource_name",
        author: "BOOK_SYS_AUTHORS",
        BookId:"id"
      },
    }
  }
};

const platform = 'mobile';
const pageType = ['detail'];
const resourceType = ['book'];

export {name, title, dev, prod, description, platform, pageType, resourceType};
